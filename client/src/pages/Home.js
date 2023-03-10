import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Stack
} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { saveGameIds, getSavedGameIds } from '../utils/localStorage';
import Auth from '../utils/auth';

import { searchGame } from '../utils/API';





const Home = () => {

  const [searchedGames, setSearchedGames] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved GameId values
  const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  const [saveThisGame] = useMutation(ADD_GAME, {
    update(cache, { data: { saved_games } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { saved_games },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  useEffect(() => {
    return () => saveGameIds(savedGameIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    console.log(searchInput)
    // try {
      const response = await searchGame(searchInput);
      console.log(response)
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const  {results}  = await response.json();
      console.log(results)
      const gameData = results.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image || '',
      }));

      setSearchedGames(gameData);
      setSearchInput('');
    // } catch (err) {
    //   console.error(err);
    // }
  };


  // create function to handle saving a game to our database
  const handleAddGame = async (id) => {
    // find the game in `searchedgames` state by the matching id
    const gameToSave = searchedGames.find((game) => game.id === id);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveThisGame({
        variables: { gameData: {...gameToSave} }
      })

      // if game successfully saves to user's account, save game id to state
      setSavedGameIds([...savedGameIds, gameToSave.id]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Container id='search-container' fluid >
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col xs={8} >
              <Form.Control
                name='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
                placeholder='Search Games here' />
            </Col>
            <Col xs={10} md={2}>
              <Button type='submit' variant="info" size='md'>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container  >
        <h2 className='text-white'>
          {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : 'What do you want to play?'}
        </h2>
        <Stack direction='horizontal' gap={4}>
          <Row xs={3} id='card-row' className='g-3'>
            {searchedGames.map((game) => {
              return (
                <Col >
                  <Card key={game.id} id='game-card' className="bg-dark text-white">
                    {game.image ? (
                      <Card.Img src={game.image} alt={`artwork for ${game.name}`} />
                    ) : null}
                    <Card.ImgOverlay>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>{game.genre}</Card.Text>
                      {Auth.loggedIn() && (
                        <Button
                          disabled={savedGameIds?.some((savedGameId) => savedGameId === game.id)}
                          onClick={() => handleAddGame(game.id)}
                          variant='info'>
                          {savedGameIds?.some((savedGameId) => savedGameId === game.id)
                            ? 'this game has been added'
                            : 'add game to play list'}
                        </Button>
                      )}
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row id='game-list' >
            <Col >
              <Card bg='dark' text='white'>
                <CardHeader as='h5'>Must Play List:</CardHeader>
                <ListGroup>
                  {/* {User.map(saved_games)} */}
                    <ListGroupItem  action variant='info'>gameslist</ListGroupItem>
                  {/* ))} */}
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
