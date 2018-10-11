import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,
Button, Row, Table } from 'reactstrap';

class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state={
      vehicles:[{
        vNumber: 'TS09 EJ 0252',
        modelNumber: 'B-10',
        type: 'truck',
        lastServiceDate: '25-sept-2018'
      },
      {
        vNumber: 'TS09 EJ 4278',
        modelNumber: 'M-11',
        type: 'mini-truck',
        lastServiceDate: '26-sept-2018'
      },{
        vNumber: 'TS09 EJ 3216',
        modelNumber: 'B-10',
        type: 'mini-truck',
        lastServiceDate: '04-sept-2018'
      },{
        vNumber: 'TS09 EJ 4235',
        modelNumber: 'B-10',
        type: 'scooter',
        lastServiceDate: '02-oct-2018'
      },{
        vNumber: 'TS09 EJ 7902',
        modelNumber: 'B-10',
        type: 'mini-truck',
        lastServiceDate: '17-sept-2018'
      },{
        vNumber: 'TS09 EJ 1435',
        modelNumber: 'B-10',
        type: 'scooter',
        lastServiceDate: '07-oct-2018'
      },{
        vNumber: 'TS09 EJ 7893',
        modelNumber: 'B-10',
        type: 'scooter',
        lastServiceDate: '29-sept-2018'
      }]
    }
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table borderless>
                  <thead>
                  <tr>
                    <th>Vehicle Number</th>
                    <th>Model Number</th>
                    <th>Type</th>
                    <th>Last Service Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.vehicles.map((vehicle, index) => {
                    return(
                      <tr>
                        <td>{vehicle.vNumber}</td>
                        <td>{vehicle.modelNumber}</td>
                        <td>{vehicle.type}</td>
                        <td>{vehicle.lastServiceDate}</td>
                      </tr>
                      )
                  })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="12">
            <div className="load-button">
              <Button block color="info">Load More</Button>
            </div>  
          </Col>
        </Row>
        <br/>
      </div>

    );
  }
}

export default Vehicles;
