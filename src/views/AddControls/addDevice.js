import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,
  FormGroup,
  FormText,Label,Input } from 'reactstrap';

class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state={
      devices:[{
        number:'7013076846',
        id:'8934567094271890'
      },
      {
        number:'7013076845',
        id:'8934566215471890'
      },{
        number:'6301752929',
        id:'8934567094232960'
      },{
        number:'6301752928',
        id:'8942390942718901'
      },{
        number:'6301752924',
        id:'8934567094292316'
      },{
        number:'6789542012',
        id:'8934567094232156'
      },{
        number:'6301752925',
        id:'8934567094212456'
      },],
      modal: false,
      number:'',
      id:''
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
    var devices = this.state.devices.slice();
    devices.push(obj)
    this.setState({
      modal: !this.state.modal,
      devices: devices
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="10">
          </Col>
          <Col md="2">
            <Button block color="success" onClick={this.toggle}>Add Device</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add Device</ModalHeader>
              <ModalBody>
                <Card>
                  <CardHeader>
                    <strong>AddVehicle</strong> Form
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="number">Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="number" name="number" placeholder="Phone Number" 
                          value={this.state.number} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="id">IMEI Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="id" name="id" placeholder="Model Number" 
                          value={this.state.id} onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.handleSubmit}>Add Device</Button>{' '}
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
                    <th>Phone Number</th>
                    <th>IMEI Number</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.devices.map((device, index) => {
                    return(
                      <tr>
                        <td>{device.number}</td>
                        <td>{device.id}</td>
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
