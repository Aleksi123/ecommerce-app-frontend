import React, { useEffect } from "react";
/* import ProductList from "../components/ProductList"; */
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get("/api/Products")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log();
  }, []);

  return <div>{/* <ProductList /> */}</div>;
};

export default Home;
