import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from  'react-bootstrap';
class BootStrapHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
    <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
          <i className="fas fa-user-graduate" />
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Menu"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.2">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Lista de Tareas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Perfil</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
  }
}

export default BootStrapHeader;