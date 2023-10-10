"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import ProductTable from "./productTable";
import Product from "@/lib/types";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter(
    (product: Product) =>
      product.productName.toLowerCase().includes(search.toLowerCase()) ||
      product.productOwnerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="mb-5">Contacts</h1>
      <div className="flex">
        <Link href="/products/new" className="btn btn-primary">
          Create product
        </Link>
        {/* <Search usersInfo={usersInfo} /> */}
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
      <ProductTable products={filteredProducts} />
    </>
  );
};

export default ProductsPage;
