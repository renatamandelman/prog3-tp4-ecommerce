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
  const [productsFromCategory, setProductsFromCategory] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([])

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
      console.log("slug", slug)
      const response = await axios.get(`${API_URL}/categories/${slug}/products`);
      setProductsFromCategory(response.data.products);
      console.log(response.data.products)
      setLoading(false);
      
    } catch (error) {
      console.log("error:", error);
    }
  }, []);


  const handleAddToCart = (product) => {
    let productToAdd ={}
    const findProduct = cart.find((productInCart) => productInCart._id === product._id)
    if(findProduct) {
      productToAdd = {...findProduct,qty:findProduct.qty + product.qty}

    }else{
      productToAdd = product;
    }
    const filteredCart = cart.filter((productInCart) => productInCart._id !== product._id)

    setCart([...filteredCart, productToAdd]);

  }

const cartQty = () => cart.length;

const cartTotal = cart.reduce(
    (acc,product) => acc + product.qty * product.price, 0)
  

 const addOrder = async (userValues) => {
  const reducedCart = cart.map(product => {
    const prod = {
      name: product.name,
      _id: product._id,
      qty: product.qty
    }

    return prod;
  })
   const orderValues = {
      user: userValues,
      products: reducedCart,
      total: cartTotal
    };
    console.log('my order is', orderValues);
    
    try {
      const response = await axios.post(`${API_URL}/orders`, orderValues);
      console.log('response',response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <AppContext.Provider
      value={{
        products,
        productsFromCategory,
        getProducts,
        getProductsFromCategory,
        getSingleProduct,
        loading,
        cartQty,
        handleAddToCart,
        cart,
        addOrder,
        cartTotal
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
