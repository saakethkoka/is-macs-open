import React, { Component } from 'react';
import "./Message.css";


class Message extends Component {

  state = {

  }

  async httpGet(theUrl)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }


  componentDidMount() {
    this.httpGet("https://xtzrptp2si.execute-api.us-east-2.amazonaws.com/test/ismacsresource").then(response => {
      this.setState({
        isOpen: response
      })
    })
  }

  setText(){
    if(this.state.isOpen){
      return "yes"
    }
    else{
      return "no"
    }
  }

  render() {
    return (
      <h1>
        {this.setText()}
      </h1>
    );
  }
}

export default Message;