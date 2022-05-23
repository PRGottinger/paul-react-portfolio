import React from 'react';
import projectOne from "../../assets/small/comm-post.png"

function Projects(props) {
    return (
        <div>
           
            <h1>Paul's Projects</h1>
           
            <br/>
            
            <h4>Community Posting Board: a Tech Blog</h4>
            <img
        src={projectOne}
        className="my-2"
        style={{ width: "40%" }}
        alt="cover"
        ></img>
       
      <p><a href="https://github.com/PRGottinger/community-posting-board" target="_blank"></a>Community Posting Board Github Repo</p>
        </div>
         

    );
}

export default Projects;