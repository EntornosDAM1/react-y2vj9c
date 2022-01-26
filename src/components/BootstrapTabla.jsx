import React from 'react';
import {Table} from  'react-bootstrap';
import {Usuarios} from '../data/Usuarios';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {TitulosTablaCoches,DatosTablaCoches} from '../data/DatosCoches';
import {HeaderLibro,DatosLibro} from '../data/BibliotecaMunicipal';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';



class BootstrapTabla extends React.Component {
  constructor(props){
    super(props);
  }

  contraseña1(){
      let num='a';
      return num;
  }

  removeLocalStorage() {
    localStorage.removeItem('user');
    localStorage.removeItem('Contraseña');
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

    <button onclick={this.removeLocalStorage()}>Cerrar Sesión</button>
  </div>
);
  
  }
}

export default BootstrapTabla;