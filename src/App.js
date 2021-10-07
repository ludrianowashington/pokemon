import styled, { ThemeProvider } from "styled-components";

//Import Components
import Header from './components/Header';

//Import styles
import Global from './styles/global';
import defaultTheme from './styles/theme'

// Styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({theme})=> theme.colors.background.gray};
`;

// const Logo = styled.img.attrs({
//   src: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png',
//   alt: "logo"
// })`
//   width: 10rem;
//   padding: 1.5rem;
// `;

const Main = styled.main`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `;

const View = styled.div`
  width: 50rem;
  height: 20rem;
  
  padding: 1.3rem;

  background-color: ${({theme})=>theme.colors.text.white};
`;

const ButtonRandom = styled.button`

  padding: 10px 30px;
  color: ${({theme})=>theme.colors.text.white};
  background-color: '#7474a2';
`;
//Function Main
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global/>
      <Container>
        <Header/>
        <Main>
          <ButtonRandom>
            Gerar Pokemón
          </ButtonRandom>
          <View>Testando</View>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
