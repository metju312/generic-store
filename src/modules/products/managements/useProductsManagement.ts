const useProductsManagement = () => {

  const fetchProducts = () => {
    return [{name: "cos"}, {name: "cos2"}, {name: "cos3"}];
  };

  return {
    fetchProducts
  };
}

export default useProductsManagement;