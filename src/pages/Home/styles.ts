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
  text-align: start;
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
  flex-shrink: 0;
  width: 5px;
  margin-right: 0.5rem;
`;

export const QuoteTitle = styled.div`
  padding: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
`;

export const PageThree = styled.section`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  flex-direction: column;
  padding: 2rem 0.5rem 2rem 0.5rem;
`;

export const TopSectoresyServicios = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  text-align: start;
  padding-top: 1rem;
  align-items: center;

  span {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
    height: 100%;
  }

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    gap: 2rem;
    align-items: stretch;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 75vw;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BottomSectoresyServicios = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    gap: 2rem;
    align-items: stretch;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 75vw;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const DescriptionSectoresyServicios = styled.div`
  display: flex;

  font-size: 1rem;
  font-weight: 600;
  font-style: normal;

  span {
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (min-width: 481px) {
    // Para tablet
    max-width: 30vw;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 20vw;
  }
`;

export const CardSectoresyServicios = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  max-width: 90vw;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1rem;
    text-transform: uppercase;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 481px) {
    // Para tablet
    max-width: 50vw;
    flex: 1;
    height: auto;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 40vw;
  }
`;

export const PageFour = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const BoxTextButtonServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding-bottom: 1rem;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 42vw;
  }
`;

export const CardServicios = styled.div`
  background-color: #f4f4f4;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 0.8rem;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
      width: 5rem;
    }
  }

  @media (min-width: 481px) {
    // Para tablet
    max-width: 40vw;
    position: relative;

    div,
    span {
      padding-left: 1.5rem;
      font-size: 0.875rem;
    }

    img {
      position: absolute;
      right: 22rem;
    }
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 25vw;
    position: relative;

    div {
      img {
        width: 10vw;
        position: absolute;
        right: 21rem;
        top: -5rem;
      }

      div {
        padding-left: 3rem;
      }
    }
  }
`;

export const SpecialistButtonContact = styled.button`
  text-transform: uppercase;
  background-color: #009a57;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 70vw;
  border: none;
  cursor: pointer;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const ServiciosTitle = styled.div`
  padding: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;

  @media (min-width: 481px) {
    padding: 0 0 0.5rem 0;
  }

  @media (min-width: 1025px) {
    padding: 0 0 0.5rem 7.5rem;
  }
`;

export const BoxServicios = styled.div`
  @media (min-width: 481px) {
    // Para tablet
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 8rem;
  }
`;
