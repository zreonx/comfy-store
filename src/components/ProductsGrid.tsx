import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { formatAsDollars, type ProductResponse } from '@/utils';

function ProductsGrid() {
  const { data: products } = useLoaderData() as ProductResponse;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="group">
              <CardContent className="p-4">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover h-64 md:h-48 w-full hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="text-primary font-light mt-2">
                    {dollarsAmount}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
