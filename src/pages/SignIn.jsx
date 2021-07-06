import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'

export default function SignIn() {

  const [visible, setVisible] = useState(true)

  function visibles(){
    setVisible(!visible);
  }
  return (
    <div style={{marginLeft:"15%",marginTop:"-7%",backgroundColor:("../../assets/logo.png")}}>
    
       <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='violet' textAlign='center'>
        <Image src='../../assets/logo.png' /> Giriş Yap
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
        
          
          {visible?(
            
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            style={{position:"relative",zIndex:1}}
          />):( <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='text'
          />)}
          {visible?
          (<Icon style={{marginTop:"-40px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye" onClick={visibles}/>):
          (<Icon style={{marginTop:"-40px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye slash" onClick={visibles}/>)}
          
         

          <Button color='violet' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message color="green">
        Hesabın yok mu? <Link to="/signUp">Kayıt Ol</Link>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  );
}