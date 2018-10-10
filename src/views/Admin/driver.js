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
        payload: 50,
        fuelCapacity: 20,
        serviceInterval: 1500,
      },
      {
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'mini-truck',
        payload: 20,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'scooter',
        payload: 10,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'scooter',
        payload: 10,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'scooter',
        payload: 10,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'scooter',
        payload: 10,
        fuelCapacity: 20,
        serviceInterval: 1000,
      },{
        vNumber: 'TS09 E 1105',
        modelNumber: 'K. Pradeep Sagar',
        type: 'scooter',
        payload: 10,
        fuelCapacity: 20,
        serviceInterval: 1000,
      }],
      modal: false,
      vNumber: '',
      modelNumber: '',
      file:null
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
    }
    console.log(this.state.file);
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
            <Button block color="success" onClick={this.toggle}>Add Driver</Button>
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
                      <Input type="file" onChange={this.handleChange} value={this.state.file} name="file"
                      id="file"/>
                    </Form>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.handleSubmit}>Add Driver</Button>{' '}
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
                    <th>ModelNumber</th>
                    <th>Type</th>
                    <th>Payload</th>
                    <th>Fuel Capacity</th>
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