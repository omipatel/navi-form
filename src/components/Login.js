import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
const Login=()=>{

   alert("login");



    return(
        <Form >
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name"> Name </Label>
              <Input id="name" name="name" placeholder="Enter Name " type="text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password"> Password </Label>
              <Input id="password" name="password" placeholder="Enter Password" type="password" />
            </FormGroup>
          </Col>
        </Row>
        <Button  onClick={(e) => Login(e)} c > Login</Button>
        </Form>
    );
}
export default Login;