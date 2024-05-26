import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function MainLayout() {
  return (
   <>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <ToastContainer></ToastContainer>
   </>
  )
}

export default MainLayout
