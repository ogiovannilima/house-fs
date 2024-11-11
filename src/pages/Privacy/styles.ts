import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 1rem;
  max-width: 2640px;
  margin: 0 auto;
  padding-bottom: 3rem;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
    padding: 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #009a57;

  border-radius: 0.5rem;

  padding: 1rem;
  margin-bottom: 2rem;

  img {
    width: 150px;
  }

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
    img {
      width: 250px;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
    font-size: 2rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 1rem;

  @media (min-width: 481px) {
    // Para tablet
  }

  @media (min-width: 1025px) {
    // Para desktop
    padding: 0 3rem;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    margin: 1rem 0;
  }
`;
