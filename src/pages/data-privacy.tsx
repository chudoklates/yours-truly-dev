import * as React from "react";
import Row from "react-bootstrap/Row";
import SEO from "../components/meta/SEO";

const description: string = `
  How I handle your data.
`;

const DataPrivacyPage = () => {
  return (
    <>
      <SEO title="Yours Truly, Dev" description={description} />
      <Row
        style={{
          margin: "5vh 0",
        }}
        className="text-uppercase"
      >
        <h1>Data Policy:</h1>
        <h3 className="text-">I vow to: </h3>
        <div>
          <ul>
            <li>Not share your data with anybody</li>
            <li>Not collect your full IP address</li>
          </ul>
        </div>
        <h3>What I will know: </h3>
        <div>
          <ul>
            <li>Your device properties (system, screen size)</li>
            <li>Your interactions with the website</li>
            <li>
              Your approximate location in the world (based on an anonymised IP
              address)
            </li>
          </ul>
        </div>
      </Row>
    </>
  );
};

export default DataPrivacyPage;
