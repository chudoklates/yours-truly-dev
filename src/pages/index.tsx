import * as React from 'react';
import SEO from '../components/meta/SEO';
import Hero from '../components/main/Hero';

const description = `
  Web development services, provided by Yours Truly, Wojciech Jagielnicki. Click to learn more about me, what I do and like.
`;

const IndexPage = () => {
  return <Hero />;
};

export const Head = () => (
  <SEO title="Yours Truly, Dev" description={description} />
);

export default IndexPage;
