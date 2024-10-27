import styled from "styled-components";
import { motion } from "framer-motion";

//Assets
import CoverImage from "../../assets/images/cover_image.png"

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <LandingMask>
        <LandingImage
          src={CoverImage}
          alt="landingView"
          as={motion.img}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
      </LandingMask>
      <LandingContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <LandingParagraph
          as={motion.p}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to Anuj&apos;s Web Development Portfolio!
        </LandingParagraph>
        <LandingDescription
          as={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I am a passionate and results-driven web developer seeking exciting
          opportunities in the tech industry.
        </LandingDescription>
        <ButtonContainer
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a href="#projects">
            <Button type="button">View Projects</Button>
          </a>
          <a href="#contact">
            <Button type="button" contact>
              Get in Touch
            </Button>
          </a>
        </ButtonContainer>
      </LandingContent>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  position: relative;
  height: 110vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: 80vh;
  }

`;

const LandingMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
    opacity: 0.8;
  }
`;

const LandingImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LandingContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  color: #f4f4f4;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LandingParagraph = styled(motion.p)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

const LandingDescription = styled(motion.h1)`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #f4f4f4;
  max-width: 800px;
  margin-bottom: 48px;
  
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const Button = styled(motion.button)`
  background: ${(props) =>
    props.contact ? "linear-gradient(to right, #ff512f, #dd2476)" : "linear-gradient(to right, #00c6ff, #0072ff)"};
  color: #fff;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: ${(props) =>
      props.contact ? "linear-gradient(to right, #dd2476, #ff512f)" : "linear-gradient(to right, #0072ff, #00c6ff)"};
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 16px 22px;
  }
`;

export default LandingPage;
