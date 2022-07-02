import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
  <div>
     <Intro />
     <About />
     <ProductList />
     <Contact />
  </div>
  )
}

export default App;