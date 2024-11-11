import { useEffect } from "react";
import { WhiteLogoImg } from "../../assets";
import { Container, Header, Title, Content, BoxText, SubTitle } from "./styles";
import { useLanguage } from "../../contexts/LanguageContext";
import { en } from "../../translations/en";
import { es } from "../../translations/es";

export function Terms() {
  const { selectedLanguage } = useLanguage();
  const textLanguage = selectedLanguage === "ES" ? es : en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header>
        <Title>{textLanguage.pages.terms.title}</Title>
        <img src={WhiteLogoImg} alt="Logo" />
      </Header>
      <Content>
        {textLanguage.pages.terms.sections.map((section, index) => (
          <BoxText key={index}>
            <SubTitle>{section.title}</SubTitle>
            <span>
              <p>{section.content}</p>
              {section.footer && (
                <p>
                  <b>{section.footer}</b>
                </p>
              )}
            </span>
          </BoxText>
        ))}
      </Content>
    </Container>
  );
}
