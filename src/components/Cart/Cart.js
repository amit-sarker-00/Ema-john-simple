import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const taxFixed = parseFloat(tax.toFixed(2));
  const grandTotal = total + shipping + taxFixed;
  //   const grandTotalInt = parseInt(grandTotal);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected items:{cart.length}</p>
      <p>Total Price :${total}</p>
      <p>Total Shipping :${shipping}</p>
      <p>Tax :${taxFixed}</p>
      <h5>Grand Total :${grandTotal}</h5>
    </div>
  );
};

export default Cart;
