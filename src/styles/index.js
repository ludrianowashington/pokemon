import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.color};
`;

export const Main = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonRandom = styled.button`
  border: none;
  border-radius: 7px;

  margin-bottom: 1.5rem;

  padding: 10px 30px;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.button};

  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const View = styled.div`
  width: 80%;
  max-width: 50rem;
  height: 25rem;

  padding: 1.3rem;

  border-radius: 8px;

  display: flex;
  

  background-color: ${({ theme }) => theme.colors.text.white};
  flex-direction: row;

  @media (max-width: 640px) {
    height: 20rem;
    flex-direction: column;
  }

  @media (min-width: 641px) {
    height: 21rem;
  }
`;

export const View2 = styled(View)`
  width: 90%;
  height: 12%;

  font-size: 18px;

  margin-bottom: 13px;

  background: none;
  color: ${({ theme }) => theme.colors.text.white};

  font-weight: bold;
  font-style: italic;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 324px) {
    font-size: 12px;
  }

  @media (min-width: 325px) and (max-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 769px) and (max-width: 1170px) {
    font-size: 19px;
  }

  @media (min-width: 1170px) and (max-width: 2000px){
    font-size: 20px;
  }

  @media (min-width: 2000) {
    font-size: 26px;
  }
`;

export const SectionLeft = styled.div`
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.button};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 25srem;

  @media (max-width: 500px) {
    width: 10rem;
  }

  @media (min-width: 501px) and (max-width: 728px){
    width: 13rem;
  }

  @media (min-width: 768px) and (max-width: 1170px) {
    width: 15rem;
  }

  @media (min-width: 1170px) {
    width: 18rem ;
  }
`;

export const Name = styled.span`
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;

  text-transform: uppercase;

  margin-bottom: 10px;
`;

export const SectionData = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DataType = styled.div`
  width: 80px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 3px;

  background-color: ${(props) => props.color};
`;

export const SectionRight = styled.div`
  width: 70%;

  padding: 1rem;
`;
