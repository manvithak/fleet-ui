import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class FuelLogs extends Component {
  constructor(props){
    super(props)
    this.state={
      breakdowns:[{
        vNumber: 'TS09 EJ 0252',
        driverName: 'K. Pradeep Sagar',
        location: 'Krishna Nagar',
        type: 'Tyre Puncture',
        time: '04-oct-2018 15:30'
      },
      {
        vNumber: 'TS09 EJ 4278',
        driverName: 'P.Sandeep',
        location: 'Madhapur',
        type: 'Engine Failure',
        time: '5-oct-2018 09:50'
      },{
        vNumber: 'TS09 EJ 3216',
        driverName: 'A.Shekar',
        location: 'Kukatpally',
        type: 'Tyre Puncture',
        time: '06-oct-2018 17:45'
      },{
        vNumber: 'TS09 EJ 7902',
        driverName: 'G.Bhupal',
        location: 'Begumpet',
        type: 'Tyre Puncture',
        time: '07-oct-2018 10:30'
      },{
        vNumber: 'TS09 EJ 1435',
        driverName: 'B.N Chary',
        location: 'LB Nagar',
        type: 'Engine Isuue',
        time: '09-oct-2018 19:30'
      },{
        vNumber: 'TS09 EJ 7893',
        driverName: 'J.Naresh',
        location: 'Krishna Nagar',
        type: 'Tyre Puncture',
        time: '09-oct-2018 13:50'
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
                    <th>Driver Name</th>
                    <th>Location</th>
                    <th>Breakdown Type</th>
                    <th>Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.breakdowns.map((breakdown, index) => {
                    return(
                      <tr>
                        <td>{breakdown.vNumber}</td>
                        <td>{breakdown.driverName}</td>
                        <td>{breakdown.location}</td>
                        <td>{breakdown.type}</td>
                        <td>{breakdown.time}</td>
                      </tr>
                      )
                  })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default FuelLogs;
