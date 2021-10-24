import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/productActions";

const ProductList = () => {
  return <div></div>;
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(ProductList);
