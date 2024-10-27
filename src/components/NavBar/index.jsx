import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  const onClickHamburger = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const onScrolling = () => {
    setHeaderScroll(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);

  return (
    <NavHeader className={headerScroll ? "scrolled" : ""}>
      <a href="#home" style={{ textDecoration: "none" }}>
        <LogoHeading>Anuj Dhanuka</LogoHeading>
      </a>
      <NavMenu className={isClicked ? "active" : ""}>
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <NavLiItem key={section}>
            <NavLinkButton href={`#${section.toLowerCase()}`}>
              {section}
            </NavLinkButton>
          </NavLiItem>
        ))}
      </NavMenu>
      <HamburgerMenu onClick={onClickHamburger}>
        {!isClicked ? (
          <HamburgerIcon as={FaBars} />
        ) : (
          <HamburgerIcon as={FaTimes} />
        )}
      </HamburgerMenu>
    </NavHeader>
  );
}

// Styled Components
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 10;
  transition: all 0.4s ease;
  background: rgba(29, 37, 47, 0.3); /* Glassmorphism */
  backdrop-filter: blur(10px);

  &.scrolled {
    background: rgba(20, 20, 20, 0.85);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

const LogoHeading = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e6e6e6;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;
  background: linear-gradient(90deg, #ff7f50, #f39f86);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    color: #ff7f50;
    text-shadow: 0px 0px 10px rgba(255, 127, 80, 0.7);
  }

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 0.6s ease;
    z-index: -1;

    &.active {
      left: 0;
      z-index: 5;
    }
  }
`;

const NavLiItem = styled.li`
  margin-right: 20px;
  list-style-type: none;
`;

const NavLinkButton = styled.a`
  background: linear-gradient(90deg, #00d2ff, #3a7bd5); /* Neon Gradient */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  position: relative;
  transition: all 0.3s ease;
  text-shadow: 0px 0px 4px rgba(0, 150, 255, 0.6);
  text-decoration: none;

  &:hover {
    transform: scale(1.08);
    background: none;
    color: #00d2ff;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ff7f50, #f39f86);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    color: #f3f3f3;
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 15;
  }
`;

const HamburgerIcon = styled.div`
  font-size: 1rem;
`;

export default NavBar;
