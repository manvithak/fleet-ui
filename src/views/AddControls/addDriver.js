import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Pagination, PaginationItem,
 PaginationLink, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,
  FormGroup,
  FormText,Label,Input } from 'reactstrap';

class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state={
      drivers:[{
        driverName:'K. Pradeep Sagar',
        file: 'pradeep.png'
      },
      {
        driverName:'P.Sandeep',
        file: 'Sandeep.png'
      },{
        driverName:'A.Shekar',
        file: 'pradeep.png'
      },{
        driverName:'G.Bhupal',
        file: 'Bhupal.png'
      },{
        driverName:'B.N Chary',
        file: 'Chary.png'
      },{
        driverName:'J.Naresh',
        file: 'Naresh.png'
      },{
        driverName:'G.Paidi Raju',
        file: 'Raju.png'
      },],
      drivername: '',
      modal: false,
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
      driverName:this.state.driverName,
      file:this.state.file,
    }
    console.log(this.state.file);
    var drivers = this.state.drivers.slice();
    drivers.push(obj)
    this.setState({
      modal: !this.state.modal,
      drivers: drivers
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
              <ModalHeader toggle={this.toggle}>Add Driver</ModalHeader>
              <ModalBody>
                <Card>
                  <CardHeader>
                    <strong>Add Driver</strong>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="deviceId">Device Id</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="driverName" name="driverName" placeholder="Driver Name" 
                          value={this.state.driverName} onChange={this.handleChange}/>
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
                    <th>DriverName</th>
                    <th>ID Proof</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.drivers.map((driver, index) => {
                    return(
                      <tr>
                        <td>{driver.driverName}</td>
                        <td><a href="#">{driver.file}</a></td>
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
