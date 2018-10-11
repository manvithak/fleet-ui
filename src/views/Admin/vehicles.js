import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  FormText,Label,Input } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {Line} from 'react-chartjs-2';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


const cardChartData2 = {
    labels: ['4 oct', '5 oct', '6 oct', '7 oct', '8 oct', '9 oct'],
    datasets: [
      {
        label: 'zone-1',
        borderColor: brandSuccess,
        data: [76,86,75, 91, 101, 102],
        fill: false,
      },
      {
        label: 'zone-2',
        borderColor: brandPrimary ,
        data: [91,102,110, 98, 101, 114],
        fill: false,
      },
      {
        label: 'zone-3',
        borderColor: brandWarning,
        data: [69,61,71, 60, 65, 72],
        fill: false,
      },
      {
        label: 'zone-4',
        borderColor: brandDanger,
        data: [91,129,131, 101, 118, 99],
        fill: false,
      }
    ],
  };

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: true,
  showAreas: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },
        scaleLabel: {
          display: true,
          labelString: 'Dates'
        }
      }],
    yAxes: [
      {
        display: true,
        ticks: {
          display: true,
          min: Math.min.apply(Math, cardChartData2.datasets[2].data) - 0,
          max: Math.max.apply(Math, cardChartData2.datasets[3].data) + 5,
        },
        scaleLabel: {
          display: true,
          labelString: 'Working In Transit'
        }
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const cardChartData3 = {
    labels: ['4 oct', '5 oct', '6 oct', '7 oct', '8 oct', '9 oct'],
    datasets: [
      {
        label: 'zone-1',
        borderColor: brandSuccess,
        data: [12, 15, 14, 9, 10, 11],
        fill: false,
      },
      {
        label: 'zone-2',
        borderColor: brandPrimary ,
        data: [14, 21, 13, 18, 14, 12],
        fill: false,
      },
      {
        label: 'zone-3',
        borderColor: brandWarning,
        data: [11, 18, 7, 17, 9, 10],
        fill: false,
      },
      {
        label: 'zone-4',
        borderColor: brandDanger,
        data: [9, 28, 9, 17, 12, 11],
        fill: false,
      }
    ],
  };

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: true,
  showAreas: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },
        scaleLabel: {
          display: true,
          labelString: 'Dates'
        }
      }],
    yAxes: [
      {
        display: true,
        ticks: {
          display: true,
          min: Math.min.apply(Math, cardChartData3.datasets[2].data) - 0,
          max: Math.max.apply(Math, cardChartData3.datasets[3].data) + 5,
        },
        scaleLabel: {
          display: true,
          labelString: 'Working but idle'
        }
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};
class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state={
      vehicles:[{
        date: '05-oct-2018',
        zone: 'zone-1',
        workingIdle: 15,
        workingTransit: 86,
        brokeDown: 14,
        accident: 5,
      },
      {
        date: '05-oct-2018',
        zone: 'zone-2',
        workingIdle: 21,
        workingTransit: 102,
        brokeDown: 21,
        accident: 12,
      },{
        date: '05-oct-2018',
        zone: 'zone-3',
        workingIdle: 18,
        workingTransit: 61,
        brokeDown: 8,
        accident: 7,
      },{
        date: '05-oct-2018',
        zone: 'zone-4',
        workingIdle: 28,
        workingTransit: 129,
        brokeDown: 10,
        accident: 2,
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
                    <div>Total Vehicles</div>
                    <div>Working (idle)</div>
                    <div>Working (transit)</div>
                    <div>Broke Down</div>
                    <div>Accident</div>
                  </Col>
                  <Col md="4">
                    <div>120</div>
                    <div>15</div>
                    <div>86</div>
                    <div>14</div>
                    <div>5</div>
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
                    <div>Total Vehicles</div>
                    <div>Working (idle)</div>
                    <div>Working (transit)</div>
                    <div>Broke Down</div>
                    <div>Accident</div>
                  </Col>
                  <Col md="4">
                    <div>156</div>
                    <div>21</div>
                    <div>102</div>
                    <div>21</div>
                    <div>12</div>
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
                    <div>Total Vehicles</div>
                    <div>Working (idle)</div>
                    <div>Working (transit)</div>
                    <div>Broke Down</div>
                    <div>Accident</div>
                  </Col>
                  <Col md="4">
                    <div>94</div>
                    <div>18</div>
                    <div>61</div>
                    <div>8</div>
                    <div>7</div>
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
                    <div>Total Vehicles</div>
                    <div>Working (idle)</div>
                    <div>Working (transit)</div>
                    <div>Broke Down</div>
                    <div>Accident</div>
                  </Col>
                  <Col md="4">
                    <div>169</div>
                    <div>28</div>
                    <div>129</div>
                    <div>10</div>
                    <div>2</div>
                  </Col> 
                </Row>
              </CardBody> 
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6" sm="12" md="6">
            <Line data={cardChartData2} options={cardChartOpts2}/>
          </Col>
          <Col xs="12" lg="6" sm="12" md="6">
            <Line data={cardChartData3} options={cardChartOpts3}/>
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
                    <th>Working(idle)</th>
                    <th>Working(transit)</th>
                    <th>Brokedown</th>
                    <th>Accident</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.vehicles.map((vehicle, index) => {
                    return(
                      <tr>
                        <td>{vehicle.date}</td>
                        <td>{vehicle.zone}</td>
                        <td>{vehicle.workingIdle}</td>
                        <td>{vehicle.workingTransit}</td>
                        <td>{vehicle.brokeDown}</td>
                        <td>{vehicle.accident}</td>
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
