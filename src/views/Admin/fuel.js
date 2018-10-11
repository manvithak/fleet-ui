import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,
  FormGroup,
  FormText,Label,Input } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {Line} from 'react-chartjs-2';

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
          labelString: 'Fuel Consumption'
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
        liters: 201,
        cost: 14070
      },
      {
        date: '05-oct-2018',
        zone: 'zone-1',
        liters: 258,
        cost: 18060
      },{
        date: '05-oct-2018',
        zone: 'zone-1',
        liters: 298,
        cost: 20860
      },{
        date: '05-oct-2018',
        zone: 'zone-1',
        liters: 392,
        cost: 27440
      }]
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <div>Zone:1</div>
                <Row>
                  <Col md="8">
                    <div>Total Vehicles</div>
                    <div>Total Fuel</div>
                  </Col>
                  <Col md="4">
                    <div>120</div>
                    <div>604</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div>Zone:2</div>
                <Row>
                  <Col md="8">
                    <div>Total Vehicles</div>
                    <div>Total Fuel</div>
                  </Col>
                  <Col md="4">
                    <div>156</div>
                    <div>658</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div>Zone:3</div>
                <Row>
                  <Col md="8">
                    <div>Total Vehicles</div>
                    <div>Total Fuel</div>
                  </Col>
                  <Col md="4">
                    <div>94</div>
                    <div>598</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div>Zone:4</div>
                <Row>
                  <Col md="8">
                    <div>Total Vehicles</div>
                    <div>Total Fuel</div>
                  </Col>
                  <Col md="4">
                    <div>169</div>
                    <div>792</div>
                  </Col> 
                </Row>
              </CardBody> 
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12" sm="12" md="12">
            <Line data={cardChartData2} options={cardChartOpts2}/>
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
                    <th>Liters</th>
                    <th>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.vehicles.map((vehicle, index) => {
                    return(
                      <tr>
                        <td>{vehicle.date}</td>
                        <td>{vehicle.zone}</td>
                        <td>{vehicle.liters}</td>
                        <td>{vehicle.cost}</td>
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

export default Vehicles;
