import { useState } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

import { en } from "../../translations/en";
import { es } from "../../translations/es";

import {
  BackgroundImage,
  BottomSectoresyServicios,
  CardSectoresyServicios,
  Container,
  Content,
  DescriptionPage,
  DescriptionSectoresyServicios,
  ImageWrapper,
  LanguageMenu,
  LanguageMenuItem,
  LogoImage,
  Menu,
  MenuItem,
  NavBar,
  PageOne,
  PageThree,
  PageTwo,
  QuoteBar,
  QuoteTitle,
  SocialBar,
  SocialBarItem,
  SubTitlePage,
  TextContainer,
  TextQuoteBox,
  TextQuoteItem,
  TitlePage,
  TopSectoresyServicios,
} from "./styles";

import {
  AirportImg,
  BagsImg,
  BooksImg,
  LogoImg,
  PalaceImg,
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
  };

  const textLanguage = selectedLanguage === "ES" ? es : en;

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
        <PageThree>
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
      </Content>
    </Container>
  );
}
