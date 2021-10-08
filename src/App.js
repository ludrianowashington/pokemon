import { useEffect, useState } from 'react';
import { ThemeProvider} from "styled-components";

//Import Components
import Header from "./components/Header";

//Import styles
import Global from "./styles/global";
import defaultTheme from "./styles/theme";
import {
  ButtonRandom,
  Container, 
  DataType, 
  Image,
  Main, 
  Name, 
  SectionData, 
  SectionLeft, 
  SectionRight, 
  View,
  View2
} from './styles'

//Importing API
import api from './services/api';

//Function Main
function App() {
  const [isShow, setIsShow] = useState(false);
  const [generate, setGenerate] = useState(true);
  // const [loading, setLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('normal')
  const [data, setData] = useState();
  
  useEffect(()=>{
    const randomId = Math.floor(Math.random() * 898) + 1;

    api.get(`/pokemon/${randomId}`).then(response => {
      const {
        id, 
        sprites, 
        species, 
        types,
      } = response.data;
      setBackgroundColor(types[0].type.name);

      if (types[0].type.name === 'normal' && types.length > 1) {
        setBackgroundColor(types[1].type.name);
      }

      setData({
        id, 
        images: sprites.other['official-artwork'].front_default || sprites.front_default,
        specie: species.name,
        type: types.map((pokemonType)=>({
          name: pokemonType.type.name,
          color: defaultTheme.colors.type[pokemonType.type.name]
        }))
      })
      
    })
  }, [generate])
 
  function handleClick(e){
    e.preventDefault();

    setGenerate(!generate)
    setIsShow(true)
    
  }

    return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Container color={defaultTheme.colors.backgroundType[backgroundColor]}>
        <Header />
        <Main>
          <View2> Click no botão para gerar um pokemon</View2>
          <ButtonRandom
            type='button'
            onClick={handleClick}
          >
            Gerar Pokemón
          </ButtonRandom>
          {isShow && (
            <View>
              <SectionLeft>
                <Image src={data.images} alt='pokemon'/>
              </SectionLeft>
              <SectionRight>
                <Name>{data.specie}</Name>
                <SectionData>
                  {data.type.map(dataType=>(
                    <DataType color={dataType.color} key={dataType.name}>
                    {console.log(dataType)}
                      <span>{dataType.name}</span>
                    </DataType>
                  ))}
                </SectionData>
              </SectionRight>
            </View>
          )}
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
