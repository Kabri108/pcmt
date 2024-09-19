import React from 'react'
import Footer from './Footer/Footer'
import MainNavbar from './Navbar/MainNavbar'
import SubNavbar from './Navbar/SubNavbar'


export default function Layout({children}) {
  return (
    <>
     <div>
        <MainNavbar/>
        <SubNavbar/>
        {children}
        <Footer/>
     </div> 
    </>
  )
}
