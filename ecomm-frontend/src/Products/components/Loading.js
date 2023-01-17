import React from 'react';
import { Loader, Section, Container } from 'react-bulma-components';

const Loading = () => {
  return (
    <Section>
      <Container>
        <div className="is-centered columns">
          <Loader
            style={{
              width: 100,
              height: 100
            }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Loading;