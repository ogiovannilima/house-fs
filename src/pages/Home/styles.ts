import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 1rem 5rem 1rem;
`;

export const Content = styled.div`
  height: 100%;
`;

export const PageOne = styled.section`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
`;

export const MenuItem = styled.div<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#009a57" : "#a6a6a6")};
  cursor: pointer;
  transition: color 0.2s;
  writing-mode: vertical-rl;
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
