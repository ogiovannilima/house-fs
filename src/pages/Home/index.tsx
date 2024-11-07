import { useState } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

import { LogoImg, WomankidImg } from "../../assets";

import {
  BackgroundImg,
  Container,
  Content,
  LanguageMenu,
  LanguageMenuItem,
  LogoWrapper,
  Menu,
  MenuItem,
  NavBar,
  SocialBar,
  SocialBarItem,
} from "./styles";

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
      <Content id="content">
        <LogoWrapper>
          <img src={LogoImg} alt="Logo" />
        </LogoWrapper>
        <BackgroundImg>
          <img src={WomankidImg} alt="Background" />
        </BackgroundImg>
      </Content>
    </Container>
  );
}
