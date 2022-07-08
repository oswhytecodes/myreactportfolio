import { useState } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import {Grid } from "./components/Grid"

function App() {
  return (
    <div className="App bg-whiteFC/70">
      <Hero />
      <Grid />
    </div>
  );
}

export default App;
