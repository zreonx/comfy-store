import { Hero, FeaturedProducts } from "@/components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductResponse } from "@/utils";

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {

  const response = await customFetch<ProductResponse>(url);

  return {
    ...response.data
  }

};

function Landing() {
  const result = useLoaderData() as ProductResponse

  console.log(result);
  
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing
