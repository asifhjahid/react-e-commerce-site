import React from 'react';
import './App.css';
import FakeApiStore from './components/fakeApi/FakeApiStore';
import Home from './components/Home';
import LeftSideBar from './components/LeftSideBar';
import NavMenu from './components/NavMenu';
import cartContext from './context/cartContext';
import useCart from './context/useContext';


export default function App() {
  const {cart,addToCart} = useCart()
  return (
    <div>
      <cartContext.Provider value={cart,addToCart}>
      <Home />
      
       <NavMenu />
       <LeftSideBar /> 
       <FakeApiStore />
      </cartContext.Provider>
    </div>
  )
}
