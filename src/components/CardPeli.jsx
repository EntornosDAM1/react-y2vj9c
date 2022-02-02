import React from 'react';
import { Card,Col } from 'react-bootstrap';


class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    if(this.props.data !=null){
      return (
      
        <Col lg={2} md={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.data.image} />
            <Card.Body>
              <Card.Title>
                Título:
               
                {this.props.data.title}
              </Card.Title>
              <Card.Text>
                Director: 
                this.{this.props.data.director}
                <p />
              </Card.Text>
              <Card.Text>
                Fecha de salida:
                {this.props.data.release_date}
                <p />
              </Card.Text>
              <Card.Text>
                Ventas:
                {this.props.data.rt_score}
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
