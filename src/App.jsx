import { useState } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import { Grid } from "./components/Grid";
import { Collage } from "./components/Collage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-whiteFC m-auto">
      <Hero />
      <Grid />
      <Collage />
      <Footer />
    </div>
  );
}

export default App;
