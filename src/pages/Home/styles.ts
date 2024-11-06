import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 15rem;

  @media (max-width: 1024px) {
    gap: 12rem;
  }

  @media (max-width: 767px) {
    gap: 6rem;
  }
`;

export const LanguageMenu = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3rem;
  margin-top: 3rem;
`;

export const LanguageMenuItem = styled.div<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#009a57" : "#a6a6a6")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #009a57;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-right: 3rem;
`;

export const MenuItem = styled.div<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#009a57" : "#a6a6a6")};
  cursor: pointer;
  transition: color 0.2s;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);

  &:hover {
    color: #009a57;
  }
`;

export const SocialBar = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-right: 3rem;

  svg {
    fill: green;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SocialBarItem = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  height: 100vh;
  left: -3em;

  @media (max-width: 1024px) {
    left: -1rem;
  }

  @media (max-width: 767px) {
    left: 0.3rem;
    top: -10rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 70vw;

  @media (max-width: 1024px) {
    width: 40vh;
  }

  @media (max-width: 767px) {
    width: 40vh;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  width: 60vh;
  right: 5.5rem;
  bottom: 3rem;

  @media (max-width: 1024px) {
    width: 45vh;
    bottom: 10rem;
    right: 4rem;
  }

  @media (max-width: 767px) {
    width: 35vh;
    right: 5rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
