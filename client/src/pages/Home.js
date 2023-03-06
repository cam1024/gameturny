import React from 'react';
import { Button,
   Form,
   Col,
   Row, 
   Container, 
   Card, 
   ListGroup, 
   ListGroupItem,
   Stack } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


const Home = () => {

  return (
    <>
      <Container id='search-container' fluid >
        <Form>
          <Row>
            <Col xs={8} >
              <Form.Control type='search' placeholder='Search Games here' />
            </Col>
            <Col xs={10} md={2}>
              <Button type='submit' variant="info" size='md'>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container  >
        <h2 className='text-white'>
          Search Results:
        </h2>
        <Stack direction='horizontal' gap={4}>
          <Row  xs={3} id='card-row' className='g-3'>
            {Array.from({ length: 6 }).map((_,__) => (
              <Col >
                <Card id='game-card' className="bg-dark text-white">
                  <Card.Img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_by_Daylight_Steam_header.jpg" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant='info'>Add</Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              ))}
          </Row>
          <Row id='game-list' >
              <Col >
                <Card bg='dark' text='white'>
                  <CardHeader as='h5'>Must Play List:</CardHeader>
                  <ListGroup>
                  {Array.from({ length: 4 }).map((_,__) => (
                    <ListGroupItem action variant='info'>gameslist</ListGroupItem>
                    ))}
                  </ListGroup>
                </Card>
              </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
