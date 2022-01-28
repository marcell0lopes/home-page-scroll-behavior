import { DefaultOverlayContent } from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';
import { Container, Spacer } from './styles';

export function Page() {
  return (
    <Container>
      <ModelsWrapper>
        {[
          'Model One',
          'Model Two',
          'Model Three',
          'Model Four',
          'Model Five',
          'Model Six',
          'Model Seven',
        ].map((modelName) => (
          <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online for Delivery"
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
