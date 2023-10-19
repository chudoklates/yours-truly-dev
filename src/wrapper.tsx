import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import ConsentAlert from './components/meta/ConsentAlert';
import Layout from './components/main/Layout';

const wrapper = ({ element }: { element: React.ReactNode }) => {
  const safeWindow =
    typeof window !== 'undefined' ? window : { location: null };
  return (
    <SSRProvider>
      <ConsentAlert location={safeWindow.location} />
      <Layout>{element}</Layout>
    </SSRProvider>
  );
};

export default wrapper;
