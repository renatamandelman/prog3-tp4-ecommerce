"use client";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import axios from "axios";
const API_URL = "http://localhost:4000";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [productsFromCategory, setProductsFromCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data.products);
      console.log(response.data.products);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  const getSingleProduct = useCallback(async ({ id }) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/${id}`);
      setSingleProduct(response.data.product);
      setLoading(false);
       return response.data.product;
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  const getProductsFromCategory = useCallback(async ({ slug }) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/categories/${slug}`);
      setProductsFromCategory(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        getProducts,
        getProductsFromCategory,
        getSingleProduct,
        singleProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext:must be used within a AppContextProvider");
  return context;
};

export default AppContext;
