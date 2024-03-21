import { } from 'react'


import Header from './Components/Header'
import Hero from './Components/Hero'
import Testimonial from './Components/Testimonial'
import Features from './Components/Features'
import ContactUS from './Components/ContactUS'
import Footer from './Components/Footer'
import ScrollToTopButton from './Components/ScrollToTopButton'


function App() {


  return (
    <div className='relative'>
      <Header />
      <Hero />
      <Testimonial />
      <Features />
      <ContactUS />
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default App;
