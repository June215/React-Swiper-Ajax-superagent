import React from 'react';
import ReactDOM from 'react-dom';


/*const DemoClick = React.createClass({
  getInitialState: function(){
    return {value: 'hello~'};
  },
  handleChange: function(event){
    this.setState({value:"嘿嘿"});
  },

  render(){
    var value = this.state.value;
    return (<div>
        <button onClick={this.handleChange}>Click me</button>
        <input type="text" value={value} onChange={this.handleChange} />
        <h4>{value}</h4>
    </div>);
  }
});*/

/*const Content = React.createClass({
  render(){
    return (<div>
        <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
        <h4>{this.props.myDataProp}</h4>
    </div>);
  }
})
const DemoClick = React.createClass({

  getInitialState: function(){
    return {value: 'hello~'};
  },

  handleChange: function(event){
    this.setState({value:event.target.value});
  },

  render(){
    var value = this.state.value;
    return (<div>
        <Content myDataProp={value} updateStateProp={this.handleChange}></Content>
    </div>);
  }
});*/


/*const DemoClick = React.createClass({
  getInitialState: function(){
    return {
      clickCount : 0
    }
  },
  handleChange: function(){
    this.setState(function(state){
      return {
        clickCount: state.clickCount+1
      }
    })
  },
  render(){
    return(<div>
      <h3 onClick={this.handleChange}>点我！点击次数为: {this.state.clickCount}</h3>
    </div>);
  }
});*/


/*const DemoClick = React.createClass({
  render(){
    return(<h3>hello: {this.props.name}</h3>);
  }
});*/

const DemoClick = React.createClass({
  getInitialState: function(){
    return{like:false}
  },
  handleChange: function(){
    this.setState({
      like: !this.state.like
    })

  },
  render(){
    var text = this.state.like ? "喜欢" : "不喜欢";
    return(<h3 onClick={this.handleChange}>你<b>{text}</b>我。点我切换状态。</h3>);
  }
});



export default DemoClick;