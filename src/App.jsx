import { useState } from "react";
import Nav from "./component/Nav";
import Hero from "./hero/Hero";
import Content from "./content/Content";
import './App.css';
function App(){
  const [count,setCount] = useState(0);
  return(
    <>
      <Nav/>
      <Hero/>
      <Content/>
    </>
  );
}
export default App