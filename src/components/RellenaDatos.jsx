import React from 'react';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {TitulosTablaCoches,DatosTablaCoches} from '../data/DatosCoches';
import {HeaderLibro,DatosLibro} from '../data/BibliotecaMunicipal';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';

class RellenaDatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portada: '',
      Titulo: '',
      tapa: '',
      paginas: '',
      Idioma: '',
    };
  }


  eventoclick(item) {
    this.setState({
      portada: item.portada,
      Titulo: item.Titulo,
      tapa: item.tapa,
      paginas:item.paginas,
      idioma: item.idioma,
    });
  }  

  render(){
    return (
      <div className="main-site">
        <h1>Biblioteca Municipal</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{HeaderLibro.id}</th>
                    <th>{HeaderLibro.tapa}</th>
                    <th>{HeaderLibro.paginas}</th>
                    <th>{HeaderLibro.idioma}</th>
                    <th>{HeaderLibro.imagen}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosLibro.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.Titulo}</td>
                        <td>{item.tapa}</td>
                        <td>{item.paginas}</td>
                        <td>{item.Idioma}</td>
                        <td><img src={item.portada} alt="Portada"/></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.portada} />
                <Card.Body>
                  <Card.Title>
                    {this.state.Titulo}
                    <p />
                    {this.state.tapa}
                  </Card.Title>
                  <Card.Text>
                    {this.state.paginas}
                    <p />
                  </Card.Text>
                  <Card.Text>
                    {this.state.Idioma}
                    <p />
                  </Card.Text>
                  <Card.Text>
                    <input type="button" value="Comprar"/>
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




    /*
    return(
      <div>
        <h1>Coches</h1>
        <Container>
        <Table responsive striped>
          <thead>
            <tr>
              <th>{TitulosTablaCoches.id}</th>
              <th>{TitulosTablaCoches.field1}</th>
              <th>{TitulosTablaCoches.field2}</th>
              <th>{TitulosTablaCoches.field3}</th>
              <th>{TitulosTablaCoches.field4}</th>
              <th>{TitulosTablaCoches.field5}</th>
            </tr>
          </thead>
          <tbody>
           
             {DatosTablaCoches.map((item)=>{
                  return(
                    <tr>
                        <td>{item.matricula}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                        <td><Card.Img variant="top" src={DatosTablaCoches[2].imagen} /></td>
                        <td>{item.descripcion}</td>
                    </tr>
                  );
                }
              )
             }

          </tbody>
      </Table>
      </Container>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={DatosTablaCoches[2].imagen} />
  <Card.Body>
    <Card.Title>{DatosTablaCoches[2].marca}</Card.Title>
    <Card.Text>
      Coche con matricula {DatosTablaCoches[2].matricula}
    </Card.Text>
  </Card.Body>
</Card>
      </div>
      )
    
  }*/
 
}
export default RellenaDatos;