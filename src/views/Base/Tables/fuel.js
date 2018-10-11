import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,
Button, Row, Table } from 'reactstrap';

class FuelLogs extends Component {
  constructor(props){
    super(props)
    this.state={
      vehicles:[{
        vNumber: 'TS09 EJ 0252',
        fuelAmount: 15,
        date: '04-oct-2018'
      },
      {
        vNumber: 'TS09 EJ 4278',
        fuelAmount: 22,
        date: '04-oct-2018'
      },{
        vNumber: 'TS09 EJ 3216',
        fuelAmount: 30,
        date: '07-oct-2018'
      },{
        vNumber: 'TS09 EJ 4235',
        fuelAmount: 5,
        date: '06-oct-2018'
      },{
        vNumber: 'TS09 EJ 7902',
        fuelAmount: 4,
        date: '08-oct-2018'
      },{
        vNumber: 'TS09 EJ 1435',
        fuelAmount: 20,
        date: '08-oct-2018'
      },{
        vNumber: 'TS09 EJ 7893',
        fuelAmount: 50,
        date: '09-oct-2018'
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
                    <th>Fuel amount in lit</th>
                    <th>Fill Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.vehicles.map((vehicle, index) => {
                    return(
                      <tr>
                        <td>{vehicle.vNumber}</td>
                        <td>{vehicle.fuelAmount}</td>
                        <td>{vehicle.date}</td>
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

export default FuelLogs;
