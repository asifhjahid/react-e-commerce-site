import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import NavMenu from './components/NavMenu';
import cartContext from './context/cartContext';
import useCart from './context/useContext';

export default function App() {
  const {cart,addToCart} = useCart() 
  return (
    <div>
      <cartContext.Provider value={{cart,addToCart}}>
      
      
       <NavMenu />
      
      
      <MainContent />
      
     
      
      </cartContext.Provider>
    </div>
  )
}
