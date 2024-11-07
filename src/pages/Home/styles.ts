import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

export const LanguageMenu = styled.div`
  display: flex;
  gap: 1rem;
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
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
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
  gap: 1rem;
`;

export const SocialBarItem = styled.div`
  svg {
    fill: green;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  position: relative;
  left: 35vw;
  top: 2vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BackgroundImg = styled.div`
  width: 45vh;
  position: relative;
  left: 32vw;
  top: -5vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
