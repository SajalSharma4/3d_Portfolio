import {
    mobile,
    backend,
    creator,
    web,
    java,
    python,
    javascript,
    html,
    css,
    azure,
    reactjs,
    mysql,
    postgre,
    tailwind,
    nodejs,
    mongodb,
    weather,
    VIT,
    kv,
    ndps,
    aws,
    contacts,
    chanakya,
    carrent,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Resume",
      title: "Resume",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const resume = [
    {
      title: "Download CV",
    },

  ];
  

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AWS Cloud Practioner",
      icon: mobile,
    },
    {
      title: "Azure Cloud Practioner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "My SQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
  ];
  const education = [
    {
      title: "B.Tech (Computer Science Engineering)",
      company_name: "Vellore Institute Of Technology, Bhopal",
      icon: VIT,
      iconBg: "#383E56",
      date: "October 2020 - Present",
      points: [
        "Current CGPA : 8.65/10",
      ],
    },
    {
      title: "12th Standard",
      company_name: "Kendriya Vidyalya, New Delhi",
      icon: kv,
      iconBg: "#E6DEDD",
      date: "-May 2020",
      points: [
        "Percentage : 92%",
      ],
    },
    {
      title: "10th Standard",
      company_name: "Navdeep Public SS School, Hamirpur, H.P.",
      icon: ndps,
      iconBg: "#383E56",
      date: "-April 2018",
      points: [
        "Percentage : 96%",
      ],
    },
  ];
  
  const experiences = [
    {
      description:
        "Took one month training on Web Development. Worked on 2 Web Development live projects from Artifintel in association with SkillVertex.",
      name: "SkillVertex",
      designation: "Web Development Trainee and Intern",
      timeline: "(Aug 2022-Sep 2022)",
    },
  ];
  
  const projects = [
    {
      name: "Chanakya",
      description:
        "Chanakya is a Full Stack Expense Tracking application. It allows different users to track and categorize their individual expenses based on the data they provide. It also represents their data in a graphical format to provide user comfort.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "yellow-text-gradient",
        },
        {
          name: "MUI",
          color: "purple-text-gradient",
        },
      ],
      image: chanakya,
      source_code_link: "https://github.com/SajalSharma4/Chanakya-MERN",
    },
    {
      name: "Weather App ",
      description:
        "A Web application created to get the latest weather details of a city. User enters the city and the country gets the fresh weather details of that City.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeatherMapAPI",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/SajalSharma4/Weather-App-React",
    },
    {
      name: "Contacts Manager ",
      description:
        "An online platform to manage your contacts. The Contacts Manager contains the name and email addresses of the contact. You can save, search, alter and delete your contacts as you please.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "RestAPI",
          color: "pink-text-gradient",
        },
      ],
      image: contacts,
      source_code_link: "https://github.com/SajalSharma4/Contacts-Manager",
    },
  ];
  
  export { services, technologies, experiences, education, projects,resume };