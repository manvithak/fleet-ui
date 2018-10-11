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
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
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

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
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
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['week-1', 'week-2', 'week-3', 'week-4'],
  datasets: [
    {
      label: 'Fuel Usage',
      backgroundColor: brandSuccess,
      borderColor: 'transparent',
      data: [78, 81, 80, 69],
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
  labels: ['week-1', 'week-2', 'week-3', 'week-4'],
  datasets: [
    {
      label: 'Breakdowns',
      backgroundColor: brandDanger,
      borderColor: 'transparent',
      data: [12, 14, 9, 18],
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

// Social Box Chart


class Dashboard extends Component {
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
        </Row>
        <br />
        <Row>
          <Col lg="2" md="2">
            <h3 className="pb-4 text-muted">Zone-2</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-info">
              <CardBody >
                <Row>
                  <Col md="8">
                    <h4>Drivers</h4>
                  </Col>
                  <Col md="4">
                    <h4>179</h4>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody >
                <Row>
                  <Col md="8">
                    <h4>Vehicles</h4>
                  </Col>
                  <Col md="4">
                    <h4>156</h4>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-warning">
              <CardBody>
                <Row>
                  <Col md="8">
                    <h4>Trips</h4>
                  </Col>
                  <Col md="4">
                    <h4>961</h4>
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
          <Col md="12">
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

export default Dashboard;
