import React from "react";
import coverImage from "../../assets/large/paul.jpg";

function About() {
  return (
    <section className="about-section">
      <h1 id="about">About Me</h1>
      <div className="container-about">
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "40%" }}
        alt="cover"
      />
      
        <div className="about-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum turpis sed ex condimentum molestie. Mauris condimentum
            lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
            metus aliquam maximus. Proin aliquam justo nec diam vulputate
            vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit
            massa eleifend. Morbi tristique justo vel turpis sollicitudin, et
            tristique velit convallis. In hac habitasse platea dictumst.
            Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl
            nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea
            dictumst.
          </p>
          <ul>
            <li><a href="https://github.com/PRGottinger" target="_blank">Paul's Github</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
