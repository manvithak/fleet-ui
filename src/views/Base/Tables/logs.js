import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, 
  Row, Table, Button } from 'reactstrap';

class Logs extends Component {
  constructor(props){
    super(props)
    this.state={
      logs:[{
  date: '4 Oct',
  driver: 'K. Pradeep Sagar',
  hoursDriven: 6.23,
  distanceDriven: 231,
  stoppageTime: "1Hour 11Mins",
  lastReported: '7 Mins ago'
},
{
  date: '4 Oct',
  driver: 'P.Sandeep',
  hoursDriven: 7.1,
  distanceDriven: 290,
  stoppageTime: "1Hour 2Mins",
  lastReported: '4 Mins ago'
},{
  date: '4 Oct',
  driver: 'A.Shekar',
  hoursDriven: 5.6,
  distanceDriven: 185,
  stoppageTime: '0Hour 52Mins',
  lastReported: '2 Mins ago'
},{
  date: '4 Oct',
  driver: 'G.Bhupal',
  hoursDriven: 8.4,
  distanceDriven: 351,
  stoppageTime: '1Hour 23Mins',
  lastReported: '9 Mins ago'
},{
  date: '4 Oct',
  driver: 'B.N Chary',
  hoursDriven: 3.4,
  distanceDriven: 121,
  stoppageTime: '1Hour 17Mins',
  lastReported: '3 Mins ago'
},
{
  date: '4 Oct',
  driver: 'J.Naresh',
  hoursDriven: 7.31,
  distanceDriven: 312,
  stoppageTime: '0Hour 33Mins',
  lastReported: '4 Mins ago'
},
{
  date: '4 Oct',
  driver: 'G.Paidi Raju',
  hoursDriven: 6.23,
  distanceDriven: 219,
  stoppageTime: '1Hour 6Mins',
  lastReported: '6 Mins ago'
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
                    <th>Date</th>
                    <th>Driver</th>
                    <th>Hours Driven</th>
                    <th>Distance Driven</th>
                    <th>Stoppage Time</th>
                    <th>Last Reported</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.logs.map((log, index) => {
                    const userLink = `#/manager/${log.driver}`
                    return(
                      <tr>
                        <td>{log.date}</td>
                        <td><a href={userLink}>{log.driver}</a></td>
                        <td>{log.hoursDriven}</td>
                        <td>{log.distanceDriven}</td>
                        <td>{log.stoppageTime}</td>
                        <td>{log.lastReported}</td>
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

export default Logs;
