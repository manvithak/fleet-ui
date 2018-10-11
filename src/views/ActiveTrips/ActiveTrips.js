import React, { Component } from 'react';
import {
  Button, Col, Row , ButtonDropdown , DropdownItem ,  DropdownMenu, DropdownToggle, Card, CardBody, Progress,Badge,
Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup, Input,Label,CardHeader} from 'reactstrap';

import Widget03 from '../Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


class ActiveTrips extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(19).fill(false),
      vNumber:'',
      modelNumber:'',
      type:'',
      payload:0,
      fuelCapacity:0,
      serviceInterval:0,
      modal:false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,  
    });
    
  }
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name ;
    this.setState({
      [name]: value
    });
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleSubmit(e){
    console.log(this.state.vNumber);
    var obj={
      vNumber:this.state.vNumber,
      modelNumber:this.state.modelNumber,
      type:this.state.type,
      payload:this.state.payload,
      fuelCapacity:this.state.fuelCapacity,
      serviceInterval:this.state.fuelCapacity
    }
    var vehicles = this.state.vehicles.slice();
    vehicles.push(obj)
    this.setState({
      modal: !this.state.modal,
      vehicles: vehicles
    })
  }
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="10">
            <h4 className="pb-4 text-muted">Active Trips</h4>
          </Col>
          <Col md="2">
            <Button block color="success" onClick={this.toggleModal}>Add Trip</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Add Vehicle</ModalHeader>
              <ModalBody>
                <Card>
                  <CardHeader>
                    <strong>Add Trip</strong>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="deviceId">Device Id</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="vNumber" name="vNumber" placeholder="Vehicle Number" 
                          value={this.state.vNumber} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="modelNumber">Model Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="modelNumber" name="modelNumber" placeholder="Model Number" 
                          value={this.state.modelNumber} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="type">Type</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="type" name="type" placeholder="Type" 
                          value={this.state.type} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="payload">Payload</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="number" id="payload" name="payload" placeholder="Payload" 
                          value={this.state.payload} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="fuelCapacity">Fuel Capacity</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="number" id="fuelCapacity" name="fuelCapacity" placeholder="Fuel Capacity" 
                          value={this.state.fuelCapacity} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="serviceInterval">Service Interval</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="number" id="serviceInterval" name="serviceInterval" placeholder="Service Interval" 
                          value={this.state.serviceInterval} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.handleSubmit}>Add Trip</Button>{' '}
                <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Row>
          <Col lg="6" md="6">
            <DateRangePicker>
                <Button block color="info">Filter By Date</Button>
              </DateRangePicker>
          </Col>
          <Col lg="6" md="6">    
            <ButtonDropdown isOpen={this.state.dropdownOpen[1]} toggle={() => { this.toggle(1); }}>
              <DropdownToggle caret color="info">
                All Drivers
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

          <Col xs="12" sm="12" md="12">
            <Card className="my-3 tripcard">
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="3" xl="2">
                    <p className="text-primary">TRIP#ATSL73</p>
                  </Col>
                  <Col xs="12" sm="12" md="6" xl="7" className="mb-4">
                    <Row>
                      <Col xs="3" sm="3" md="3" xl="2"><span className="text-muted pull-right">Banjara Hills, Hyderabad</span></Col>
                      <Col xs="6" sm="6" md="6" xl="8">
                        <span className="progresscircle">
                          <span className="avatar-status badge-success"></span>
                          <Progress color="success" value="31" className="mt-2 progress-xs" />
                          <span className="avatar-status2 badge-success"></span>
                        </span>
                      </Col>
                      <Col  xs="3" sm="3" md="3" xl="2"> <span className="text-muted">Begumpet, Hyderabad</span></Col>
                    </Row>
                  </Col>
                  <Col xs="12" sm="12" md="3" xl="3" className="mb-4">
                    <p className="text-muted">31% Complete</p>
                  </Col>
                  <Col xs="12" sm="12" md="12">
                    <Row>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVER</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p><a href="/#/manager/K. Pradeep Sagar" hr>K. Pradeeep Sagar</a></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">VEHICLE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>TS09 EJ 0252</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE FUEL EFFICIENCY</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>13.4 kmpl</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVING TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>15 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Eicher 11.10 XP MS Container E2 Plus</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE SPEED</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>21.21 km/h</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">STOPPAGE TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>27 min</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">PAYLOAD</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>WD/CL 11 GW 11020 kgs</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted"></p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">ETA</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>10:45 AM - 11 Oct</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Wood - Furniture - COG</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="12">
            <Card className="my-3 tripcard">
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="3" xl="2">
                    <p className="text-primary">TRIP#ATS
L73</p>
                  </Col>
                  <Col xs="12" sm="12" md="6" xl="7" className="mb-4">
                    <Row>
                      <Col  xs="3" sm="3" md="3" xl="2"><span className="text-muted pull-right">Begumpet, Hyderabad</span></Col>
                      <Col  xs="6" sm="6" md="6" xl="8"><span className="progresscircle"> <span className="avatar-status badge-success"></span><Progress color="success" value="12" className="mt-2 progress-xs" /><span className="avatar-status2 badge-success"></span></span></Col>
                      <Col  xs="3" sm="3" md="3" xl="2"> <span className="text-muted">Kukatpally, Hyderabad</span></Col>
                    </Row>
                  </Col>
                  <Col xs="12" sm="12" md="3" xl="3" className="mb-4">
                    <p className="text-muted">12% Complete</p>
                  </Col>
                  <Col xs="12" sm="12" md="12">
                    <Row>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVER</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p><a href="/#/manager/P.Sandeep">P.Sundeep</a></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">VEHICLE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>TS09 EJ 4278</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE FUEL EFFICIENCY</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>15.1 kmpl</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVING TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>1 Hour 21 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Eicher 11.10 XP MS Container E2 Plus</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE SPEED</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>21.21 km/h</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">STOPPAGE TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>25 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">PAYLOAD</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>WD/CL 11 GW 11020 kgs</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted"></p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">ETA</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>10:21 AM - 11 Oct</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Wood - Furniture - COG</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="12">
            <Card className="my-3 tripcard">
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="3" xl="2">
                    <p className="text-primary">TRIP#ATS
L73</p>
                  </Col>
                  <Col xs="12" sm="12" md="6" xl="7" className="mb-4">
                    <Row>
                      <Col  xs="3" sm="3" md="3" xl="2"><span className="text-muted pull-right">Kukatpally, Hyderabad</span></Col>
                      <Col  xs="6" sm="6" md="6" xl="8"><span className="progresscircle"> <span className="avatar-status badge-success"></span><Progress color="success" value="22" className="mt-2 progress-xs" /><span className="avatar-status2 badge-success"></span></span></Col>
                      <Col  xs="3" sm="3" md="3" xl="2"> <span className="text-muted">Begumpet, Hyderabad</span></Col>
                    </Row>
                  </Col>
                  <Col xs="12" sm="12" md="3" xl="3" className="mb-4">
                    <p className="text-muted">22% Complete</p>
                  </Col>
                  <Col xs="12" sm="12" md="12">
                    <Row>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVER</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p><a href="/#/manager/A.Shekar">A.Shekhar</a></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">VEHICLE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>TS09 EJ 3216</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE FUEL EFFICIENCY</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>18.9 kmpl</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVING TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>1 Hour 40 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Eicher 11.10 XP MS Container E2 Plus</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE SPEED</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>21.21 km/h</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">STOPPAGE TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>20 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">PAYLOAD</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>WD/CL 11 GW 11020 kgs</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted"></p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">ETA</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>10:50 AM - 11 Oct</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Wood - Furniture - COG</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="12">
            <Card className="my-3 tripcard">
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="3" xl="2">
                    <p className="text-primary">TRIP#ATS
L73</p>
                  </Col>
                  <Col xs="12" sm="12" md="6" xl="7" className="mb-4">
                    <Row>
                      <Col  xs="3" sm="3" md="3" xl="2"><span className="text-muted pull-right">Gachibowli, Hyderabad</span></Col>
                      <Col  xs="6" sm="6" md="6" xl="8"><span className="progresscircle"> <span className
                      ="avatar-status badge-success"></span><Progress color="success" value="11" className="mt-2 progress-xs" /><span className="avatar-status2 badge-success"></span></span></Col>
                      <Col  xs="3" sm="3" md="3" xl="2"> <span className="text-muted">Banajara Hills, Hyderabad</span></Col>
                    </Row>
                  </Col>
                  <Col xs="12" sm="12" md="3" xl="3" className="mb-4">
                    <p className="text-muted">11% Complete</p>
                  </Col>
                  <Col xs="12" sm="12" md="12">
                    <Row>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVER</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p><a href="/#/manager/G.Bhupal">G.Bhupal</a></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">VEHICLE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>TS09 EJ 4235</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE FUEL EFFICIENCY</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>16 kmpl</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">DRIVING TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>1 Hour 12 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Eicher 11.10 XP MS Container E2 Plus</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted">AVERAGE SPEED</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p>21.21 km/h</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">STOPPAGE TIME</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>39 mins</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">PAYLOAD</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>WD/CL 11 GW 11020 kgs</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p className="text-muted"></p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="6">
                            <p></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">ETA</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>10:35 AM - 11 Oct</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" sm="12" md="6" xl="4">
                        <Row>
                          <Col xs="12" sm="12" md="6" xl="4">
                            <p className="text-muted">TYPE</p>
                          </Col>
                          <Col xs="12" sm="12" md="6" xl="8">
                            <p>Wood - Furniture - COG</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      
      </div>
    );
  }
}

export default ActiveTrips;
