import * as React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { Stack } from 'react-bootstrap';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Stack gap={3} style={{ height: '100vh' }}>
      {children}
      <Footer />
    </Stack>
  );
}

export default Layout;
