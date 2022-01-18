import React from 'react';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {TitulosTablaCoches,DatosTablaCoches} from '../data/DatosCoches';
import {Card,Button} from 'react-bootstrap';

class RellenaDatos extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
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
    
  }
 
}
export default RellenaDatos;