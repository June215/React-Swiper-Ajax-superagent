import { Button, Input, Row, Grid } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Body from "./common/body.jsx";
import AgentTools from "./user/agenttools.jsx";
import CoinsLog from "./user/coinslog.jsx";
import UserInfo from "./user/userinfo.jsx";
import DemoClick from "./user/demoClick.jsx";
import ReactSwiper from "./user/reactSwiper.jsx";


const ThisPage = React.createClass({
	render(){
		return(<div>
          <Body name="i_am_body">
            <ReactSwiper source='http//aos-partner-dev.mi-ae.cn/v1/token?appkey=14564654&appsecret=6548498456'/>
          </Body>
		</div>)
	}
});


ReactDOM.render(<ThisPage />, document.getElementById('page'));