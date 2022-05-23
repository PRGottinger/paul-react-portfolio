import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Document from "./components/Document"

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const page = "Contact";
  const [page, setPage] = useState("About");

  const render = () => {
    if (page == "About") {
      return <About></About>;
    } else if (page == "Contact") {
      return <Contact></Contact>;
    } else if (page == "Projects") {
      return <Projects></Projects>;
    } else if (page == "Document") {
      return <Document></Document>;
    } else {
      return <Resume></Resume>;
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          setPage("Contact");
        }}
      >
        click here
      </button> */}
      <Nav setPage={setPage}></Nav>
      <main>{render()}</main>
      <Footer>setPage={setPage}</Footer>
    </div>
  );
}

export default App;

// change
