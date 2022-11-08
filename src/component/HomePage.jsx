import React from 'react'
import { useSelector } from 'react-redux'
import CarouselHome from './CarouselHome'
import NavbarTop from './NavbarTop'
import '../Css/Background.css'


const HomePage = () => {
  const user = useSelector((state)=> state.user.user)
  return (
    <>
    <div className='d-flex flex-column'> 
    <NavbarTop/><br/><br/><br/>
      <div className='container d-flex flex-column 
      justify-content-center align-items-center'>
        <CarouselHome/>
        <span>OWNER : {user}</span>
      </div>
    </div>
    
    </>
   
  )
}

export default HomePage