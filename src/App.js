import './App.css';

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/aboutme";
import Work from "./components/work";



export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Work />
    </div>
  );
}

