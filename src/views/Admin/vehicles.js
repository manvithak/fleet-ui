import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,
  FormGroup,
  FormText,Label,Input } from 'reactstrap';

class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state={
      vehicles:[{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'truck',
        payload: 1500,
        fuelCapacity: 100,
        serviceInterval: 1500,
      },
      {
        vNumber: 'TS09 EJ 0252',
        modelNumber: 'P.Sandeep',
        type: 'mini-truck',
        payload: 1000,
        fuelCapacity: 70,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 4215',
        modelNumber: 'A. Shekhar',
        type: 'scooter',
        payload: 200,
        fuelCapacity: 200,
        serviceInterval: 800,
      },{
        vNumber: 'TS09 E 3824',
        modelNumber: 'G. Bhupal',
        type: 'mini-truck',
        payload: 600,
        fuelCapacity: 60,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 7216',
        modelNumber: 'B N. Chary',
        type: 'scooter',
        payload: 250,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 2367',
        modelNumber: 'J. Naresh',
        type: 'scooter',
        payload: 200,
        fuelCapacity: 25,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1189',
        modelNumber: 'G. PaidiRaju',
        type: 'scooter',
        payload: 100,
        fuelCapacity: 15,
        serviceInterval: 1000,
      }],
      modal: false,
      vNumber: '',
      modelNumber: '',
      type: '',
      payload: 0,
      fuelCapacity: 0,
      serviceInterval: 0
    }
  this.toggle = this.toggle.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name ;
    this.setState({
      [name]: value
    });
  }
  toggle() {
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
          </Col>
          <Col md="2">
            
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add Vehicle</ModalHeader>
              <ModalBody>
                <Card>
                  <CardHeader>
                    <strong>AddVehicle</strong> Form
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
                <Button color="success" onClick={this.handleSubmit}>Add vehicle</Button>{' '}
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
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
                    <th>VehicleNumber</th>
                    <th>Driver Name</th>
                    <th>Type</th>
                    <th>Payload in Kg</th>
                    <th>Fuel Capacity in Lit</th>
                    <th>Service Interval</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.vehicles.map((vehicle, index) => {
                    return(
                      <tr>
                        <td>{vehicle.vNumber}</td>
                        <td>{vehicle.modelNumber}</td>
                        <td>{vehicle.type}</td>
                        <td>{vehicle.payload}</td>
                        <td>{vehicle.fuelCapacity}</td>
                        <td>{vehicle.serviceInterval}</td>
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
