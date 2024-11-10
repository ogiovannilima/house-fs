import { useState } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { en } from "../../translations/en";
import { es } from "../../translations/es";

import {
  BackgroundImage,
  BottomSectoresyServicios,
  BoxFlexServices,
  BoxFlexServicesRow,
  BoxIconTitle,
  BoxTextServices,
  CardSectoresyServicios,
  CardServices,
  ContactBoxLocal,
  ContactHeader,
  ContactLocal,
  ContactPage,
  ContactText,
  ContactTitle,
  Container,
  Content,
  CopyRightText,
  DescriptionPage,
  DescriptionSectoresyServicios,
  DividerFooter,
  Footer,
  FooterMenu,
  ImageWrapper,
  LanguageMenu,
  LanguageMenuItem,
  LogoImage,
  Menu,
  MenuItem,
  NavBar,
  PageFour,
  PageOne,
  PageThree,
  PageTwo,
  PrivacyInfos,
  QuoteBar,
  QuoteTitle,
  SocialBar,
  SocialBarItem,
  SpecialistButton,
  SubTitlePage,
  TextContainer,
  TextQuoteBox,
  TextQuoteItem,
  TextServices,
  TitlePage,
  TitleServices,
  TitleServicesCard,
  TopSectoresyServicios,
  WhatsAppButton,
} from "./styles";

import {
  AirportImg,
  BagsImg,
  BooksImg,
  HeartDocImg,
  IndustryImg,
  LogoImg,
  MadridLogoImg,
  ManLadderImg,
  MoneyImg,
  PalaceImg,
  TripImg,
  WhiteLogoImg,
  WomankidImg,
} from "../../assets";

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<"ES" | "EN">("ES");
  const [selectedMenuItem, setSelectedMenuItem] = useState("HOME");

  const handleLanguageChange = (language: "ES" | "EN") => {
    setSelectedLanguage(language);
  };

  const handleMenuItemChange = (item: string) => {
    setSelectedMenuItem(item);

    // Add smooth scrolling behavior
    const element = document.getElementById(
      item === "SECTORES"
        ? "sectors-section"
        : item === "SERVICES"
        ? "services-section"
        : item === "CONTACT"
        ? "contact-section"
        : ""
    );

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textLanguage = selectedLanguage === "ES" ? es : en;

  const handleWhatsApp = () => {
    const phoneNumber = "+34666081364";
    const message = "Hola, me gustaría hablar con un especialista.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container id="container">
      <Content id="content">
        <PageOne>
          <ImageWrapper>
            <LogoImage>
              <img src={LogoImg} alt="Logo" />
            </LogoImage>
            <BackgroundImage>
              <img src={WomankidImg} alt="Background" />
            </BackgroundImage>
          </ImageWrapper>
          <NavBar id="navbar">
            <LanguageMenu>
              <LanguageMenuItem
                selected={selectedLanguage === "ES"}
                onClick={() => handleLanguageChange("ES")}
              >
                ES
              </LanguageMenuItem>
              <LanguageMenuItem
                selected={selectedLanguage === "EN"}
                onClick={() => handleLanguageChange("EN")}
              >
                EN
              </LanguageMenuItem>
            </LanguageMenu>
            <Menu>
              <MenuItem
                selected={selectedMenuItem === "HOME"}
                onClick={() => handleMenuItemChange("HOME")}
              >
                {textLanguage.menu.home}
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "SECTORES"}
                onClick={() => handleMenuItemChange("SECTORES")}
              >
                {textLanguage.menu.sectors}
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "SERVICES"}
                onClick={() => handleMenuItemChange("SERVICES")}
              >
                {textLanguage.menu.services}
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "CONTACT"}
                onClick={() => handleMenuItemChange("CONTACT")}
              >
                {textLanguage.menu.contact}
              </MenuItem>
            </Menu>
            <SocialBar>
              <SocialBarItem>
                <FaInstagram />
              </SocialBarItem>
              <SocialBarItem>
                <FaTwitter />
              </SocialBarItem>
              <SocialBarItem>
                <FaFacebookF />
              </SocialBarItem>
              <SocialBarItem>
                <FaLinkedin />
              </SocialBarItem>
            </SocialBar>
          </NavBar>
        </PageOne>
        <PageTwo>
          <TitlePage>{textLanguage.commitment.title}</TitlePage>
          <TextContainer>
            <SubTitlePage>{textLanguage.commitment.subtitle1}</SubTitlePage>
            <SubTitlePage>{textLanguage.commitment.subtitle2}</SubTitlePage>

            <DescriptionPage>
              {textLanguage.commitment.description1}
            </DescriptionPage>

            <DescriptionPage>
              {textLanguage.commitment.description2}
            </DescriptionPage>
          </TextContainer>

          <TextQuoteBox>
            <TextQuoteItem>
              <QuoteBar />
              <span>
                <QuoteTitle>{textLanguage.mission.title}</QuoteTitle>
                {textLanguage.mission.description}
              </span>
            </TextQuoteItem>
            <TextQuoteItem>
              <QuoteBar />
              <span>
                <QuoteTitle>{textLanguage.vision.title}</QuoteTitle>
                {textLanguage.vision.description}
              </span>
            </TextQuoteItem>
          </TextQuoteBox>
        </PageTwo>
        <PageThree id="sectors-section">
          <TitlePage>{textLanguage.sectors.title}</TitlePage>
          <TopSectoresyServicios>
            <span>
              <DescriptionSectoresyServicios>
                {textLanguage.sectors.description1}
              </DescriptionSectoresyServicios>
              <DescriptionSectoresyServicios>
                <span>{textLanguage.sectors.description2}</span>
              </DescriptionSectoresyServicios>
            </span>

            <CardSectoresyServicios>
              <img src={BooksImg} alt="Books" />
              <h1>{textLanguage.sectors.educational.title}</h1>
              <span>{textLanguage.sectors.educational.description}</span>
            </CardSectoresyServicios>
          </TopSectoresyServicios>

          <BottomSectoresyServicios>
            <CardSectoresyServicios>
              <img src={PalaceImg} alt="Palace" />
              <h1>{textLanguage.sectors.public.title}</h1>
              <span>{textLanguage.sectors.public.description}</span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={AirportImg} alt="Airport" />
              <h1>{textLanguage.sectors.airport.title}</h1>
              <span>{textLanguage.sectors.airport.description}</span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={BagsImg} alt="Bags" />
              <h1>{textLanguage.sectors.commercial.title}</h1>
              <span>{textLanguage.sectors.commercial.description}</span>
            </CardSectoresyServicios>
          </BottomSectoresyServicios>
        </PageThree>
        <PageThree>
          <TopSectoresyServicios>
            <span>
              <DescriptionSectoresyServicios>
                {textLanguage.commitment.text1}
              </DescriptionSectoresyServicios>
              <DescriptionSectoresyServicios>
                <span>{textLanguage.commitment.text2}</span>
              </DescriptionSectoresyServicios>
            </span>
          </TopSectoresyServicios>
          <BottomSectoresyServicios>
            <CardSectoresyServicios>
              <img src={HeartDocImg} alt="Heart" />
              <h1>{textLanguage.sectors.hospital.title}</h1>
              <span>{textLanguage.sectors.hospital.description}</span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={MoneyImg} alt="Money" />
              <h1>{textLanguage.sectors.banking.title}</h1>
              <span>{textLanguage.sectors.banking.description}</span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={TripImg} alt="Trip" />
              <h1>{textLanguage.sectors.hotel.title}</h1>
              <span>{textLanguage.sectors.hotel.description}</span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={IndustryImg} alt="Industry" />
              <h1>{textLanguage.sectors.industrial.title}</h1>
              <span>{textLanguage.sectors.industrial.description}</span>
            </CardSectoresyServicios>
          </BottomSectoresyServicios>
        </PageThree>
        <PageFour id="services-section">
          <BoxTextServices>
            <TitleServices>
              {textLanguage.services.insurance.title}
            </TitleServices>
            <TextServices>
              {textLanguage.services.insurance.description[0]}
              <br />
              <br />
              {textLanguage.services.insurance.description[1]}
              <br />
              <br />
              {textLanguage.services.insurance.description[2]}
            </TextServices>
            <SpecialistButton onClick={handleWhatsApp}>
              {textLanguage.services.button.specialist}
            </SpecialistButton>
          </BoxTextServices>

          <CardServices>
            <BoxIconTitle>
              <img src={ManLadderImg} alt="ManLadder" />
              <TitleServicesCard>
                {textLanguage.services.handyman.title}
              </TitleServicesCard>
            </BoxIconTitle>

            <span>
              {textLanguage.services.handyman.description[0]}
              <br />
              {textLanguage.services.handyman.description[1]}
              <br />
              <br />
              {textLanguage.services.handyman.description[2]}
            </span>
          </CardServices>
        </PageFour>

        <PageFour>
          <BoxFlexServices>
            <BoxFlexServicesRow>
              <BoxTextServices>
                <TitleServices>
                  {textLanguage.services.strategy.title}
                </TitleServices>
                <TextServices>
                  <span>{textLanguage.services.strategy.subtitle}</span>
                  <br />
                  <br />
                  {textLanguage.services.strategy.description}
                </TextServices>
              </BoxTextServices>

              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>
                    {textLanguage.services.electrician.title}
                  </TitleServicesCard>
                </BoxIconTitle>

                <span>
                  {textLanguage.services.electrician.description[0]}
                  <br />
                  {textLanguage.services.electrician.description[1]}
                  <br />
                  {textLanguage.services.electrician.description[2]}
                </span>
              </CardServices>
            </BoxFlexServicesRow>

            <BoxFlexServicesRow>
              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>
                    {textLanguage.services.painting.title}
                  </TitleServicesCard>
                </BoxIconTitle>

                <span>
                  {textLanguage.services.painting.description[0]}
                  <br />
                  {textLanguage.services.painting.description[1]}
                </span>
              </CardServices>

              <SpecialistButton onClick={handleWhatsApp}>
                {textLanguage.services.button.specialist}
              </SpecialistButton>
            </BoxFlexServicesRow>

            <CardServices>
              <BoxIconTitle>
                <img src={ManLadderImg} alt="ManLadder" />
                <TitleServicesCard>
                  {textLanguage.services.plumber.title}
                </TitleServicesCard>
              </BoxIconTitle>

              <span>
                {textLanguage.services.plumber.description[0]}
                <br />
                <br />
                {textLanguage.services.plumber.description[1]}
              </span>
            </CardServices>

            <BoxFlexServicesRow>
              <SpecialistButton onClick={handleWhatsApp}>
                {textLanguage.services.button.specialist}
              </SpecialistButton>

              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>
                    {textLanguage.services.parquet.title}
                  </TitleServicesCard>
                </BoxIconTitle>

                <span>
                  {textLanguage.services.parquet.description[0]}
                  <br />
                  <br />
                  {textLanguage.services.parquet.description[1]}
                  <br />
                  <br />
                  {textLanguage.services.parquet.description[2]}
                </span>
              </CardServices>
            </BoxFlexServicesRow>
          </BoxFlexServices>
        </PageFour>
        <ContactPage id="contact-section">
          <ContactHeader>
            <ContactTitle>{textLanguage.services.contact.title}</ContactTitle>
            <SpecialistButton onClick={handleWhatsApp}>
              {textLanguage.services.button.specialist}
            </SpecialistButton>
          </ContactHeader>
          <ContactText>{textLanguage.services.contact.description}</ContactText>
          <ContactBoxLocal>
            <ContactLocal>
              <span>{textLanguage.services.contact.location}</span>
              <span>{textLanguage.services.contact.email}</span>
              <span>{textLanguage.services.contact.phone}</span>
              <span>{textLanguage.services.contact.website}</span>
            </ContactLocal>
            <img src={MadridLogoImg} alt="Madrid" />
          </ContactBoxLocal>

          <PrivacyInfos>
            <span>{textLanguage.services.footer.privacy}</span>
            <span>{textLanguage.services.footer.cookies}</span>
            <span>{textLanguage.services.footer.terms}</span>
          </PrivacyInfos>
          <DividerFooter />

          <Footer>
            <img src={WhiteLogoImg} alt="Logo" />
            <FooterMenu>
              <span>{textLanguage.menu.home}</span>
              <span>{textLanguage.menu.sectors}</span>
              <span>{textLanguage.menu.services}</span>
              <span>{textLanguage.menu.contact}</span>
            </FooterMenu>

            <SocialBar>
              <SocialBar>
                <SocialBarItem>
                  <FaInstagram />
                </SocialBarItem>
                <SocialBarItem>
                  <FaTwitter />
                </SocialBarItem>
                <SocialBarItem>
                  <FaFacebookF />
                </SocialBarItem>
                <SocialBarItem>
                  <FaLinkedin />
                </SocialBarItem>
              </SocialBar>
            </SocialBar>
          </Footer>
          <DividerFooter />
          <CopyRightText>
            {textLanguage.services.footer.copyright}
          </CopyRightText>
        </ContactPage>
      </Content>
      <WhatsAppButton onClick={handleWhatsApp}>
        <FaWhatsapp />
      </WhatsAppButton>
    </Container>
  );
}
