import React from 'react';
import {Table} from  'react-bootstrap';
import {Usuarios} from '../data/Usuarios';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {Home} from './Home';

import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';



class BootstrapTabla extends React.Component {
  constructor(props){
    super(props);
  }

  contraseña1(){
      let num='a';
      return num;
  }

  deleteLocalStorage() {
    console.log("Entra en el botón");
    localStorage.clear();
  }

  render(){
    return (<div className="main-site">
    <h1>Biblioteca Municipal</h1>
    <Container>
      <Row>
        <Col lg={10} md={6}>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Contraseña</th>
                <th>Email</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
                  <tr >
                    <td>{Usuarios[0].Nombre}</td>
                    <td>{Usuarios[0].Contraseña}</td>
                    <td>{Usuarios[0].Email}</td>    
                    <td>{Usuarios[0].imagen}</td>
                  </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

    <Button type="submit" onClick={this.deleteLocalStorage()}>Cerrar Sesión</Button>
    {console.log("Al botón llega")};
  </div>
);
  
  }
}

export default BootstrapTabla;