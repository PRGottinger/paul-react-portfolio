import imageDev from "./assets/small/dev-drip.png"
import imageCom from "./assets/small/comm-post.png"
import imageFes from "./assets/small/fes-of-nat.jpg"
import imageDes from "./assets/small/destination-briefing.jpg"

export const applications = [
    {
      title: "DevDrip: E-Commerce Website",
      // subtitle: "MERN Stack",
      description:
        "A Full MERN-Stack E-Commerece website built using REACT, MongoDB, GraphQL, Node.js and deployed to Heroku.",
    
      image: imageDev,
      link: "https://github.com/saraoros/dev-drip",
    },
    {
      title: "Community Posting Board: A Tech Blog",
      // subtitle: "React and Python",
      description:
        "A social media site in which a user can login, make a post, and comment on and like other posts.",
      
        image: imageCom,  
        link:  "https://github.com/PRGottinger/community-posting-board",
    },
    {
      title: "Festival of Nations",
      // subtitle: "React and Firebase",
      description:
        "A full-stack application for planning a user's event at the Festival of Nations event in Saint Paul, MN.",
      image: imageFes,
      link:  "https://github.com/Sonarie/festivalOfNations",
    },
    {
      title: "Destination Briefing",
      // subtitle: "React Hooks",
      description:
        "A one-stop application for everything you need to know about any destination you want to travel to.",
      image: imageDes,
      link: "https://github.com/pjlawler/destination-briefing",
    },
  ];