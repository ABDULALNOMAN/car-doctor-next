import About from '../../components/Home/About'
import Banner from '../../components/Home/Banner'
import Info from '../../components/Home/Info'
import Service from '../../components/Home/Service'
import Products from '../../components/Home/Products'
import React from 'react'
import Team from '../../components/Home/Team'
import CoreFeatures from '../../components/Home/CoreFeatures'
import Testimonial from '../../components/Home/Testimonial'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Info></Info>
      <Products></Products>
      <Team></Team>
      <CoreFeatures></CoreFeatures>
      <Testimonial></Testimonial>
    </div>
  )
}

export default page
