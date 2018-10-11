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


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      timeSheets:[{
        date:'09-oct-2018',
        zone:'zone-1',
        idleTime:'6 hrs',
        drivingTime:'49 hrs',
        rest:'4 hrs'
      },{
        date:'09-oct-2018',
        zone:'zone-2',
        idleTime:'5 hrs',
        drivingTime:'52 hrs',
        rest:'4 hrs'
      },{
        date:'09-oct-2018',
        zone:'zone-3',
        idleTime:'5 hrs',
        drivingTime:'62 hrs',
        rest:'6 hrs'
      },{
        date:'09-oct-2018',
        zone:'zone-4',
        idleTime:'5 hrs',
        drivingTime:'56 hrs',
        rest:'3 hrs'
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
                    <div>Idle Time</div>
                    <div>Driving Time</div>
                    <div>Rest Time</div>
                  </Col>
                  <Col md="4">
                    <div>6</div>
                    <div>49</div>
                    <div>4</div>
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
                    <div>Idle Time</div>
                    <div>Driving Time</div>
                    <div>Rest Time</div>
                  </Col>
                  <Col md="4">
                    <div>5</div>
                    <div>56</div>
                    <div>3</div>
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
                  <Col md="8">
                    <div>Idle Time</div>
                    <div>Driving Time</div>
                    <div>Rest Time</div>
                  </Col>
                  <Col md="4">
                    <div>4</div>
                    <div>62</div>
                    <div>5</div>
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
                    <div>Idle Time</div>
                    <div>Driving Time</div>
                    <div>Rest Time</div>
                  </Col>
                  <Col md="4">
                    <div>8</div>
                    <div>111</div>
                    <div>4</div>
                  </Col> 
                </Row>
              </CardBody> 
            </Card>
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
                    <th>Idle Time</th>
                    <th>Driving Time</th>
                    <th>Rest Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.timeSheets.map((sheet, index) => {
                    return(
                      <tr>
                        <td>{sheet.date}</td>
                        <td>{sheet.zone}</td>
                        <td>{sheet.idleTime}</td>
                        <td>{sheet.drivingTime}</td>
                        <td>{sheet.rest}</td>
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
