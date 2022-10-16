import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PrimaryButton } from "../components/PrimaryButton";
import { LoadingSelectors } from "../helpers/redux/loading_redux";
import { ProductsListActions, ProductsListSelectors } from "../store";
import Navbar from "./Navbar";

const Home = ({ products, fetchProducts, loading }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: ProductsListSelectors.getProducts(state),
  loading: LoadingSelectors.getIndicatorForSection(state, "fetchProducts"),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(ProductsListActions.fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
