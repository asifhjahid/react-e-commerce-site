import React from 'react'
import './App.css'
import LeftSideBar from './components/LeftSideBar'
import NavMenu from './components/NavMenu'


export default function App() {
  return (
    <div>

      <NavMenu />
      <LeftSideBar />
      {/* <FakeApiStore /> */}
       
    </div>
  )
}
