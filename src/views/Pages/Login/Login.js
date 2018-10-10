import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {BrowserRouter,Link,Route} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
        super(props)
        this.state={
          username: '',
          password: '',
          message: ''
        }
    }

    loginHandler =(e) => {
        var user = this.state.username;
        var password = this.state.password;
        if(user=='admin'&&password=='admin'){
          this.props.history.push('/home/dashboard')
        }
        else if(user=='test' && password=='test123'){
          this.props.history.push('/manager/dashboard')
        }
        else if(user=='manvitha' && password=='manvitha123'){
          this.props.history.push('/srinivas/adminDashboard')
        }
        else{
          this.setState({
            message:'Incorrect Username or Password'
          })
        }
    }
    handleChange =(e) => {
      var name = e.target.name;
      this.setState({
        [name] : e.target.value
      })
    }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h2 className="pb-4 text-muted">Fleet Dashboard</h2>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username}
                        onChange={e=>this.handleChange(e)} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password}
                        onChange={e=>this.handleChange(e)} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="success" className="px-4" onClick={e=>this.loginHandler(e)}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                    <p>{this.state.message}</p>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
