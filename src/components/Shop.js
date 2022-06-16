//https://fakestoreapi.com/products
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
import { productAction } from "../redux/actions/productsAction";

const Shop = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store[0]);
  console.log(state);

  const axiosProducts = async (dis) => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "Error");
      });
    dis(res);
  };
  useEffect(() => {
    const dis = (data) => {
      dispatch(productAction(data.data));
    };
    axiosProducts(dis);
  }, []);

  const savatcha=()=>{

  }
  return (
    <div className="shop mt-3">
      <div className="container d-flex flex-wrap  justify-content-between gap-3">
        {state?.map((item, idex) => {
          return (
            <div className="card" key={idex + 1} style={{ width: "18rem" }}>
              <img
                style={{ width: "286px", height: "400px" }}
                src={item.image}
                className="card-img-top"
                alt="image "
              />
              <div className="card-body text-center">
                <h3 className="card-title">{item.category}</h3>
                <p className="card-text">{item.title}</p>
                <a
                  href="#"
                  onClick={() => {
                    savatcha();
                  }}
                  className="btn btn-primary"
                >
                  Add Savatcha
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
