import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 22rem;

  @media (max-width: 768px) {
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
