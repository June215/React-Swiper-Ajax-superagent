import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
   
let Carousel = React.createClass({
   getInitialState: function(){
    return {
      appkeyval:'1451976086',
      appsval:'41da20f2efee49ef28c150b9bcfcc928',
      atval:' '
    };
  },
  handleChange: function(event){
    var appkey =document.getElementById("appkey");
    var appsecret =document.getElementById("appsecret");
    var token =document.getElementById("token");

    /* http ajax
    var appkey =document.getElementById("appkey");
    var appsecret =document.getElementById("appsecret");
    var token =document.getElementById("token");
    var xhr;
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    }else{ 
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('GET', '//aos-partner-dev.mi-ae.cn/v1/token?appkey='+ appkey.value +'&appsecret='+ appsecret.value +'', false);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);
          token.value = json.access_token;
      }
    }
    xhr.send(null);
    */

    var appkey =document.getElementById("appkey");
    var appsecret =document.getElementById("appsecret");
    var token =document.getElementById("token");

    /*superagent ajax*/
    ajax.get('//aos-partner-dev.mi-ae.cn/v1/token?appkey='+ appkey.value +'&appsecret='+ appsecret.value +'')
    .send({ appkey: appkey.value, appsecret: appsecret.value })
    .end(function(err, res){
      if(res && 200 === res.status){
        let accessObj=JSON.parse(res.text);
        let accessToken=accessObj.access_token;
        token.value=accessToken;
      }else if(res && res.statusType === 4){
        let error_code = parseInt(eval("(" +res.text + ")").error_code);
        let error_message = encodeURIComponent(parseInt(eval("(" + res.text + ")").error_message));
        console.log(error_message)
      }
    })

  },
  changeappkey: function(event) {
    this.setState({appkeyval: event.target.value});
  },
  changeappsecret: function(event) {
    this.setState({appsval: event.target.value});
  },

  render: function() {
    return (<div>
    <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide" style={{height:'700px'}}>
                <div className="halfbox left">
                    <div className="row"><span>appkey: </span><input type="text" className="inputs bottom" id="appkey" value={this.state.appkeyval} onChange={this.changeappkey}/></div>
                    <div className="row"><span>appsecret: </span><input type="password" className="inputs bottom" id="appsecret" value={this.state.appsval} onChange={this.changeappsecret}/></div>
                    <div className="row"><span>access_token: </span><input type="text" className="inputs bottom" id="token" value={this.state.atval} onChange={this.handleChange}/><p id="create" onClick={this.handleChange} name="create" className="btn">生成token</p></div>
                </div>
            </div>
            <div className="swiper-slide" style={{height:'700px'}}>Slide 2</div>
            <div className="swiper-slide" style={{height:'700px'}}>Slide 3</div>
            <div className="swiper-slide" style={{height:'700px'}}>Slide 4</div>
            <div className="swiper-slide" style={{height:'700px'}}>Slide 5</div>
        </div>
        <div className="swiper-pagination"></div>
    </div>
  </div>);
  }

});

window.onload=function(){
let swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical'
});
}

export default Carousel;
