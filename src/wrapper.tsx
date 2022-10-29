import * as React from 'react';
import ConsentAlert from './components/meta/ConsentAlert';
import Layout from './components/main/Layout';

const wrapper = ({ element }: { element: React.ReactNode }) => {
  const safeWindow =
    typeof window !== 'undefined' ? window : { location: null };
  return (
    <>
      <ConsentAlert location={safeWindow.location} />
      <Layout>{element}</Layout>
    </>
  );
};

export default wrapper;
