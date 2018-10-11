import React,{Component} from 'react';
import {
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  Label,
  Row,
  Col,
  Table,
  Card,
  CardBody
} from 'reactstrap';

class RoutePlanning extends Component{
	constructor(props){
		super(props);
		this.state={
			driver:'',
			showTable: false
		}
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({
			driver:e.target.value,
			showTable: !this.state.showTable
		})
	}
	render(){
		return(
		<div className="animated fadeIn">
			<Form>
				<FormGroup row>
	        <Col md="3">
	          <Label htmlFor="select">Select Driver</Label>
	        </Col>
	        <Col xs="12" md="9">
	          <Input type="select" name="driver" id="driver" value={this.state.driver} 
	          onChange={this.handleChange} >
	            <option value="K. Pradeep Sagar">K. Pradeep Sagar</option>
	            <option value="P.Sandeep">P.Sandeep</option>
	            <option value="A.Shekar">A.Shekar</option>
	            <option value="G.Bhupal">G.Bhupal</option>
	          </Input>
	        </Col>
	      </FormGroup>
			</Form>
     	{this.state.showTable?<LoadingSpinner/>:null}
		</div>
		)
	}
}
class LoadingSpinner extends Component {
	constructor(props){
		super(props);
		this.state={
			table:false,
			load:true
		}
	}
	componentDidMount() {
   setTimeout(function(){
             this.setState({table:true,
             	load:false});
        }.bind(this),3000);
  }
	render(){
		return(
			<div>
        {this.state.load?<i className="fa fa-spinner fa-spin" />:null}
        {this.state.table?<RoutePlan/>:null}
      </div>
		)
	}
}
      
    

class RoutePlan extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Trip Id</th>
                      <th>Original Slot</th>
                      <th>Arrival</th>
                      <th>Departure</th>
                      <th>Agg. Distance</th>
                      <th>Agg. DrivingTime</th>
                      <th>Prep Time</th>
                      <th>Wait Time</th>
                    </tr>
                  </thead>
                  <tbody>
	                  <tr>
	                  	<td>start</td>
	                  	<td>null</td>
	                  	<td>null</td>
	                  	<td>08:00</td>
	                  	<td>0 km</td>
	                  	<td>0 km</td>
	                  	<td>0 mins</td>
	                  	<td>0 mins</td>
	                  	<td>30 mins</td>
	                  </tr>
	                  <tr>
	                  	<td>pickup</td>
	                  	<td>TRIP#ATS L84</td>
	                  	<td>8:15-10:15</td>
	                  	<td>8:10</td>
	                  	<td>8:20</td>
	                  	<td>4.32 km</td>
	                  	<td>14 mins</td>
	                  	<td>22 mins</td>
	                  	<td>20 mins</td>
	                  </tr>
	                  <tr>
	                  	<td>pickup</td>
	                  	<td>TRIP#ATS L92</td>
	                  	<td>10:15-12:15</td>
	                  	<td>10:23</td>
	                  	<td>11:55</td>
	                  	<td>5.67 km</td>
	                  	<td>16 mins</td>
	                  	<td>30 mins</td>
	                  	<td>25 mins</td>
	                  </tr>
	                  <tr>
	                  	<td>pickup</td>
	                  	<td>TRIP#ATS L101</td>
	                  	<td>12:15-14:15</td>
	                  	<td>12:30</td>
	                  	<td>13:45</td>
	                  	<td>7.96 km</td>
	                  	<td>18 mins</td>
	                  	<td>20 mins</td>
	                  	<td>18 mins</td>
	                  </tr>
	                  <tr>
	                  	<td>pickup</td>
	                  	<td>TRIP#ATS L111</td>
	                  	<td>14:15-16:15</td>
	                  	<td>14:25</td>
	                  	<td>14:40</td>
	                  	<td>9.93 km</td>
	                  	<td>14 mins</td>
	                  	<td>18 mins</td>
	                  	<td>24 mins</td>
	                  </tr>
	                  <tr>
	                  	<td>pickup</td>
	                  	<td>TRIP#ATS L121</td>
	                  	<td>16:15-18:15</td>
	                  	<td>16:20</td>
	                  	<td>16:56</td>
	                  	<td>11.45 km</td>
	                  	<td>14 mins</td>
	                  	<td>22 mins</td>
	                  	<td>20 mins</td>
	                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
			</div>
			)
	}
}
export default RoutePlanning;

