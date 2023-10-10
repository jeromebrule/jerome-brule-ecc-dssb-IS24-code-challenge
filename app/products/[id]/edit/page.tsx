import {notFound} from "next/navigation";
import Product from "@/lib/types";
import ProductForm from "@/app/components/ProductForm";

interface Props {
  params: {
    id: number;
  };
}

const Edit = async ({params: {id}}: Props) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const productInfo: Product = await res.json();

  if (!productInfo.productId) notFound();

  return (
    <>
      <h2 className="card-title">Edit {productInfo.productName} information</h2>
      <ProductForm productInfo={productInfo} />
    </>
  );
};

export default Edit;
