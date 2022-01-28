import { Container, Header, Logo, Burger, Footer } from './styles';

function UniqueOverlay() {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            {' '}
            <a href="#">UI Clone</a>
          </li>
          <li>
            {' '}
            <a href="#">made with love</a>
          </li>
          <li>
            {' '}
            <a href="#">by Marcello Lopes</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;
