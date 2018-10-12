import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {Bar} from 'react-chartjs-2';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const cardChartData1 = {
  labels: ['Engine', 'Braking System', 'Gearbox', 'Electricals', 'Wheels', 'Frame'],
  datasets: [
    {
      label: 'Fail Percentage',
      backgroundColor: brandSuccess,
      borderColor: 'transparent',
      data: [17, 21, 19, 13, 21, 9],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: true,
        scaleLabel: {
        display: true,
        labelString: 'Fail percentage'
      }
      }],
  },
};
const cardChartData2 = {
  labels: ['Engine', 'Braking System', 'Gearbox', 'Electricals', 'Wheels', 'Frame'],
  datasets: [
    {
      label: 'Fail Percentage',
      backgroundColor: brandPrimary,
      borderColor: 'transparent',
      data: [21, 17, 13, 19, 9, 21],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: true,
        scaleLabel: {
        display: true,
        labelString: 'Fail Percentage'
      }
      }],
  },
};
const cardChartData3 = {
  labels: ['Engine', 'Braking System', 'Gearbox', 'Electricals', 'Wheels', 'Frame'],
  datasets: [
    {
      label: 'Fail Percentage',
      backgroundColor: brandWarning,
      borderColor: 'transparent',
      data: [24, 14, 23, 15, 17, 7],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: true,
        scaleLabel: {
        display: true,
        labelString: 'Fail Percentage'
      }
      }],
  },
};
const cardChartData4 = {
  labels: ['Engine', 'Braking System', 'Gearbox', 'Electricals', 'Wheels', 'Frame'],
  datasets: [
    {
      label: 'Fail Percentage',
      backgroundColor: brandDanger,
      borderColor: 'transparent',
      data: [19, 18, 24, 14, 16, 9],
    },
    ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: true,
        scaleLabel: {
        display: true,
        labelString: 'Fail Percentage'
      }
      }],
  },
};
class Breakdown extends Component {
  constructor(props){
    super(props);
    this.state={
      breakdowns:[{
        date: '09-oct-2018',
        zone: 'zone-1',
        location:'Krishna Nagar'
      },
      {
        date: '09-oct-2018',
        zone: 'zone-2',
        location:'Madhapur'
      },
      {
        date: '09-oct-2018',
        zone: 'zone-3',
        location:'Begumpet'
      },
      {
        date: '09-oct-2018',
        zone: 'zone-4',
        location:'Chanda Nagar'
      },{
        date: '08-oct-2018',
        zone: 'zone-1',
        location:'Banjara Hills'
      },{
        date: '08-oct-2018',
        zone: 'zone-2',
        location:'Gachibowli'
      },{
        date: '08-oct-2018',
        zone: 'zone-3',
        location:'Secunderabad'
      },{
        date: '08-oct-2018',
        zone: 'zone-4',
        location:'Miyapur'
      }],
      dropdownOpen: new Array(19).fill(false),
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  handleSelect(range){
    console.log(range);    
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="2" md="2">
            <DateRangePicker>
                <Button block color="info">Filter By Date</Button>
              </DateRangePicker>
          </Col>
          <Col lg="10" md="10">    
            <ButtonDropdown isOpen={this.state.dropdownOpen[1]} toggle={() => { this.toggle(1); }}>
              <DropdownToggle caret color="info">
                All Zones
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Zone 1</DropdownItem>
                <DropdownItem>Zone 2</DropdownItem>
                <DropdownItem>Zone 3</DropdownItem>
                <DropdownItem>Zone 4</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col> 
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody>
                <h5><strong>Zone:1</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Days Without Incident</div>
                    <div>Last Incident Date</div><br/>
                    <div>Total for Month</div>
                  </Col>
                  <Col md="4">
                    <div>11</div><br/>
                    <div>07-oct-2018</div>
                    <div>44</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody>
                <h5><strong>Zone:2</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Days Without Incident</div>
                    <div>Last Incident Date</div><br/>
                    <div>Total for Month</div>
                  </Col>
                  <Col md="4">
                    <div>9</div><br/>
                    <div>04-oct-2018</div>
                    <div>32</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody >
                <h5><strong>Zone:3</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Days Without Incident</div>
                    <div>Last Incident Date</div><br/>
                    <div>Total for Month</div>
                  </Col>
                  <Col md="4">
                    <div>7</div><br/>
                    <div>09-oct-2018</div>
                    <div>54</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody>
                <h5><strong>Zone:4</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Days Without Incident</div>
                    <div>Last Incident Date</div><br/>
                    <div>Total for Month</div>
                  </Col>
                  <Col md="4">
                    <div>16</div><br/>
                    <div>05-oct-2018</div>
                    <div>19</div>
                  </Col> 
                </Row>
              </CardBody> 
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6" sm="12" md="6">
            <Bar data={cardChartData1} options={cardChartOpts1}/>
          </Col>
          <Col xs="12" lg="6" sm="12" md="6">
            <Bar data={cardChartData2} options={cardChartOpts2}/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6" sm="12" md="6">
            <Bar data={cardChartData3} options={cardChartOpts3}/>
          </Col>
          <Col xs="12" lg="6" sm="12" md="6">
            <Bar data={cardChartData4} options={cardChartOpts4}/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Zone</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.breakdowns.map((breakdown, index) => {
                    return(
                      <tr>
                        <td>{breakdown.date}</td>
                        <td>{breakdown.zone}</td>
                        <td>{breakdown.location}</td>
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

export default Breakdown;
