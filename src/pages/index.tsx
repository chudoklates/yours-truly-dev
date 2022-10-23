import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SEO from "../components/meta/SEO";
import background from "../images/background.webp";

const description: string = `
  Web development services, provided by Yours Truly, Wojciech Jagielnicki. Click to learn more about me, what I do and like.
`;

const IndexPage = () => {
  const [value, setValue] = React.useState(null);

  const nOfColumns = 3;

  React.useEffect(() => {
    if (nOfColumns > 3) {
      console.log("Stuff");
    }
  }, []);

  return (
    <>
      <SEO title="Yours Truly, Dev" description={description} />
      <Row
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          minHeight: "60vh",
          margin: "5vh 0",
        }}
      >
        {new Array(nOfColumns).fill("column").map((key, i) => {
          const nOfItems = 1 + Math.floor(Math.random() * 15);
          return (
            <Col key={`${key}:${i}`}>
              {new Array(i === 1 ? 15 : nOfItems)
                .fill("tnode:1")
                .map((key, i) => {
                  const textOpacities = [
                    "text-opacity-100",
                    "text-opacity-75",
                    "text-opacity-50",
                  ];
                  const opacityClass =
                    textOpacities[Math.floor(Math.random() * 3)];
                  return (
                    <h1
                      key={`${key}:${i}`}
                      className={`text-white ${opacityClass}`}
                    >
                      IT ME
                    </h1>
                  );
                })}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default IndexPage;
