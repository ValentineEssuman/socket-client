import React, { Component} from 'react';
import  {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import socketIOClient from "socket.io-client";
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import  { About }  from './About';
import  { Layout } from './Componet/Layout'
import { NavigationBar } from './NavigationBar'

//import logo from './logo.svg';
//import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state ={
      moddata:'',
      response: false,
      endpoint: "http://localhost:4001"
    };
  }

  componentDidMount(){
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("API", data => this.setState({response: data}));
  }

  render(){
    const { response } = this.state;
    const { output } = this.state;
    return (
      <React.Fragment>
        <NavigationBar/>
        <About/>
        
            {response ? <p>{ response }</p>: <p>Loading....</p>}
      
        
      </React.Fragment>
      
    )
  }
}


export default App;
