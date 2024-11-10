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
        <PageFour>
          <BoxTextServices>
            <TitleServices>Asseguradores y asegurados</TitleServices>
            <TextServices>
              House Facility se especializa en brindar servicios integrales para
              el sector de seguros, con una respuesta rápida y eficiente en la
              gestión de siniestros. Nuestra experiencia y equipo cualificado
              nos permiten atender con precisión cada caso, garantizando la
              reparación y el mantenimiento de espacios afectados, desde hogares
              y comunidades hasta comercios y grandes instalaciones.
              <br />
              <br />
              Ofrecemos soluciones de reparaciones multigremio que incluyen
              electricidad, fontanería, albañilería, pintura y carpintería,
              además de servicios de mantenimiento, limpieza y seguridad. Esta
              amplia gama de servicios asegura una restauración completa, con un
              enfoque en la calidad y la satisfacción del cliente final.
              <br />
              <br />
              En House Facility, somos el aliado estratégico para aseguradoras
              que buscan eficiencia, profesionalismo y la tranquilidad de sus
              asegurados.
            </TextServices>
            <SpecialistButton>Habla con un especialista</SpecialistButton>
          </BoxTextServices>

          <CardServices>
            <BoxIconTitle>
              <img src={ManLadderImg} alt="ManLadder" />
              <TitleServicesCard>Manitas a domicilo</TitleServicesCard>
            </BoxIconTitle>

            <span>
              Servicios de bricolaje para colgar cuadros, cortinas o lámparas.
              <br />
              Nuestros manitas también pueden montar muebles, colocar baldas o
              instalar accesorios de baño
              <br />
              <br />
              ¿Necesitas un manitas a domicilio? En House facility te ofrecemos
              servicios de manitas con desplazamiento gratuito para que no
              tengas que preocuparte del mantenimiento del hogar. El servicio de
              manitas en casa te ofrece colgar cuadros, colgar espejos, colocar
              rieles, colgar estanterías o lámparas, colocar estores, cortinas o
              baldas, instalar accesorios de baño, montar muebles tipo kit,
              cambiar enchufes o instalación de lamparas o apliques entre otras
              muchas cosas. Estas son solo algunas de las tareas que llevan a
              cabo los manitas de House facility, pero no te preocupes si no ves
              lo que necesitas, porque nuestros profesionales se adaptan a tus
              necesidades y podrán realizar{" "}
              <b>cualquier arreglo a domicilio que necesites.</b>
            </span>
          </CardServices>
        </PageFour>

        <PageFour>
          <BoxFlexServices>
            <BoxFlexServicesRow>
              <BoxTextServices>
                <TitleServices>De la estrategia a los resultados</TitleServices>
                <TextServices>
                  <span>
                    House Facility Más que un socio, la elección confiable para
                    aseguradoras y gestoras de siniestros.
                  </span>
                  <br />
                  <br />
                  Pocas organizaciones tienen la capacidad de ofrecer la
                  variedad y, especialmente, la calidad de los servicios que
                  nosotros ofrecemos, con el compromiso absoluto de nuestro
                  propio personal.
                </TextServices>
              </BoxTextServices>

              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>Eletricista</TitleServicesCard>
                </BoxIconTitle>

                <span>
                  Nuestros electricistas son expertos en reparaciones eléctricas
                  o instalaciones. Llámanos para realizar el mantenimiento o
                  revisión de la instalación eléctrica de tu hogar. Los
                  electricistas a domicilio de House facility están disponibles
                  las 24 horas del día para realizar tareas urgentes, así como
                  para electricidad básica llevada a cabo por los instaladores
                  eléctricos.
                  <br />
                  Confía en los electricistas 24 horas de House facility para
                  cambiar enchufes, hacer rozas, reparar timbres, instalar
                  lámparas, halógenos o downlights. Contamos con electricistas
                  autorizados para realizar la emisión oficial de boletines
                  eléctricos y certificados de instalaciones eléctricas para tu
                  total tranquilidad.
                  <br />
                  Cubrimos todas las Comunidades Autónomas para los montajes
                  eléctricos y tareas de electricidad! El mejor electricista en
                  el que confiar, con la garantía y seguridad de una gran marca
                  como House facility.
                </span>
              </CardServices>
            </BoxFlexServicesRow>

            <BoxFlexServicesRow>
              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>Pintura</TitleServicesCard>
                </BoxIconTitle>

                <span>
                  Servicios de pintura para pisos, casas y locales. Realizamos
                  trabajos de alisado y lijado de paredes, gotelé, lacado de
                  puertas y pinturas decorativas.
                  <br />
                  Servicios de pintura con los mejores expertos en pintar
                  paredes y techos de habitaciones o pisos. Además nuestros
                  profesionales están especializados en alisar o quitar gotelé,
                  lijado de paredes, lacado de puertas y pintura decorativa para
                  todo tipo de superficies.
                </span>
              </CardServices>

              <SpecialistButton>Habla con un especialista</SpecialistButton>
            </BoxFlexServicesRow>

            <CardServices>
              <BoxIconTitle>
                <img src={ManLadderImg} alt="ManLadder" />
                <TitleServicesCard>Fontanero</TitleServicesCard>
              </BoxIconTitle>

              <span>
                Nuestros profesionales son expertos en fontanería y están
                especializados en todo tipo de reparaciones como desatrancos,
                desatascar tuberías o desagües, arreglar grifos, reparar fugas
                de agua, instalaciones de fontanería, cambiar radiadores o
                encontrar soluciones para eliminar humedades y goteras. Pero no
                te preocupes si no encentras lo que necesitas, los fontaneros de
                House facility de adaptan a tus necesidades.
                <br />
                <br />
                Ofrecemos servicios de fontaneros las 24 horas los 365 días de
                año en todas las Comunidades Autónomas, para servicios de
                urgencias de fontanería.
              </span>
            </CardServices>

            <BoxFlexServicesRow>
              <SpecialistButton>Habla con un especialista</SpecialistButton>

              <CardServices>
                <BoxIconTitle>
                  <img src={ManLadderImg} alt="ManLadder" />
                  <TitleServicesCard>
                    iLijado y barnizado de parquets
                  </TitleServicesCard>
                </BoxIconTitle>

                <span>
                  El servicio de lijado y barnizado de parquets de House
                  facility es una opción crucial para mantener la belleza y
                  durabilidad de tus suelos de madera. El lijado elimina
                  imperfecciones, marcas y desgaste superficial, preparando la
                  superficie para recibir una capa de barniz protector que
                  realza la veta de la madera y la protege contra daños futuros.
                  <br />
                  <br />
                  Se recomienda realizar este proceso cada 5-10 años,
                  dependiendo del tráfico y uso. Nuestro equipo altamente
                  capacitado utiliza maquinaria de precisión y productos de alta
                  calidad para asegurar un acabado impecable.
                  <br />
                  <br />
                  Así, tu parquet lucirá como nuevo y conservará su encanto por
                  años.
                </span>
              </CardServices>
            </BoxFlexServicesRow>
          </BoxFlexServices>
        </PageFour>
        <ContactPage>
          <ContactHeader>
            <ContactTitle>¿Trabajamos juntos?</ContactTitle>
            <SpecialistButton>Habla con un especialista</SpecialistButton>
          </ContactHeader>
          <ContactText>
            House Facility extiende sus servicios a toda España, ofreciendo
            soluciones de gestión de siniestros y mantenimiento para
            aseguradoras, empresas y particulares en todo el país. Con un
            enfoque en la calidad, la eficiencia y el cuidado del cliente,
            estamos preparados para responder a las necesidades de nuestros
            socios en cada rincón de España, garantizando resultados rápidos y
            efectivos.
          </ContactText>
          <ContactBoxLocal>
            <ContactLocal>
              <span>Madri - España</span>
              <span>holla@housefacility.es</span>
              <span>+34 666 081 364</span>
              <span>www.housefacility.es</span>
            </ContactLocal>
            <img src={MadridLogoImg} alt="Madrid" />
          </ContactBoxLocal>

          <PrivacyInfos>
            <span>Declaración de Privacidad</span>
            <span>Definiciones de Cookies</span>
            <span>Términos y Condiciones de Uso</span>
          </PrivacyInfos>
          <DividerFooter />

          <Footer>
            <img src={WhiteLogoImg} alt="Logo" />
            <FooterMenu>
              <span>Home</span>
              <span>Sectores</span>
              <span>Servicios</span>
              <span>Contacto</span>
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
            Todas las marcas comerciales, logotipos y marcas de servicio
            (colectivamente «Marcas Comerciales») mostradas son marcas
            registradas y/o marcas comerciales de sus respectivos
            propietarios.www.housefacility.com © 2024 - Todos los derechos
            reservados.
          </CopyRightText>
        </ContactPage>
      </Content>
      <WhatsAppButton
        href="https://wa.me/+34666081364"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsAppButton>
    </Container>
  );
}
