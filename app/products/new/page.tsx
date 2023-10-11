"use client";
import React from "react";
import ProductForm from "@/app/components/ProductForm";
import {isLisa, isAlan} from "@/helpers/session";
import {useSession} from "next-auth/react";

const NewProductForm = () => {
  const {data: session} = useSession();

  let activeFields = {
    productName: true,
    productOwnerName: true,
    developers: true,
    scrumMasterName: true,
    startDate: true,
    methodology: true,
    location: true,
  };

  if (isLisa(session)) {
    activeFields = {
      productName: true,
      productOwnerName: true,
      developers: true,
      scrumMasterName: true,
      startDate: true,
      methodology: true,
      location: false,
    };
  }

  if (isAlan(session)) {
    activeFields = {
      productName: true,
      productOwnerName: true,
      developers: true,
      scrumMasterName: true,
      startDate: false,
      methodology: true,
      location: true,
    };
  }

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Create new product</h2>
        <ProductForm activeFields={activeFields} />
      </div>
    </>
  );
};

export default NewProductForm;
