import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {

  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='blue'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Turny-Mint
          </Navbar.Brand>
          

        </Container>
      </Navbar>
    </>
  )
}
export default Header;