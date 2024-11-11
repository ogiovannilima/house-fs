import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  max-width: 2640px;
  margin: 0 auto;
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
    width: 250px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 3rem;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
