import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string;
  description: string;
  buttonText: string;
}

export function DefaultOverlayContent({
  label,
  description,
  buttonText,
}: Props) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">{buttonText}</button>
      </Buttons>
    </Container>
  );
}
