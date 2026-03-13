import React from "react";

export default function OrderCard({product,price,quantity,Decrease,Increase,}) 

{
  return (
    <div className="order">
      <h4>{product}</h4>
      <small>$ {price}</small>
      <div className="order-quantity">
        <div className="order-button" onClick={Decrease} style={{backgroundColor: quantity === 0 ? "gray" : "#9cc54b"}}>
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={Increase} style={{backgroundColor: "#9cc54b"}}>
          +
        </div>
      </div>
    </div>
  );
}
