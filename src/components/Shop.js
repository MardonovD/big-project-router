//https://fakestoreapi.com/products
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
import { productAction } from "../redux/actions/productsAction";
const Shop = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  const axiosProducts = async (dis) => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "Error");
      });
    dis(res);
    console.log(res);
  };
  useEffect(() => {
    const dis = (data) => {
      dispatch(productAction(data.data));
    };
    axiosProducts(dis);
  }, []);
  return (
    <div className="shop">
      <div className="container"></div>
    </div>
  );
};

export default Shop;
