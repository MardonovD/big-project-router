import axios from "axios";
import React, { useEffect } from "react";
//https://fakestoreapi.com/products
const Shop = () => {
  const axiosProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "Error");
      });
    console.log(res);
  };
  useEffect(() => {
    axiosProducts();
  }, []);
  return (
    <div className="shop">
      <div className="container"></div>
    </div>
  );
};

export default Shop;
