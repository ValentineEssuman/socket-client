import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import App from './App';
import './App.css';

export const About = () => (
    <Container className ="uptop">
        <Jumbotron>
            <h2 classsName="header">JS to Modbus</h2>
            {/* <p>Ghana Covid 19 Status Info to The Zongo</p> */}
        </Jumbotron>
    </Container>
);