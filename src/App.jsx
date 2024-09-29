import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== product.id)); // Remove from cart
    } else {
      setCart([...cart, product]); // Add to cart
    }
  };
  return (
    <div className="container">
      <Header cart={cart}/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product cart={cart} addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart initialCart={cart} />} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App;