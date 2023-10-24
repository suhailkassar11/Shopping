import React from "react"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Order from "./pages/order/order";
import Cart from "./pages/cart/cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct"
import UpdateProducts from "./pages/admin/pages/UpdateProducts"
import Allproducts from "./pages/allproducts/Allproducts";

function App() {
  return (
    <MyState>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp  />} />
          <Route path="/productInfo" element={<ProductInfo/>} />
          <Route path="/allProducts" element={<Allproducts/>} />
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path="/updateProduct" element={<UpdateProducts/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
    </MyState>
      )
}

export default App
