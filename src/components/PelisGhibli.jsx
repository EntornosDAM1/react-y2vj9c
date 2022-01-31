import React from 'react';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {TitulosTablaCoches,DatosTablaCoches} from '../data/DatosCoches';
import {HeaderLibro,DatosLibro} from '../data/BibliotecaMunicipal';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     selectItem: null,
     tableData:[]
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

  async componentDidMount(){
    const response =await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({tableData : responseData,
                    selectItem:responseData[0]
                  });
  }


  render(){
    return (
      <div className="main-site">
        <h1>Pelis Ghibli</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Tittle</th>
                    <th>Director</th>
                    <th>Realease_Date</th>
                    <th>rt_score</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
                  <CardPeli data={this.state.selectItem}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

        
}
export default PelisGhibli;