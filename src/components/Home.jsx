import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ user: 'PEPE', password: '1234' });
  }
  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido! {this.user}</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>

          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Redordar" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.login}>
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
