import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';


const Home = () => {
  
  return (
    <Container fluid>
      <Form>
        <Row>
          <Col  xs={12} md={10}>
            <Form.Control type='search' placeholder='Search Games here' />
          </Col>
          <Col xs={12} md={2}>
            <Button type='submit' variant="info" size='md'>Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Home;
