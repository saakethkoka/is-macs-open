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
        isOpen: response,
        className: response === "true" ? "yes" : "no"
      })
    })
  }

  setText(){
    console.log(this.state.className)
    console.log(typeof this.state.isOpen)
    if(this.state.isOpen === "true"){
      return "yes"
    }
    else{
      return "no"
    }

  }

  render() {
    return (
        <main className={this.state.className}>
          <h1>
            {this.setText()}
          </h1>
        </main>

    );
  }
}

export default Message;