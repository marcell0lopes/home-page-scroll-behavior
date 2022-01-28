import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string;
  description: string;
}

export function DefaultOverlayContent({ label, description }: Props) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
}
