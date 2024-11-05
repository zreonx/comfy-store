import { Hero, FeaturedProducts } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductResponse } from "@/utils";

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {

  const response = await customFetch<ProductResponse>(url);

  return {
    ...response.data
  }

};

function Landing() {
  
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing
