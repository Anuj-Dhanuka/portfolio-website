import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCard>
        <TextContainer>
          <FooterTitle>Get in Touch</FooterTitle>
          <FooterText>
            Excited to connect and explore new projects together. Reach out for
            opportunities or collaboration ideas!
          </FooterText>
          <EmailContainer>
            <MailIcon />
            <EmailText>anujd973@gmail.com</EmailText>
          </EmailContainer>
        </TextContainer>
      </FooterCard>

      <SocialContainer>
        <FooterTitle>Follow Me</FooterTitle>
        <IconsWrapper>
          <IconLink href="https://www.facebook.com/" target="_blank">
            <StyledIcon as={FaFacebook} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/" target="_blank">
            <StyledIcon as={FaLinkedin} />
          </IconLink>
          <IconLink href="https://www.instagram.com/" target="_blank">
            <StyledIcon as={FaInstagram} />
          </IconLink>
        </IconsWrapper>
      </SocialContainer>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 24px;  /* Remove left/right padding */
  background: linear-gradient(135deg, #000428, #004e92);
  color: #ffffff;
  flex-wrap: wrap;
  width: 100vw; /* Ensure container spans full viewport width */

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 0; /* Adjust padding for smaller screens */
  }
`;

const FooterCard = styled.div`
  flex: 1;
  margin: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    width: 90vw; /* Span most of the viewport width on mobile */
    margin: 0; /* Remove margin on mobile to prevent extra spacing */
    padding: 20px;
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  flex: 0.5;
  min-width: 280px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    width: 90vw; /* Span most of the viewport width on mobile */
    margin-top: 20px;
    padding: 0;
  }
`;

const TextContainer = styled.div`
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #ffec17;

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffec17;
  font-weight: 600;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const MailIcon = styled(HiOutlineMail)`
  margin-right: 8px;
`;

const EmailText = styled.span`
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: linear-gradient(135deg, #ff0080, #ffec17);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(255, 100, 200, 0.5);
  }
`;

const StyledIcon = styled.div`
  color: #ffffff;
`;

export default Footer;
