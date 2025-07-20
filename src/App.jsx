import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Container>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
