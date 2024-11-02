import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to='/' className={buttonVariants({variant: 'outline', size: 'sm'})}>back home</Link>

      <Button asChild size='lg'>
        <Link to='/'>home</Link>
      </Button>
    </div>
  );
}

export default Cart
