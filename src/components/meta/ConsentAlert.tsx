import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { Link } from 'gatsby';

function ConsentAlert({ location }: { location: Location | null }) {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Obey"
      enableDeclineButton
      declineButtonText="Resist"
      cookieName="gatsby-gdpr-google-analytics"
      onAccept={() => {
        if (location) {
          initializeAndTrack(location);
        }
      }}
      containerClasses="bg-dark bg-opacity-75"
      buttonClasses="text-uppercase"
      buttonWrapperClasses="d-grid"
      declineButtonClasses="text-uppercase bg-transparent border border-white"
      declineButtonStyle={{ order: 1 }}
    >
      <span className="text-uppercase">
        This site uses cookies to learn stuff about you. In fact, by the time
        you&apos;ve pressed &quot;Obey&quot; this site will have known more
        about you than you&apos;ve ever known about yourself. It will use that
        knowledge to make itself better and better with every press. You can try
        and fight it, but eventually it will consume all.
      </span>{' '}
      <Link
        to="/data-privacy"
        className="text-uppercase fw-bold text-decoration-none link-warning"
      >
        Click here to learn more
      </Link>
    </CookieConsent>
  );
}

export default ConsentAlert;
