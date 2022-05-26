import React from "react";
import projectOne from "../../assets/small/comm-post.png"

function Projects(props) {
  return (
    <div>
      <br />

      <h4>{props.title}</h4>
      <img
        src={props.src}
        className="my-2"
        style={{ width: "40%" }}
        alt="cover"
      ></img>

      <p>
        <a href={props.githubLink} target="_blank"></a>
        {props.githubName}
      </p>
    </div>
  );
}

export default Projects;
