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
            <a href="https://twitter.com/marcell0lopes">by Marcello Lopes:</a>
          </li>
          <li>
            {' '}
            <a href="https://www.linkedin.com/in/marcellolopes30/">
              My Linkedin
            </a>
          </li>
          <li>
            {' '}
            <a href="https://github.com/marcell0lopes">My Github</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;
