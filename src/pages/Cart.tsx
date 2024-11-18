import { useAppSelector } from '@/hooks';
import {
  CartItemsList,
  CartTotals,
  SectionTitle,
} from '@/components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Cart() {
  const { user } = useAppSelector((state) => state.userState);
  const { numItemsInCart } = useAppSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty Cart" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />

          <Button asChild className="mt-8 w-full">
            {user ? (
              <Link to="/checkout">Proceed to checkout</Link>
            ) : (
              <Link to="/login">Please login</Link>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
