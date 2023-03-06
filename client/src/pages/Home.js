import React from 'react';
import { Button, Form, Col, Row, Container, Card } from 'react-bootstrap';


const Home = () => {

  return (
    <>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={12} md={10}>
              <Form.Control type='search' placeholder='Search Games here' />
            </Col>
            <Col xs={12} md={2}>
              <Button type='submit' variant="info" size='md'>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container>
        <h2>
          results?
        </h2>
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_by_Daylight_Steam_header.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Home;
