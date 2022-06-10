import React from "react";
import { applications } from "../../data";
import projectOne from "../../assets/small/comm-post.png";
import projectTwo from "../../assets/small/destination-briefing.jpg";
import projectThree from "../../assets/small/dev-drip.png"

// function Projects(props) {


//   function Wrapper(props) {
// return <div className="wrapper">{props.children}</div>
//   }

//   function Projects () {

  
  // const portfolio = [
    //     {
    //       // image: projectOne,
    //   //     name: "",
    //   //     description:
    //   //       "This is a blog application where a user can login, create a post, comment on and like other posts.",
    //   //     tools: ["javascript", "react", "bootsrap"],
    //   //     github: "",
    //     },
    //     {
    //       // image: projectTwo,
    //   //     name: "",
    //   //     description: "This is a one-stop application for travel info",
    //   //     tools: ["javascript", "html", "bootsrap"],
    //   //     github: "",
    //     },
  // ];

//   return (
//     <div>
//       <br />

//       <h4>{props.title}</h4>
//       <ul>
//         {portfolio.map((category) => (
//           <li key={category.name}>
//             {<span>{props.image}</span>}
//             {/* <span>{category.image}</span> */}
//           </li>
//         ))}
//       </ul>

//       <img
//         src={props.src}
//         className="my-2"
//         style={{ width: "40%" }}
//         alt="cover"
//       ></img>

//       <p>
//         <a href={props.githubLink} target="_blank"></a>
//         {props.githubName}
//       </p>
//     </div>
//   );
// }


function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Paul's Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="flex flex-wrap project-container">
          {applications.map((application) => (
            <a
              href={application.link}
              // key={application.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative project-image" >
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={application.image}
                  // src={projectOne}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {/* {application.subtitle} */}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {application.title}
                  </h1>
                  <p className="leading-relaxed">{application.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
