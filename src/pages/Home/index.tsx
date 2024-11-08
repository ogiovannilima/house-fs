import { useState } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

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

  // useEffect(() => {
  //   console.log(selectedLanguage);
  //   console.log(selectedMenuItem);
  // }, [selectedLanguage, selectedMenuItem]);

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
                HOME
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "SECTORES"}
                onClick={() => handleMenuItemChange("SECTORES")}
              >
                SECTORES
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "SERVICES"}
                onClick={() => handleMenuItemChange("SERVICES")}
              >
                SERVICES
              </MenuItem>
              <MenuItem
                selected={selectedMenuItem === "CONTACT"}
                onClick={() => handleMenuItemChange("CONTACT")}
              >
                CONTACT
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
          <TitlePage>Nuestro Compromiso</TitlePage>
          <TextContainer>
            <SubTitlePage>
              Si combinamos la creatividad humana, la pasión y la experiencia
              con lo mejor de la tecnología, podemos ir más allá. Algo que
              impacte la vida de las personas y se sienta en el mundo a su
              alrededor.
            </SubTitlePage>
            <SubTitlePage>Construyendo confianza, hoy y mañana.</SubTitlePage>

            <DescriptionPage>
              En House Facility, entendemos la importancia de brindar un
              servicio excepcional tanto a las aseguradoras como a sus
              asegurados. Nuestra filosofía se basa en un servicio
              personalizado, enfocado en la resolución eficiente y eficaz de
              siniestros, garantizando así el más alto nivel de bienestar y
              satisfacción para el asegurado. Este enfoque no solo mejora la
              experiencia del cliente final, sino que también refuerza la
              confianza y la lealtad hacia su aseguradora.
            </DescriptionPage>

            <DescriptionPage>
              Somos una empresa dedicada a la gestión de Facility Services, con
              más de 15 años de experiencia y presencia consolidada en América
              Latina y Asia. Nuestra misión es ofrecer soluciones integrales
              para la gestión de siniestros, así como servicios de
              mantenimiento, limpieza, seguridad, eficiencia energética, gestión
              de residuos y otros servicios esenciales para el buen
              funcionamiento de los espacios. Nos enfocamos en la
              sostenibilidad, alineándonos con los principios de ESG (Ambiental,
              Social y Gobernanza), y garantizamos entornos que promuevan el
              bienestar y la seguridad de las personas.
            </DescriptionPage>
          </TextContainer>

          <TextQuoteBox>
            <TextQuoteItem>
              <QuoteBar />
              <span>
                <QuoteTitle>Misión</QuoteTitle>
                Ofrecer soluciones completas e innovadoras en gestión de
                facilidades, promoviendo entornos saludables y sostenibles para
                personas y empresas, gobierno, espacios corporativos y
                comerciales, aeropuertos, industriales y residenciales.
              </span>
            </TextQuoteItem>
            <TextQuoteItem>
              <QuoteBar />
              <span>
                <QuoteTitle>Visión</QuoteTitle>
                Ser reconocidos como una empresa líder en Facility services,
                comprometida con la excelencia, la innovación y el impacto
                positivo en el medioambiente y la sociedad.
              </span>
            </TextQuoteItem>
          </TextQuoteBox>
        </PageTwo>
        <PageThree>
          <TitlePage>Sectores y Servicios</TitlePage>
          <TopSectoresyServicios>
            <span>
              <DescriptionSectoresyServicios>
                Con un equipo altamente preparado y cualificado, House Facility
                ofrece una cobertura integral para atender llamados de
                siniestros en casi todas las provincias de España.
              </DescriptionSectoresyServicios>
              <DescriptionSectoresyServicios>
                <span>
                  Nuestra labor abarca diversos sectores, desde residencias y
                  comunidades hasta comercios y grandes instalaciones, siempre
                  con la eficiencia y el profesionalismo que caracterizan
                  nuestro trabajo.
                </span>
              </DescriptionSectoresyServicios>
            </span>

            <CardSectoresyServicios>
              <img src={BooksImg} alt="Books" />
              <h1>Educativo</h1>
              <span>
                House Facility ofrece servicios integrales adaptados a las
                necesidades de instituciones educativas, con el objetivo de
                crear entornos seguros, organizados y acogedores que promuevan
                el aprendizaje y el bienestar de estudiantes, docentes y
                personal administrativo. Nos enfocamos en la gestión completa de
                instalaciones educativas, desde la recepción y atención al
                público hasta el mantenimiento y la limpieza de los espacios,
                asegurando una operación eficiente y responsable.
              </span>
            </CardSectoresyServicios>
          </TopSectoresyServicios>

          <BottomSectoresyServicios>
            <CardSectoresyServicios>
              <img src={PalaceImg} alt="Palace" />
              <h1>Sector Público</h1>
              <span>
                En House Facility, ofrecemos un conjunto completo de servicios
                orientados al sector público, con el objetivo de mejorar la
                eficiencia, la sostenibilidad y el bienestar de los espacios
                públicos. Nuestra labor abarca desde la recepción y atención al
                público hasta la gestión de obras y estacionamientos, con un
                compromiso constante en la preservación del patrimonio y en la
                garantía de entornos seguros y funcionales.
              </span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={AirportImg} alt="Airport" />
              <h1>Aeroportuario</h1>
              <span>
                House Facility ofrece soluciones integradas y personalizadas
                para el sector aeroportuario, enfocadas en la eficiencia, la
                seguridad y el bienestar de pasajeros y empleados. Con un equipo
                especializado y tecnologías avanzadas, nuestro objetivo es
                proporcionar un entorno aeroportuario que garantice la comodidad
                y satisfacción de todos los usuarios, optimizando la operación
                de cada espacio.
              </span>
            </CardSectoresyServicios>
            <CardSectoresyServicios>
              <img src={BagsImg} alt="Bags" />
              <h1>Comerciales y Deportivos</h1>
              <span>
                House Facility proporciona servicios especializados para centros
                comerciales y centros deportivos, ofreciendo soluciones
                integradas que promueven la eficiencia operativa, la seguridad y
                la satisfacción de los usuarios. Con nuestra experiencia y
                enfoque en la sostenibilidad, ayudamos a transformar estos
                espacios en entornos acogedores y bien cuidados que satisfacen
                las necesidades de visitantes y empleados.
              </span>
            </CardSectoresyServicios>
          </BottomSectoresyServicios>
        </PageThree>
      </Content>
    </Container>
  );
}
