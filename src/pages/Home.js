import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Components/footer'
import Services from '../Components/Services'
import NavBar from './NavBar'
import '../Components/Home.css';
import Main from '../Components/Main'
// import './Home.css';

const Home = () => {

  useEffect(()=>{
    const timer= setTimeout(()=> alert('Welcome To Ace Designz website'), 3000);
    return()=> clearTimeout(timer);
  },[])
  
  return (
    <div>
      <NavBar />
      <Main />
      <Services />
      <Footer/>
    </div>
  )
}

export default Home
