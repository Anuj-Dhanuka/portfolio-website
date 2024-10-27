import { useRef } from "react";
import styled from "styled-components";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiExpress, SiSqlite, SiFirebase } from "react-icons/si";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoReact, BiLogoPython } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

//Assets
import profileImage from "../../assets/images/profile_image.png";


const About = () => {
  // Ref and useInView to check if sections are visible
  const introRef = useRef(null);
  const skillsRef = useRef(null);

  const introInView = useInView(introRef, { once: true, threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, threshold: 0.2 });

  return (
    <Container>
      <Background />

      <ContentWrapper>
        {/* Intro Section */}
        <IntroSection
          ref={introRef}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <ProfileImage
            src={profileImage}
            alt="profile"
          />
          <IntroText>
            <h1>Hey There, I&apos;m Anuj!</h1>
            <p>
              A creative Full Stack Developer with a knack for turning ideas
              into beautiful, functional web applications.
            </p>
            <StyledLink to="/contact">
              <ContactButton>Let&apos;s Connect!</ContactButton>
            </StyledLink>
          </IntroText>
        </IntroSection>

        {/* Skills Section */}
        <SkillsSection
          ref={skillsRef}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <SkillHeading>Technical Skills:</SkillHeading>
          <SkillsGrid>
            {[frontendSkills, backendSkills, databaseSkills].map(
              (skills, index) => (
                <SkillsCategory key={index}>
                  <h3>{skills[0].category}</h3>
                  <SkillsGridInner>
                    {skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        as={motion.div}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {skill.icon}
                        <SkillName>{skill.name}</SkillName>
                      </SkillCard>
                    ))}
                  </SkillsGridInner>
                </SkillsCategory>
              )
            )}
          </SkillsGrid>
        </SkillsSection>
      </ContentWrapper>
    </Container>
  );
};

// Skill data with icons and categories
const frontendSkills = [
  { name: "HTML", icon: <TiHtml5 size={50} />, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 size={50} />, category: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap size={50} />, category: "Frontend" },
  {
    name: "JavaScript",
    icon: <DiJavascript1 size={50} />,
    category: "Frontend",
  },
  { name: "React.js", icon: <BiLogoReact size={50} />, category: "Frontend" },
  { name: "React Native", icon: <FaReact size={50} />, category: "Frontend" }, // New skill added
];

const backendSkills = [
  { name: "Python", icon: <BiLogoPython size={50} />, category: "Backend" },
  { name: "Node.js", icon: <FaNodeJs size={50} />, category: "Backend" },
  { name: "Express", icon: <SiExpress size={50} />, category: "Backend" },
  { name: "Firebase", icon: <SiFirebase size={50} />, category: "Backend" }, // New skill added
];

const databaseSkills = [
  { name: "SQLite", icon: <SiSqlite size={50} />, category: "Databases" },
];

// Remaining styled components remain the same...

// Add other styled components...

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    padding: 0px 0px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 0 20px;

  @media (max-width: 767px) {
    padding: 24px 24px;
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  z-index: -1;
`;

const IntroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 190px;
  height: 180px;
  border: 5px solid #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-right: 30px;
  background-size: cover;
  

  @media (max-width: 767px) {
    margin: 0 0 20px 0;
  }
`;

const IntroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SkillsSection = styled.div`
  margin-top: 40px;
  width: 95%;
  @media (max-width: 767px) {
    margin-top: 0px;
    width: 100%;
  }
`;

const SkillHeading = styled.h2`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

const SkillsCategory = styled.div`
  h3 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 15px;
  }
`;

const SkillsGridInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #527a7a;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 1024px) {
     grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const ContactButton = styled.button`
  background-color: #ff6f61;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3b30;
  }

  @media (max-width: 767px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
export default About;
