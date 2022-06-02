import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const page = "Contact";
  const [page, setPage] = useState();

  let arr = [
    {
      title: "Dev Drip: E-Commerce Website",
      src: "./assets/small/dev-drip.png",
      githubLink: "https://github.com/saraoros/dev-drip",
      githubName: "Dev Drip Github Repo",
    },
    {
      title: "Community Posting Board",
      src: "/assets/small/comm-post.png",
      githubLink: "www.google.com",
      githubName: "Community Posting Board Github Repo",
    },
    {
      title: "Festival of Nations",
      src: "/assets/small/fes-of-nat.jpg",
      githubLink: "#",
      githubName: "Festival of Nations Github Repo",
    },
    {
      title: "Destination Briefing",
      src: "/assets/small/destination-briefing.jpg",
      githubLink: "#",
      githubName: "Destination Briefing Github Repo",
    },
  ];

  const render = () => {
    if (page == "About") {
      return <About></About>;
    } else if (page == "Contact") {
      return <Contact></Contact>;
    } else if (page == "Projects") {
      return (
        <div>
          <h1>Paul's Projects</h1>
          {arr.map((currValue, index) => {
            return (
              <Projects
                key={index}
                title={currValue.title}
                githubName={currValue.githubName}
                githubLink={currValue.githubLink}
                src={currValue.src}
              />
            );
          })}
        </div>
      );
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
