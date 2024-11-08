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
  HeartDocImg,
  IndustryImg,
  LogoImg,
  MoneyImg,
  PalaceImg,
  TripImg,
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
        <PageThree>
          <TopSectoresyServicios>
            <span>
              <DescriptionSectoresyServicios>
                Apostamos por las personas, la sostenibilidad, la tecnología e
                innovacíon
              </DescriptionSectoresyServicios>
              <DescriptionSectoresyServicios>
                <span>Una empresa comprometida con la sociedad española.</span>
              </DescriptionSectoresyServicios>
            </span>
          </TopSectoresyServicios>
          <BottomSectoresyServicios>
            <CardSectoresyServicios>
              <img src={HeartDocImg} alt="Heart" />
              <h1>hospitalario</h1>
              <span>
                House Facility ofrece servicios integrales y especializados para
                el sector hospitalario, con un enfoque en la eficiencia, la
                seguridad y la higiene de los espacios de atención médica.
                Entendemos la importancia de un entorno hospitalario limpio,
                seguro y bien cuidado, que cumpla con los más altos estándares
                de calidad y contribuya al bienestar de pacientes, personal
                médico y visitantes. Nuestras soluciones abarcan desde la
                limpieza y desinfección hasta el mantenimiento de la
                infraestructura y el cuidado de áreas verdes.
              </span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={MoneyImg} alt="Money" />
              <h1>bancario</h1>
              <span>
                House Facility ofrece servicios especializados para el sector
                bancario, adaptados a las necesidades de seguridad, eficiencia y
                presentación que requieren las entidades financieras. Con
                nuestra experiencia en gestión de instalaciones, cuidamos cada
                detalle de los entornos bancarios, desde el mantenimiento de
                edificios y áreas verdes hasta la limpieza y conservación,
                garantizando un espacio que refleje profesionalismo y confianza.
              </span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={TripImg} alt="Trip" />
              <h1>hoteleiro</h1>
              <span>
                House Facility ofrece servicios integrales de gestión de
                instalaciones para el sector hotelero, enfocados en la
                excelencia, la eficiencia y la satisfacción de los huéspedes.
                Nuestra experiencia en el sector nos permite optimizar cada
                espacio del hotel, desde el mantenimiento de las instalaciones y
                la limpieza hasta la gestión de áreas verdes y estacionamientos.
                Nos comprometemos a crear ambientes acogedores y funcionales que
                mejoren la experiencia de los huéspedes y faciliten las
                operaciones del equipo del hotel.
              </span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={IndustryImg} alt="Industry" />
              <h1>industrial</h1>
              <span>
                House Facility ofrece un conjunto completo de servicios
                especializados para el sector industrial, diseñados para
                optimizar la operación y el mantenimiento de plantas y
                edificios, garantizando un entorno seguro, eficiente y
                sostenible. Nuestra experiencia en el sector industrial nos
                permite adaptar cada solución a las necesidades específicas de
                cada instalación, desde el mantenimiento de infraestructuras y
                equipos hasta la limpieza y gestión de áreas verdes.
              </span>
            </CardSectoresyServicios>
          </BottomSectoresyServicios>
        </PageThree>
      </Content>
    </Container>
  );
}
