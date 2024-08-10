import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand><Link to={'/home'} className='text-decoration-none link-light'>Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/todo'} className='text-decoration-none link-light'>Todo app</Link></Nav.Link>
            <Nav.Link><Link to={'/countries'} className='text-decoration-none link-light'>Countries</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar