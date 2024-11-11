import { WhiteLogoImg } from "../../assets";
import { BoxText, Container, Content, Header, SubTitle, Title } from "./styles";

export function Cookies() {
  return (
    <Container>
      <Header>
        <Title>Definiciones de Cookies</Title>
        <img src={WhiteLogoImg} alt="Logo" />
      </Header>
      <Content>
        <BoxText>
          <SubTitle>1. ¿Qué son las cookies?</SubTitle>
          <span>
            Las cookies son pequeños archivos de texto que se almacenan en su
            dispositivo cuando visita un sitio web. Estos archivos contienen
            datos sobre su navegación que ayudan a mejorar su experiencia en
            línea, permitiendo al sitio recordar sus preferencias y ofrecerle
            contenido relevante.
          </span>
        </BoxText>

        <BoxText>
          <SubTitle>2. Tipos de Cookies que Utilizamos</SubTitle>
          <span>
            <b>Cookies Esenciales:</b> Son necesarias para el funcionamiento
            básico del sitio y le permiten navegar y utilizar sus
            funcionalidades. Sin estas cookies, el sitio web no puede funcionar
            correctamente.
            <br />
            <br />
            <b>Cookies de Rendimiento:</b> Recopilan información sobre cómo los
            usuarios interactúan con el sitio, permitiéndonos optimizar su
            rendimiento. Estas cookies nos ayudan a identificar las páginas más
            y menos populares y entender cómo se mueve el usuario dentro del
            sitio.
            <br />
            <br />
            <b>Cookies de Funcionalidad:</b> Permiten al sitio recordar sus
            preferencias y configuraciones (como el idioma o región) para
            ofrecer una experiencia más personalizada.
            <br />
            <br />
            <b>Cookies de Publicidad:</b> Se utilizan para mostrar anuncios
            relevantes para el usuario en función de sus intereses. Estas
            cookies también para el usuario en función de sus intereses. Estas
            cookies también limitan la frecuencia con la que ve un anuncio y
            ayudan a medir la efectividad de las campañas publicitarias.
          </span>
        </BoxText>

        <BoxText>
          <SubTitle>3. Gestión de Cookies</SubTitle>
          <span>
            Puede configurar su navegador para bloquear o eliminar cookies en
            cualquier momento. Tenga en cuenta que si desactiva las cookies,
            algunas funcionalidades del sitio pueden verse afectadas y su
            experiencia de navegación podría no ser óptima.
          </span>
        </BoxText>

        <BoxText>
          <SubTitle>4. Cookies de Terceros</SubTitle>
          <span>
            Nuestro sitio puede utilizar cookies de terceros, como proveedores
            de servicios de análisis y redes sociales, que también pueden
            recopilar datos con fines de publicidad o análisis. Estas cookies
            están sujetas a las políticas de privacidad de dichos terceros.
          </span>
        </BoxText>

        <BoxText>
          <SubTitle>5. Consentimiento para el Uso de Cookies</SubTitle>
          <span>
            Al navegar en nuestro sitio web por primera vez, le solicitamos su
            consentimiento para el uso de cookies a través de una notificación o
            banner. Puede modificar o retirar su consentimiento en cualquier
            momento a través de la configuración de cookies en su navegador.
            <br />
            <br />
            <b>
              Si desea obtener más información sobre el uso de cookies en
              nuestro sitio, puede ponerse en contacto con nosotros en
              holla@housefacility.com
            </b>
          </span>
        </BoxText>
      </Content>
    </Container>
  );
}
