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
    this.inputUser=React.createRef();
    this.inputPass=React.createRef();  
  }

  login() {
    this.setState({ user:this.inputUser.current.value , password: this.inputPass.current.value });
    localStorage.setItem('user',this.inputUser.current.value);
    localStorage.setItem('Contraseña',this.inputPass.current.value);
    this.getName();
    this.getPassword();
  }

  getName(){
    return this.inputUser.current.value;
  }

  getPassword(){
    let namePass=this.inputPass.current.value;
    return namePass;
  }

  componentDidMount(){
    localStorage.getItem('user');
    localStorage.getItem('Contraseña');
  }
  
  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido! {this.state.user}</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido! {}</h1>

          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email:</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" ref={this.inputUser} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password"  ref={this.inputPass} />
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
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}
export default Home;
