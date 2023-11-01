import { useContext,createContext,useState, useEffect } from "react";

const cartContext=createContext();

const CartProvider=({children})=>{
    const[cart,setCart]=useState([])
   useEffect(()=>{
    const existingCart=localStorage.getItem('cart')
    if(existingCart) setCart(JSON.parse(existingCart))
   },[])
    return (
        <cartContext.Provider value={{cart,setCart}}>
            {children}
        </cartContext.Provider>
    )
}
const useCart=()=>useContext(cartContext)
export {CartProvider,useCart};