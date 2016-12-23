import React from 'react';
import ReactDOM from 'react-dom';
import {
	Panel,
	Row, Col,
	Modal,
	Form, FormGroup, FormControl,HelpBlock,
	Button,
	ControlLabel 
} from "react-bootstrap";

let agent = navigator.userAgent.toLowerCase();
let querystr = window.location.href.split("?")[1];
let parseQueryString = () => {
	var str=window.location.href.split("?")[1];  
	var iterms = str.split("&");  
	var arr,json={};  
	for(var i=0;i<iterms.length;i++){  
	       arr=iterms[i].split("=");  
	       json[arr[0]]=arr[1];  
	}  
	return json;  
}
let cookies = parseQueryString();
let keyValue = (param) => {
let result ="";
	for(var y in param){
		result += y + ":"+param[y] + "\n";
	}
		return result;
}


let header;

const UserInfo = React.createClass({

	componentWillMount(){
		this.setState({useragent:agent});
		this.setState({querystring:querystr});
		this.setState({cookie:keyValue(cookies)});
		this.setState({header:header});
	},

	render(){
		return (<div>
			<Panel header="Usre-Agent" bsStyle="primary">
	      <Row>
	      	<Col xs={12}>
	      		{this.state.useragent}
	      	</Col>
	      </Row>
	    </Panel>
	    <Panel header="Query-String" bsStyle="primary">
	      <Row>
	      	<Col xs={12}>
	      		{this.state.querystring}
	      	</Col>
	      </Row>
	    </Panel>
	    <Panel header="Cookie" bsStyle="primary">
	      <Row>
	      	<Col xs={12}>
	      	{this.state.cookie}
	      	</Col>
	      </Row>
	    </Panel>
	    <Panel header="Header" bsStyle="primary">
	      <Row>
	      	<Col xs={12}>
	      		{this.state.header}
	      	</Col>
	      </Row>
	    </Panel>
	    
		</div>);
	}
});

export default UserInfo;