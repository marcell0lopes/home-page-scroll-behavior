import { DefaultOverlayContent } from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';
import { Container, Spacer } from './styles';

export function Page() {
  const models = [
    {
      name: 'Mechanical Keyboards',
      description: 'Scroll down to see more',
      buttonText: 'Buy now',
    },
    {
      name: 'Insane Keycaps',
      description: 'Thousands of styles to choose',
      buttonText: 'More Keycaps',
    },
    {
      name: 'The Best Switches',
      description: 'Choose if you want better typing or gaming',
      buttonText: 'More Switches',
    },
    {
      name: 'Strong Hardware',
      description: 'Durable, resistent and perfect-weighted',
      buttonText: 'Our Hardware',
    },
    {
      name: 'Choose your fighter',
      description: 'You can customize anything you want',
      buttonText: 'custom keyboards',
    },
    {
      name: 'May the LED be with you',
      description: 'Choose how much your keyboard is going to shine',
      buttonText: 'led options',
    },
    {
      name: 'Support me!',
      description: 'Check out my links below',
      buttonText: 'links below',
    },
  ];

  return (
    <Container>
      <ModelsWrapper>
        {models.map((model) => (
          <ModelSection
            key={model.name}
            className="colored"
            modelName={model.name}
            overlayNode={
              <DefaultOverlayContent
                label={model.name}
                description={model.description}
                buttonText={model.buttonText}
              />
            }
          />
        ))}
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}
