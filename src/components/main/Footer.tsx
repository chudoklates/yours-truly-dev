import { Link } from 'gatsby';
import * as React from 'react';
import { Container } from 'react-bootstrap';

interface FooterNavProps {
  children: React.ReactNode;
  href: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ children, href }) => {
  return (
    <div className="p-3">
      <Link to={href}>{children}</Link>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-uppercase text-muted fixed-bottom">
      <section>
        <Container className="mt-5 d-flex justify-content-sm-between">
          <div className="d-flex align-items-center">
            <strong>Socials: </strong>
            <FooterNav href="https://www.linkedin.com/in/wjagiel/">
              <i className="fab fa-linkedin fs-3" />
            </FooterNav>
            <FooterNav href="https://github.com/chudoklates">
              <i className="fab fa-github fs-3" />
            </FooterNav>
          </div>
          <div className="d-flex">
            <FooterNav href="https://github.com/chudoklates/yours-truly-dev">
              <i className="fab fa-github" /> View source code
            </FooterNav>
            <FooterNav href="/data-privacy">Data Privacy</FooterNav>
          </div>
        </Container>
      </section>
      <div className="p-4 text-center">
        <strong>© {new Date().getFullYear()}</strong> Yours Truly, Dev -
        Wojciech Jagielnicki
      </div>
    </footer>
  );
};

export default Footer;
