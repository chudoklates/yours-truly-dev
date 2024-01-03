import * as React from 'react';
import Row from 'react-bootstrap/Row';
import SEO from '../components/meta/SEO';

const description = `
  Company information for Yours Truly, Dev.
`;

const ImprintPage = () => {
  return (
    <main className="container">
      <Row
        style={{
          margin: '5vh 0',
        }}
        className="text-uppercase"
      >
        <h1>Imprint</h1>
        <h3>Yours Truly, Dev - Wojciech Jagielnicki</h3>
        <p>Rękodzielnicza 18/1</p>
        <p>54-135 Wrocław, Poland</p>
        <p>
          <b>VAT #</b>: PL 8943152087
        </p>
        <p>
          <b>@</b>:{' '}
          <a className="text-lowercase" href="mailto:wojciech@yourstruly.dev">
            wojciech@yourstruly.dev
          </a>
        </p>
      </Row>
    </main>
  );
};

export const Head = () => <SEO title="Imprint" description={description} />;

export default ImprintPage;
