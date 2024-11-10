import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  max-width: 2640px;
  margin: 0 auto;

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
    flex-wrap: wrap;
    ///aqui
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
  gap: 0.5rem;

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
  gap: 2.5rem;

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1025px) {
    // Para desktop
    justify-content: center;
    max-width: 1845px;
    margin: 0 auto;
    gap: 15rem;
  }
`;

export const BoxTextServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 481px) {
    // Para tablet
    max-width: 450px;
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 620px;
  }
`;

export const TextServices = styled.div`
  font-size: 1rem;
  font-weight: 400;

  span {
    font-weight: 600;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const TitleServices = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
`;

export const SpecialistButton = styled.button`
  background-color: #009a57;
  color: #fff;
  border-radius: 0.8rem;
  border: 0;
  padding: 0.5rem 1rem;
  max-width: 13rem;
  height: 2rem;
  cursor: pointer;
`;

export const CardServices = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f4f4f4;
  border-radius: 1rem;
  padding: 1rem;

  img {
    width: 4rem;
  }

  @media (min-width: 481px) {
    // Para tablet
    max-width: 450px;
    position: relative;

    span {
      padding-left: 2rem;
    }

    img {
      position: absolute;
      width: 6rem;
      top: -1rem;
      right: 24rem;
    }
  }

  @media (min-width: 1025px) {
    // Para desktop
    max-width: 500px;
    position: relative;

    span {
      padding-left: 5rem;
    }

    img {
      position: absolute;
      width: 12rem;
      right: 25rem;
    }
  }
`;
export const BoxIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const TitleServicesCard = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;

  @media (min-width: 481px) {
    padding-left: 3rem;
  }

  @media (min-width: 1025px) {
    padding-left: 5rem;
  }
`;

export const BoxFlexServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BoxFlexServicesRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 481px) {
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
  }

  @media (min-width: 1025px) {
    gap: 15rem;
  }
`;

export const ContactPage = styled.section`
  margin-top: 1rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  gap: 1rem;

  @media (min-width: 481px) {
    // Para tablet
    padding: 2rem 5rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  text-align: center;

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;
export const ContactTitle = styled.div`
  font-size: 1rem;
  letter-spacing: 0.5rem;
  color: #fff;

  @media (min-width: 481px) {
    // Para tablet
    font-size: 2rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const ContactText = styled.div`
  color: #fff;
  padding: 0 1rem;

  @media (min-width: 481px) {
    // Para tablet
    max-width: 60vw;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;
export const ContactBoxLocal = styled.div`
  display: flex;

  img {
    width: 35vw;
  }

  @media (min-width: 481px) {
    // Para tablet
    justify-content: space-between;
    padding: 0 1rem 0 0;

    img {
      width: 15vw;
    }
  }

  @media (min-width: 1025px) {
    // Para desktop
    img {
      width: 10vw;
    }
  }
`;

export const ContactLocal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 1rem 1rem;

  color: #fff;
  font-size: 1rem;
`;

export const PrivacyInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 0 0 1rem;

  span {
    color: #fff;
    font-size: 0.8rem;
  }

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    justify-content: end;
    padding-right: 1rem;
    gap: 2rem;
  }

  @media (min-width: 1025px) {
    // Para desktop
  }
`;

export const DividerFooter = styled.div`
  border: 1px solid #fff;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 40vw;
  }

  svg {
    fill: #fff;
  }

  @media (min-width: 481px) {
    // Para tablet
    flex-direction: row;
    img {
      width: 30vw;
    }
  }

  @media (min-width: 1025px) {
    // Para desktop

    img {
      width: 15vw;
    }
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  span {
    color: #fff;
  }
`;

export const CopyRightText = styled.div`
  color: #fff;
  font-size: 0.625rem;
  text-align: center;
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
