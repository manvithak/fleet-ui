import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const cardChartData4 = {
  labels: ['zone-1', 'zone-2', 'zone-3', 'zone-4'],
  datasets: [
    {
      label: 'Fuel Usage',
      backgroundColor: [brandSuccess, brandInfo, brandWarning, brandDanger],
      borderColor: 'transparent',
      data: [78, 81, 80, 45],
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
        labelString: 'Fuel in Lx1000'
      }
      }],
  },
};
const cardChartData5 = {
  labels: ['zone-1', 'zone-2', 'zone-3', 'zone-4'],
  datasets: [
    {
      label: 'Breakdowns',
      backgroundColor: [brandSuccess, brandInfo, brandWarning, brandDanger],
      borderColor: 'transparent',
      data: [61, 76, 98, 34],
    },
  ],
};

const cardChartOpts5 = {
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
        labelString: 'No of BreakDowns'
      }
      }],
  },
};

const PieData1 = {
  labels: [
    'Zone-1',
    'Zone-2',
    'Zone-3',
    'Zone-4'
  ],
  datasets: [{
    data: [78, 81, 80, 45],
    backgroundColor: [
    brandSuccess,
    brandPrimary,
    brandWarning,
    brandDanger
    ],
    hoverBackgroundColor: [
    brandSuccess,
    brandPrimary,
    brandWarning,
    brandDanger
    ]
  }]
};

const PieData2 = {
  labels: [
    'Zone-1',
    'Zone-2',
    'Zone-3',
    'Zone-4'
  ],
  datasets: [{
    data: [61, 76, 98, 34],
    backgroundColor: [
    brandSuccess,
    brandPrimary,
    brandWarning,
    brandDanger
    ],
    hoverBackgroundColor: [
    brandSuccess,
    brandPrimary,
    brandWarning,
    brandDanger
    ]
  }]
};
// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class ByZone extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: new Array(19).fill(false),
      radioSelected: 2,
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
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
              <CardBody >
                <h5><strong>Zone:1</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Drivers</div>
                    <div>Vehicles</div>
                    <div>Trips</div>
                  </Col>
                  <Col md="4">
                    <div>145</div>
                    <div>120</div>
                    <div>732</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody >
                <h5><strong>Zone:2</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Drivers</div>
                    <div>Vehicles</div>
                    <div>Trips</div>
                  </Col>
                  <Col md="4">
                    <div>179</div>
                    <div>156</div>
                    <div>961</div>
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
                    <div>Drivers</div>
                    <div>Vehicles</div>
                    <div>Trips</div>
                  </Col>
                  <Col md="4">
                    <div>112</div>
                    <div>94</div>
                    <div>512</div>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody >
                <h5><strong>Zone:4</strong></h5>
                <Row>
                  <Col md="8">
                    <div>Drivers</div>
                    <div>Vehicles</div>
                    <div>Trips</div>
                  </Col>
                  <Col md="4">
                    <div>179</div>
                    <div>169</div>
                    <div>1123</div>
                  </Col> 
                </Row>
              </CardBody> 
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p>Fuel Efficiency</p>
          </Col>
          <Col md="6">
            <p>Breakdowns</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="text-white">
              <CardBody>
                <div>
                  <Pie data={PieData1}/>
                </div> 
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="text-white">
              <CardBody>
                <div>
                  <Pie data={PieData2}/>
                </div> 
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p>Fuel Usage</p>
          </Col>
          <Col md="6">
            <p>Fuel Usage</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="text-white">
              <CardBody>
                <div>
                  <Bar data={cardChartData4} options={cardChartOpts4}/>
                </div> 
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="text-white">
              <CardBody>
                <div>
                  <Bar data={cardChartData5} options={cardChartOpts5}/>
                </div> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ByZone;
