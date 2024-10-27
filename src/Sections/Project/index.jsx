/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

//Assets
import FoodMunchCoverImage from "../../assets/images/foodmunch_cover_image.png"
import TodosCoverImage from "../../assets/images/todos_cover_image.png"
import JobbyAppCoverImage from "../../assets/images/jobbyapp_cover_image.png"


const projectListData = [
  {
    id: 1,
    title: "Food Munch",
    imgUrl: FoodMunchCoverImage,
    description:
      "A fully responsive website that offers a comprehensive list of food items and detailed information about each item.",
    technologyUsed: "HTML, CSS, Bootstrap",
    webLink: "https://anujfoodmunch.ccbp.tech/",
  },
  {
    id: 2,
    title: "Todos Application",
    imgUrl: TodosCoverImage,
    description:
      "Developed a persistent todo application with CRUD operations to track tasks and dynamically updated the UI.",
    technologyUsed: "HTML, CSS, JS, Bootstrap",
    webLink: "https://anujtodo.ccbp.tech/",
  }, 
  {
    id: 3,
    title: "Jobby App",
    imgUrl: JobbyAppCoverImage,
    description:
      "Created an all-encompassing job search platform with secure user information and REST API calls. use credentials username: rahul, password: rahul@2021",
    technologyUsed: "React JS, JS, CSS, Bootstrap, REST API Calls, JWT Tokens",
    webLink: "https://anujjobbyapp.ccbp.tech/login",
  },
];

const Projects = () => (
  <Container>
    <Header>
      <h1>My Projects</h1>
      <p>Explore some of my most recent works!</p>
    </Header>
    <ProjectList>
      {projectListData.map((eachItem, index) => (
        <ProjectItem key={eachItem.id} delay={index * 0.2}>
          <ProjectCard projectListData={eachItem} />
        </ProjectItem>
      ))}
    </ProjectList>
  </Container>
);

const ProjectItem = ({ children, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Projects;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 60px 15px;
  background: linear-gradient(135deg, #f2f6fa, #eaeff5);
  
  @media (max-width: 767px) {
    padding: 24px 24px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 8px;

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 35px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
  align-items: stretch; /* Makes all cards have the same height */

  @media (max-width: 767px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0 0px;
  }
`;

