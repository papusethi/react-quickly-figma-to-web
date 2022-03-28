import React from "react";
import { Header, Social, Features, Quotes, CTA, Footer } from "./containers";
import { Navbar } from "./components";
import "@fontsource/plus-jakarta-sans";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Social />
      <Features />
      <Quotes />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
