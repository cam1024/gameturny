import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container,Nav } from 'react-bootstrap';

import Auth from '../utils/auth';

const Header = () => {

  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='blue'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Turny-Mint
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='ml-auto'>
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link >Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;