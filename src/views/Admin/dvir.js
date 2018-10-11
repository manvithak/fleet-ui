import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {Bar} from 'react-chartjs-2';

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
      data: [17, 21, 19, 13, 21, 9],
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
      data: [17, 21, 19, 13, 21, 9],
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
      data: [17, 21, 19, 13, 21, 9],
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
class DVIR extends Component {
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
                    <div>Perfect</div>
                    <div>Faulty</div>
                  </Col>
                  <Col md="4">
                    <div>101</div>
                    <div>19</div>
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
                    <div>Perfect</div>
                    <div>Faulty</div>
                  </Col>
                  <Col md="4">
                    <div>123</div>
                    <div>33</div>
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
                    <div>Perfect</div>
                    <div>Faulty</div>
                  </Col>
                  <Col md="4">
                    <div>79</div>
                    <div>15</div>
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
                    <div>Perfect</div>
                    <div>Faulty</div>
                  </Col>
                  <Col md="4">
                    <div>157</div>
                    <div>12</div>
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
      </div>

    );
  }
}

export default DVIR;
