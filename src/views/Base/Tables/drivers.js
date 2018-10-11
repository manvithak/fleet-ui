import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,
Button, Row, Table } from 'reactstrap';

class Drivers extends Component {
  constructor(props){
    super(props)
    this.state={
      drivers:[{
        driver: 'K. Pradeep Sagar',
        mobile: '7013076846',
        createdDate: '04-Sept-2018 15:33',
        lastReported: '06-Oct-2018 09:21'
      },
      {
        driver: 'P.Sandeep',
        mobile: '7013076845',
        createdDate: '09-Sep-2018 15:23',
        lastReported: '05-Oct-2018 09:21'
      },{
        driver: 'A.Shekar',
        mobile: '6301752929',
        createdDate: '15-Sept-2018 15:33',
        lastReported: '02-Oct-2018 09:21'
      },{
        driver: 'G.Bhupal',
        mobile: '6301752928',
        createdDate: '16-Sept-2018 15:33',
        lastReported: '07-Oct-2018 09:21'
      },{
        driver: 'B.N Chary',
        mobile: '6301752924',
        createdDate: '21-Sept-2018 15:33',
        lastReported: '08-Oct-2018 09:21'
      },
      {
        driver: 'J.Naresh',
        mobile: '6301752925',
        createdDate: '26-Sept-2018 15:33',
        lastReported: '01-Oct-2018 09:21'
      },
      {
        driver: 'G.Paidi Raju',
        mobile: '6301752931',
        createdDate: '30-Sept-2018 15:33',
        lastReported: '09-Oct-2018 09:21'
      },]
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
                    <th>Driver</th>
                    <th>Mobile</th>
                    <th>Created Date</th>
                    <th>Last Reported</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.drivers.map((driver, index) => {
                    const userLink = `#/manager/${driver.driver}`
                    return(
                      <tr>
                        <td><a href={userLink}>{driver.driver}</a></td>
                        <td>{driver.mobile}</td>
                        <td>{driver.createdDate}</td>
                        <td>{driver.lastReported}</td>
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

export default Drivers;
