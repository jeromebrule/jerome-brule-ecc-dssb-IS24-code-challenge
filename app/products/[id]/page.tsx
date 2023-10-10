"use client";

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {notFound} from "next/navigation";
import Product from "@/lib/types";
import React from "react";
import Link from "next/link";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({params: {id}}: Props) => {
  const {data: session, status} = useSession();
  const [product, setProduct] = useState<Product>([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(`/api/products/${id}`);
      const response = await query.json();
      setProduct(response);
    };
    getData();
  }, []);

  if (!product) notFound();

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col">
        <div className="card-body">
          <h2 className="card-title">{product.productName}</h2>
          <ul>
            <li>
              <strong>Product Owner:</strong> {product.productOwnerName}
            </li>
            <li>
              <strong>Scrum Master:</strong> {product.scrumMasterName}
            </li>
            <li>
              <strong>Start Date: </strong>
              {product.startDate}
            </li>
            <li>
              <strong>Methodology:</strong> {product.methodology}
            </li>
            <li>
              <strong>Location:</strong> {product.location}
            </li>
          </ul>
          {product.developers && (
            <>
              <h2 className="card-title">Developers</h2>
              <ul className="list-disc">
                {product.developers.map((dev: any, index: number) => (
                  <li key={index}>{dev.name}</li>
                ))}
              </ul>
            </>
          )}
          <div className="card-actions">
            <Link
              href={`/products/${encodeURIComponent(product.productId)}/edit`}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
