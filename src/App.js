import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route  } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from "./components/Cart";
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
    
    
    </>
      
  );
}

export default App;
