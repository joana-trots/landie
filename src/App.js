import React from 'react'
import './App.sass'
import Hero from './components/Hero'
import Block from './components/Block'
import image_1 from './assets/image_1.svg'
import image_2 from './assets/image_2.svg'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const navbarLinks = [
  {url: "/landie", title: "Home"},
  {url: "#about", title: "About"}, 
  {url: "#footer", title: "Contact"}
]
function App() {
  return (
    <div className="App" id='content'>
      <Navbar navbarLinks={navbarLinks}></Navbar>
      <Hero></Hero>
      <Block
        imageSrc={image_1} 
        title={"Light, Fast & Powerful"}
        text={[
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et&nbsp;magnis dis parturient montes, nascetur ridiculus</p>,
          <p>mus. Donec quam felis, ultricies nec, pellentesque&nbsp;eu, pretium quis, sem. Nulla consequat massa quis enim.</p>]} 
        flipped={true}
        options={true} />
      <Block 
        imageSrc={image_2} 
        title={"Light, Fast & Powerful"}
        text={[
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et&nbsp;magnis dis parturient montes, nascetur ridiculus</p>,
          <p>mus. Donec quam felis, ultricies nec, pellentesque&nbsp;eu, pretium quis, sem. Nulla consequat massa quis enim.</p>]} 
        />
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
