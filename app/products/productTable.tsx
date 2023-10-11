"use client";

import Link from "next/link";
import {RiEdit2Line, RiBox1Line, RiDeleteBin5Line} from "react-icons/ri";
import React, {useState, useEffect} from "react";
import Toast from "../components/Toast";
import {format} from "date-fns";
import Product from "@/lib/types";

interface activeRows {
  productId: boolean;
  productNumber: boolean;
  productName: boolean;
  productOwnerName: boolean;
  developers: boolean;
  scrumMasterName: boolean;
  startDate: boolean;
  methodology: boolean;
  location: boolean;
  tools: boolean;
}

interface Props {
  products: any;
  activeRows: activeRows;
}

const ProductTable = ({products: initialProducts, activeRows}: Props) => {
  const [products, setProducts] = useState(initialProducts);
  const onDelete = async (productId: string) => {
    const url = `/api/products/${productId}`;
    const method = "DELETE";

    try {
      const response = await fetch(url, {
        method,
      });

      if (response.ok) {
        const updatedProducts = products.filter(
          (product: any) => product.productId !== productId
        );
        setProducts(updatedProducts);
      } else {
        console.error(`Failed to delete product with ID ${productId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <>
      <table className="table table-zebra table-auto">
        <thead>
          <tr className="hidden sm:table-row">
            {activeRows.productId && <th>Product ID</th>}
            {activeRows.productNumber && <th>Product Number</th>}
            {activeRows.productName && <th>Product Name</th>}
            {activeRows.productOwnerName && <th>Product Owner</th>}
            {activeRows.developers && <th>Developers</th>}
            {activeRows.scrumMasterName && <th>Scrum Master</th>}
            {activeRows.startDate && <th>Start Date</th>}
            {activeRows.methodology && <th>Methodology</th>}
            {activeRows.location && <th>Location</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.productId} className="tr-class">
              {activeRows.productId && (
                <td className="td-class">{product.productId}</td>
              )}
              {activeRows.productNumber && (
                <td className="td-class">{product.productNumber}</td>
              )}
              {activeRows.productName && (
                <td className="td-class">
                  <Link
                    href={`/products/${encodeURIComponent(product.productId)}`}
                  >
                    {product.productName}
                  </Link>
                </td>
              )}
              {activeRows.productOwnerName && (
                <td className="td-class">{product.productOwnerName}</td>
              )}
              {activeRows.developers && (
                <td className="td-class">
                  <ul>
                    {product.developers.map((dev: any, index: number) => (
                      <li key={index + 99} className="list-disc">
                        {dev.name}
                      </li>
                    ))}
                  </ul>
                </td>
              )}
              {activeRows.developers && (
                <td className="td-class">{product.scrumMasterName}</td>
              )}
              {activeRows.startDate && (
                <td className="td-class">
                  {format(new Date(product.startDate), "MMMM dd, yyyy")}
                </td>
              )}
              {activeRows.methodology && (
                <td className="td-class">{product.methodology}</td>
              )}
              {activeRows.location && (
                <td className="td-class">{product.location}</td>
              )}
              {activeRows.tools && (
                <td className="td-class">
                  <div
                    className="tooltip tooltip-error"
                    data-tip="delete product"
                  >
                    <button
                      onClick={() => onDelete(product.productId)}
                      className="btn btn-circle btn-sm mr-3"
                    >
                      <RiDeleteBin5Line color="#FF0000" size={20} />
                    </button>
                  </div>
                  <div
                    className="tooltip tooltip-info"
                    data-tip="product details"
                  >
                    <Link
                      href={`/products/${encodeURIComponent(
                        product.productId
                      )}`}
                      className="btn btn-circle btn-sm mr-3"
                    >
                      <RiBox1Line color="#000" size={20} />
                    </Link>
                  </div>
                  <div className="tooltip tooltip-info" data-tip="edit product">
                    <Link
                      href={`/products/${encodeURIComponent(
                        product.productId
                      )}/edit`}
                      className="btn btn-circle btn-sm"
                    >
                      <RiEdit2Line color="#000" size={20} />
                    </Link>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
