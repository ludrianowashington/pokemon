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

  transition: ease-in-out .2s;

  &:hover {
    opacity: .8;
  }
`;

export const View = styled.div`
  width: 50rem;
  height: 25rem;

  padding: 1.3rem;

  border-radius: 8px;

  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.text.white};
`;

export const View2 = styled(View)`
  width: 24rem;
  height: 4rem;

  font-size: 18px;

  background: none;
  color: ${({ theme }) => theme.colors.text.white};

  font-weight: bold;
  font-style: italic;
`

export const SectionLeft = styled.div`
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.button};
`;

export const Image = styled.img`
  width: 18rem;
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

  background-color: ${props => props.color};
`;

export const SectionRight = styled.div`
  width: 70%;

  padding: 1rem;
`;