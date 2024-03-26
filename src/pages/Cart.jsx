


import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto">
      {cart?.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center items-start md:gap-8 mt-12">
          <div className="w-full md:w-2/3">
            {cart?.map((item, index) => (
              <CartItem key={item.id} itemIndex={index} item={item} />
            ))}
          </div>
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3 mt-10">
            <div>
              <div className="text-green-700 text-sm font-semibold">Your Cart</div>
              <div className="font-semibold text-2xl uppercase text-green-700 mb-3">Summary</div>
              <p className="text-xs text-green-700 font-semibold">
                <span>Total Items: {cart?.length}</span>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-sm">
                Total Amount:
                <span className="font-semibold ml-1">${totalAmount}</span>
              </p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-12">
          <h1 className="text-2xl">Cart Empty</h1>
          <NavLink to="/">
            <button className="bg-green-700 text-white px-4 py-2 rounded-md">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Cart;


