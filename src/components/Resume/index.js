import React from "react";
import resumeImage from "../../assets/large/Resume.png";

function Resume(props) {
  return (
    <div>
      <h1>Paul's Resume</h1>
      <br />
      <div>
        <h4>University of Minnesota's Full-Stack Web Development Bootcamp</h4>
        <ul>
          <li>-HTML, CSS, Javscript, JQuery</li>
          <li>-Web APIs, Third-Party APIs, Server-Side APIs</li>
          <li>-Node.js, Object-Oriented Programming, Express.js</li>
          <li>-Object-Relational Mapping, Model-View-Controller</li>
          <li>-SQL, NoSQL (MongoDB), GraphQL</li>
          <li>-Progressive Web Applications, Regex statments, React</li>
          {/* <li
            onClick={() => {
              props.setPage("About");
            }}
            className="mx-2"
          >
            <a href="#document">About me</a> */}
        </ul>
        <a href="Resume.png" download>Paul's Resume</a>
        
          
        
      </div>
    </div>
  );
}

export default Resume;
