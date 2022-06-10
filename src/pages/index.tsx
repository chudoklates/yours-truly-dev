import * as React from "react"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from '../components/meta/CookieConsent'
import SEO from "../components/meta/SEO"
import background from '../images/background.webp'
import 'bootstrap/dist/css/bootstrap.min.css'

const description:string = `
  Web development services, provided by Yours Truly, Wojciech Jagielnicki. Click to learn more about me, what I do and like.
`

const IndexPage = () => {
  const safeWindow = typeof window !== 'undefined' ? window : { location: null }
  const nOfColumns = 3
  return (
    <main style={{ height: '100%' }}>
      <Alert 
        location={safeWindow.location}
      />
      <SEO
        title="Yours Truly, Dev"
        description={description}
      />
        <Container
          style={{
            height: '100vh'
          }}
        >
          <Row
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
              minHeight: '60vh',
              margin: '5vh 0'
            }}
          >
            {new Array(nOfColumns).fill('column').map((key, i) => {
              const nOfItems = 1 + Math.floor(Math.random() * 15)
              return (
                <Col key={`${key}:${i}`}>
                  {new Array(i === 1 ? 15 : nOfItems).fill('tnode:1').map((key, i) => {
                    const textOpacities = [
                      'text-opacity-100',
                      'text-opacity-75',
                      'text-opacity-50'
                    ]
                    const opacityClass = textOpacities[Math.floor(Math.random() * 3)]
                    return (
                      <h1 key={`${key}:${i}`} className={`text-white ${opacityClass}`}>IT ME</h1>
                    )
                  })}
                </Col>
              )
            })}
          </Row>
        </Container>
    </main>
  )
}

export default IndexPage
