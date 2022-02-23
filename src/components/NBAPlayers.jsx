import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

//import './table.css';

class NBAPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  changeSelected = (item) => {
    this.setState({
      selectedItem: item

    });
  };

  async componentDidMount() {

    const response = await fetch(
      'https://www.balldontlie.io/api/v1/players'
    );
    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Equipos de rugby </h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    
                    <th>Nombre del equipo</th>
                    <th>Estadio</th>
                    <th>Fundación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.position}</td>
                        <td>{item.team.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.logo} />
                <Card.Body>
                  <Card.Title><h1>{this.state.selectedItem.first_name}</h1></Card.Title>
                  <Card.Text>
                    ID: {this.state. selectedItem.id}
                    <p />
                    Posición: {this.state.selectedItem.position}
                    <p />
                    Apellido: {this.state.selectedItem.last_name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NBAPlayers;