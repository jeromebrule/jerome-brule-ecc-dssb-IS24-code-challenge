"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import ProductTable from "./productTable";
import Product from "@/lib/types";
import {isLisa, isAlan} from "@/helpers/session";
import {useSession} from "next-auth/react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const {data: session} = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch initial data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  let filteredProducts = products.filter(
    (product: Product) =>
      product.productName.toLowerCase().includes(search.toLowerCase()) ||
      product.productOwnerName.toLowerCase().includes(search.toLowerCase())
  );

  if (isLisa(session)) {
    filteredProducts = products.filter((product: Product) =>
      product.scrumMasterName.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (isAlan(session)) {
    filteredProducts = products.filter((product: Product) =>
      product.developers.some((developer) =>
        developer.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  let activeRows = {
    productId: true,
    productNumber: true,
    productName: true,
    productOwnerName: true,
    developers: true,
    scrumMasterName: true,
    startDate: true,
    methodology: true,
    location: true,
    tools: true,
  };

  if (session) {
    if (isLisa(session)) {
      activeRows = {
        productId: false,
        productNumber: true,
        productName: true,
        productOwnerName: true,
        developers: true,
        scrumMasterName: true,
        startDate: true,
        methodology: true,
        location: false,
        tools: true,
      };
    }

    if (isAlan(session)) {
      activeRows = {
        productId: false,
        productNumber: false,
        productName: true,
        productOwnerName: true,
        developers: true,
        scrumMasterName: true,
        startDate: false,
        methodology: true,
        location: true,
        tools: true,
      };
    }
  }
  return (
    <>
      <h1 className="mb-5">Products - Total: {filteredProducts.length}</h1>
      <div className="flex">
        <Link href="/products/new" className="btn btn-primary">
          new product
        </Link>
        <div className="form-control ml-3 grow">
          <form>
            <div className="join w-full">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="divider"></div>
      <ProductTable activeRows={activeRows} products={filteredProducts} />
    </>
  );
};

export default ProductsPage;
