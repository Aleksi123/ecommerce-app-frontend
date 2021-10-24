import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios.get("/api/products").then((res) =>
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    })
  );
};

export const addProduct = (product) => (dispatch) => {
  axios.post("/api/products", item).then((res) =>
    dispatch({
      type: "ADD_PRODUCT",
      payload: res.data,
    })
  );
};
