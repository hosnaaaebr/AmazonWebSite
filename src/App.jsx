
// import { Routes, Route } from "react-router-dom";
// // Import components
// import Home from "./pages/Home";
// import Header from "./components/Header/Header";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
// import Product from "./pages/Product";
// import Cart from './pages/Cart';
// import PopUp from './components/PopUp/PopUp';
// import { useState ,useEffect } from "react";

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [alert, setAlert] = useState(null);

//   const addToCart = (product) => {
//     const isInCart = cart.find((item) => item.id === product.id);
//     if (isInCart) {
//       setCart(cart.filter((item) => item.id !== product.id)); // Remove from cart
//       setAlert(false); // No alert for removing from cart
//     } else {
//       setCart([...cart, product]); // Add to cart
//       setAlert(true); // Show alert when product is added to cart
//     }

//     // Hide alert after 1 second
//     setTimeout(() => setAlert(false), 1000);
//   };

//   const updateCart = (newCart) => {
//     setCart(newCart);
//   };

//   return (
//     <div className="container">
//       <PopUp alert={alert} />
//       <Header cart={cart} />
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<Product cart={cart} addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart initialCart={cart} updateCart={updateCart} />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import PopUp from './components/PopUp/PopUp';
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(null);

  const addToCart = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== product.id)); // Remove from cart
      setAlert("removed"); // Show alert for removing from cart
    } else {
      setCart([...cart, product]); // Add to cart
      setAlert("added"); // Show alert when product is added to cart
    }

    // Hide alert after 1 second
    setTimeout(() => setAlert(null), 1000);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <div className="container">
      <PopUp alert={alert} />
      <Header cart={cart} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart initialCart={cart} updateCart={updateCart} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
