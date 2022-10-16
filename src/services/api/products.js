const productsApi = (api) => {
  const fetchProducts = () => api.get('/products');

  /* Interface */
  return {
    fetchProducts,
  };
};

export default productsApi;
