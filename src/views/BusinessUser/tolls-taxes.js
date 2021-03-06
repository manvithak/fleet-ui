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

const cardChartData2 = {
    labels: ['4 oct', '5 oct', '6 oct', '7 oct', '8 oct', '9 oct'],
    datasets: [
      {
        label: 'zone-1',
        borderColor: brandSuccess,
        data: [830,950,750, 910, 1010, 1020],
        fill: false,
      },
      {
        label: 'zone-2',
        borderColor: brandPrimary ,
        data: [910,730,1250, 980, 1430, 1220],
        fill: false,
      },
      {
        label: 'zone-3',
        borderColor: brandWarning,
        data: [860,910,740, 1030, 990, 1040],
        fill: false,
      },
      {
        label: 'zone-4',
        borderColor: brandDanger,
        data: [960,1430,970, 860, 1290, 1420],
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
          min: Math.min.apply(Math, cardChartData2.datasets[1].data) - 0,
          max: Math.max.apply(Math, cardChartData2.datasets[3].data) + 50,
        },
        scaleLabel: {
          display: true,
          labelString: 'Price in Rupees'
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
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      tolls:[{
        date:'09-oct-2018',
        zone:'zone-1',
        amount:'585.00 rs'
      },{
        date:'09-oct-2018',
        zone:'zone-2',
        amount:'625.00 rs'
      },{
        date:'09-oct-2018',
        zone:'zone-3',
        amount:'450.00 rs'
      },{
        date:'09-oct-2018',
        zone:'zone-4',
        amount:'710.00 rs'
      },
      {
        date:'08-oct-2018',
        zone:'zone-1',
        amount:'525.00 rs'
      },{
        date:'08-oct-2018',
        zone:'zone-2',
        amount:'610.00 rs'
      },{
        date:'08-oct-2018',
        zone:'zone-3',
        amount:'510.00 rs'
      },{
        date:'08-oct-2018',
        zone:'zone-4',
        amount:'690.00 rs'
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
        <br/>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody>
                <h5><strong>Zone:1</strong></h5>
                <Row>
                  <Col md="6">
                    <h6>Total Toll</h6>
                  </Col>
                  <Col md="6">
                    <h6>5840.00 rs</h6>
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
                  <Col md="6">
                    <h6>Total Toll</h6>
                  </Col>
                  <Col md="6">
                    <h6>6250.00 rs</h6>
                  </Col> 
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody>
                <h5><strong>Zone:3</strong></h5>
                <Row>
                  <Col md="6">
                    <h6>Total Toll</h6>
                  </Col>
                  <Col md="6">
                    <h6>4560.00 rs</h6>
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
                  <Col md="6">
                    <h6>Total Toll</h6>
                  </Col>
                  <Col md="6">
                    <h6>7100.00 rs</h6>
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
        <br />
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table borderless>
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>Zone</th>
                    <th>Toll</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.tolls.map((toll, index) => {
                    return(
                      <tr>
                        <td>{toll.date}</td>
                        <td>{toll.zone}</td>
                        <td>{toll.amount}</td>
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

export default Dashboard;
