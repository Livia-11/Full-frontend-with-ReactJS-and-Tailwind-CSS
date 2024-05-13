import React from 'react'
import './App.css'
import Navbar from './Components/navbar'
import Home from './Components/home'
import Clients from './Components/clients'
import Unseen from './Components/unseen'
import Help from './Components/help'
import Site from './Components/site'
import Pods from './Components/pods'
import Caring from './Components/caring'

const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <Clients/>
     <Unseen/>
     <Help/>
     <Site/>
     <Pods/>
     <Caring/>
    </>
  )
}

export default App
