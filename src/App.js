import styled, { ThemeProvider } from "styled-components";

//Import Components
import Header from "./components/Header";

//Import styles
import Global from "./styles/global";
import defaultTheme from "./styles/theme";

// Styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background.gray};
`;

const Main = styled.main`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonRandom = styled.button`
  border: none;
  border-radius: 7px;
  margin-bottom: 1.5rem;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.button};
`;

const View = styled.div`
  width: 50rem;
  height: 25rem;

  padding: 1.3rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.text.white};
`;

//Function Main
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Container>
        <Header />
        <Main>
          <ButtonRandom>Gerar Pokemón</ButtonRandom>
          <View>Testando</View>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
