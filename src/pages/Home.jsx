import React from 'react'
import Hero from '../components/Hero'
import AboutUsC from '../components/AboutUsC'
import OurServicesC from '../components/OurServicesC'
import ChooseUsC from '../components/ChooseUsC'
import IndustriesC from '../components/IndustriesC'
import TechnologiesC from '../components/TechnologiesC'
import TestimonialsC from '../components/TestimonialsC'
import FooterC from '../components/FooterC'



function Home() {
  return (
    <div>
     <Hero/>
     <AboutUsC/>
     <OurServicesC/>
     <ChooseUsC/>
     <IndustriesC/>
     <TechnologiesC/>
     <TestimonialsC/>
     <FooterC/>
    </div>
  )
}

export default Home