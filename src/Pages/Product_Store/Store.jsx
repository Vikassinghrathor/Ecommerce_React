import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Items from "./Items/Items";
import CartProvider from "../../Store/CartProvider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Store = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProductsArr(data.products);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <CartProvider>
      <>
        <Navbar showHeaderCartButton={true} />
        <Header />
        <Items productsArr={productsArr} />
        <Footer />
      </>
    </CartProvider>
  );
};

export default Store;
