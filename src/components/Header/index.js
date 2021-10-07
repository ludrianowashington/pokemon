import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;

  /* background-color: ${({theme}) => theme.colors.background.gray}; */
`;

const Logo = styled.img.attrs({
  src: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png',
  alt: "logo"
})`
  width: 9rem;
  padding: 1.5rem;
`;

const Header = ({children})=>{
  return(
    <Container>
      <Logo/>
    </Container>
  )
}

export default Header;