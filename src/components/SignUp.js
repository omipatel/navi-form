import React from 'react';
import {Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Formservices from '../services/Formservices';

const SignUp=()=>{
    const[id, setId] = useState('');
    const[name, setName] = useState('');
    const[mail, setMail] = useState('');    
    const[phone, setPhone] = useState('');
    const[address, setAddress] = useState('');
    const navigate = useNavigate();
    

    const saveEmployee = (e) => {
        const employee = {name, mail, phone,address};
        e.preventDefault();
        console.log(employee);
    
        //create
        Formservices.create(employee)
        .then(response => {
            console.log("employee added successfully", response.data);
           // navigate.push("/employees");
        })
        .catch(error => {
            console.log('something went wroing', error);
        })
    }
    return(
 <Form >
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="name"> Name </Label>
        <Input id="name" name="name"
             onChange={(e) => setName(e.target.value)} placeholder="Enter Name " type="text" />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="mail"> Mail </Label>
        <Input id="mail" name="mail"
          onChange={(e) => setMail(e.target.value)}  placeholder="Enter email " type="text" />
      </FormGroup>
    </Col>
    
  </Row> 
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="phone">  Phone  </Label>
        <Input id="phone"  name="phone"  
          onChange={(e) => setPhone(e.target.value)} placeholder="Enter address " type="text"  />
      </FormGroup>
    </Col>     
   </Row>  
   <FormGroup>
    <Label for="Address">  Address </Label>
    <Input id="address" name="address"
      onChange={(e) => setAddress(e.target.value)}  placeholder="Enter address " type="text"/>
  </FormGroup>    
   <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>

  </Form>

);
}
export default SignUp;