import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  @media (min-width: 481px) {
    // Para tablet
    padding: 3rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
    padding: 5rem 3rem;
  }
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
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    // Para desktop
    align-items: center;
    width: 100%;
    position: relative;
  }
`;

export const LogoImage = styled.div`
  position: relative;
  left: 10rem;
  top: 1rem;

  img {
    width: 50vh;
    object-fit: contain;
  }

  @media (min-width: 481px) {
    // Para tablet
    left: 5rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
    position: absolute;
    left: -5rem;

    img {
      width: 140vh;
    }
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  left: 10.5rem;
  top: -3rem;

  img {
    width: 45vh;
    object-fit: contain;
  }

  @media (min-width: 481px) {
    // Para tablet
    left: 5rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
    top: -8rem;
    left: 30rem;

    img {
      width: 70vh;
    }
  }
`;

export const PageTwo = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media (min-width: 1025px) {
    // Para desktop
    padding-top: 10rem;
  }
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  max-width: 80vw;

  @media (min-width: 481px) {
    // Para tablet
    max-width: 70vw;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 60vw;
  }
`;

export const TitlePage = styled.div`
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 700;
  color: #009a57;
  text-transform: uppercase;
`;

export const SubTitlePage = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const DescriptionPage = styled.div`
  text-align: justify;
  padding: 1rem 0;
  font-size: 1rem;
`;

export const TextQuoteBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    max-width: 90vw;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const TextQuoteItem = styled.div`
  display: flex;
  margin: 0 0 2rem 0;
  font-size: 1rem;
  font-style: italic;

  span {
    display: flex;
    flex-direction: column;
  }
`;

export const QuoteBar = styled.div`
  background-color: #009a57;
  width: 20px;
  height: 100%;
  margin-right: 0.5rem;
`;

export const QuoteTitle = styled.div`
  padding: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
`;
