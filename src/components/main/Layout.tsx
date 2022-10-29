import * as React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

type LayoutProps = {
  children: React.ReactNode
};

function Layout({ children }: LayoutProps) {
  return (
    <main style={{ height: '100%' }}>
      <Container>
        {children}
      </Container>
    </main>
  );
}

export default Layout;
