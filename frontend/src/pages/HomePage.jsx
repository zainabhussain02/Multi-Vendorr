import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero"
import Categories from"../components/Route/Categories";
import BestDeals from "../components/Route/BestDeals";
import  FeaturedProduct from "../components/Route/FeaturedProduct";
import Events from "../components/Route/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from '../components/Layout/Footer';


const HomePage = () => {
  
  return (
    <div>
       <Header  activeHeading ={1}/>
       <Hero/>
       <Categories/>
       <BestDeals/>
       <Events/>
       <FeaturedProduct/>
       <Sponsored/>
       {/* <Footer/> */}
       <Footer/>
       
         </div>
  )
}

export default HomePage;