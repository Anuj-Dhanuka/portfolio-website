/* eslint-disable react/prop-types */
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ projectListData }) => {
  const { title, imgUrl, description, technologyUsed, webLink } = projectListData;

  return (
    <Card>
      <ImageContainer>
        <Image src={imgUrl} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}:</Title>
        <DescriptionText>{description}</DescriptionText>
        <TechnologyText>
          <strong>Technologies used:</strong> {technologyUsed}
        </TechnologyText>
        <StyledNavLink to={webLink} target="_blank">
          <ViewButton>View Project</ViewButton>
        </StyledNavLink>
      </Content>
    </Card>
  );
};

export default ProjectCard;

// Styled Components
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Ensure content grows to fill the card height */
  height: 100%; /* Ensure the card takes full height in the grid */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
`;


const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s;
`;

const Content = styled.div`
  text-align: left;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space so button goes to the bottom */
  height: 100%;

  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`;


const Title = styled.h2`
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const TechnologyText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const ViewButton = styled.button`
  background-color: #0073e6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
  margin-top: auto; /* Pushes the button to the bottom of the Content */

  &:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }
`;

