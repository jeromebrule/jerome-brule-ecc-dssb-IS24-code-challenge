import {notFound} from "next/navigation";
import Product from "@/lib/types";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import ProductForm from "@/app/components/ProductForm";
import {isLisa, isAlan} from "@/helpers/session";
import {getServerSession} from "next-auth/next";

interface Props {
  params: {
    id: number;
  };
}

const Edit = async ({params: {id}}: Props) => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const productInfo: Product = await res.json();

  if (!productInfo.productId) notFound();

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
      <h2 className="card-title">Edit {productInfo.productName} information</h2>
      <ProductForm activeFields={activeFields} productInfo={productInfo} />
    </>
  );
};

export default Edit;
