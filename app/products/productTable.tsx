"use client";

import Link from "next/link";
import {useSession} from "next-auth/react";
import {RiEdit2Line, RiBox1Line, RiDeleteBin5Line} from "react-icons/ri";
import React, {useState, useEffect} from "react";
import Toast from "../components/Toast";
import {format} from "date-fns";

interface Props {
  products: any;
}

const ProductTable = ({products: initialProducts}: Props) => {
  const {data: session} = useSession();
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
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Owner</th>
            <th>Developers</th>
            <th>Scrum Master</th>
            <th>Start Date</th>
            <th>Methodology</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.productId} className="tr-class">
              <td className="td-class">{product.productId}</td>
              <td className="td-class">
                <Link
                  href={`/products/${encodeURIComponent(product.productId)}`}
                >
                  {product.productName}
                </Link>
              </td>
              <td className="td-class">{product.productOwnerName}</td>
              <td className="td-class">
                <ul>
                  {product.developers.map((dev: any, index: number) => (
                    <li key={index + 99} className="list-disc">
                      {dev.name}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="td-class">{product.scrumMasterName}</td>
              <td className="td-class">
                {format(new Date(product.startDate), "MMMM dd, yyyy")}
              </td>
              <td className="td-class">{product.methodology}</td>
              <td className="td-class">{product.location}</td>
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
                    href={`/products/${encodeURIComponent(product.productId)}`}
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
