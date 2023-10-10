"use client";

import React from "react";
import ProductForm from "@/app/components/ProductForm";

const NewProductForm = () => {
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Create new product</h2>
        <ProductForm />
      </div>
    </>
  );
};

export default NewProductForm;
