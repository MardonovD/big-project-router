//https://fakestoreapi.com/products
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
const Shop = () => {
  
  const dispatch = useDispatch();

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
