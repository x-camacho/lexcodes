import React, { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./services/context";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode &&  "white"}}>
     <Intro />
     <About />
     <ProductList />
     <Contact />
     <Toggle />
  </div>
  )
}

export default App;