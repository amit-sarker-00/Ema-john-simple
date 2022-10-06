import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);

  const { img, name, seller, price, ratings } = props.product;

  return (
    <div className="product" data-aos="zoom-in-right">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Price : ${price}</h4>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} stars</p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-card"
      >
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
