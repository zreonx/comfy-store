import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { customFetch, type ProductResponse } from '@/utils';
import { type LoaderFunction } from 'react-router-dom';



const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
  const response = await customFetch<ProductResponse>(url);
  console.log(response);
  
  return { ...response.data };
};
function Products() {
  return (
    <>
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
      <h1 className="text-4xl">Products</h1>
    </>
  );
}

export default Products;
