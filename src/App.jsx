import React, { Component, useState } from 'react';
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      value : " "
    }
    
  }

  handleText = (e) => {
    this.setState({value:e.target.value})
  }
  

  render() {
    return (
      <div>
        <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" value={this.state.value} onChange={this.handleText} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text"  >{this.state.value}</div>
                </div>                
            </div>
        
      </div>
    );
  }
}

export default App;