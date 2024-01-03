import { Link } from 'gatsby';
import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface FooterNavProps {
  children: React.ReactNode;
  href: string;
  label?: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ children, href, label }) => {
  return (
    <div className="p-3">
      <Link to={href} {...(label && { 'aria-label': label })}>
        {children}
      </Link>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-uppercase text-muted fixed-bottom">
      <Container className="mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <strong>Socials: </strong>
            <FooterNav
              href="https://www.linkedin.com/in/wjagiel/"
              label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin fs-3" />
            </FooterNav>
            <FooterNav
              href="https://github.com/chudoklates"
              label="Github Profile"
            >
              <i className="fab fa-github fs-3" />
            </FooterNav>
          </Col>
          <Col className="d-flex">
            <FooterNav href="https://github.com/chudoklates/yours-truly-dev">
              <i className="fab fa-github" /> View source code
            </FooterNav>
            <FooterNav href="/data-privacy">Data Privacy</FooterNav>
            <FooterNav href="/imprint">Imprint</FooterNav>
          </Col>
        </Row>
      </Container>
      <div className="p-4 text-center">
        <strong>© 2022</strong> Yours Truly, Dev - Wojciech Jagielnicki
      </div>
    </footer>
  );
};

export default Footer;
