import React from 'react';
import { Card } from 'react-bootstrap';

class RellenaDatos extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    if(props.data !=null){
      return (
      
        <Col lg={2} md={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.portada} />
            <Card.Body>
              <Card.Title>
                Título
                <p />
                {props.data.title}
              </Card.Title>
              <Card.Text>
                Director
                {props.data.director}
                <p />
              </Card.Text>
              <Card.Text>
                Fecha de salida
                {props.data.release_date}
                <p />
              </Card.Text>
              <Card.Text>
                Ventas
                {props.data.rt_score}
                <p />
              </Card.Text>
              <Card.Text>
                <input type="button" value="Comprar" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }else{
      return(
          <h1>a</h1>
        ); 
    }
    
  }
}
export default CardPeli;
