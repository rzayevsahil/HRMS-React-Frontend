import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'
import UserService from "../services/userService";
import * as Yup from "yup";
import swal from "sweetalert";

export default function SignIn() {

  const [visible, setVisible] = useState(true)

  function visibles(){
    setVisible(!visible);
  }

  const jobSeekerRegisterSchema = Yup.object().shape({
    email: Yup.string().required("Email alanı zorunludur").email("Geçerli bir email değil"),
    // password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunlugunda olmalıdır")
  });

  const history = useHistory();

  const formik= useFormik({
    initialValues: {
      email:"",
      password:""
    },
    validationSchema: jobSeekerRegisterSchema,
    onSubmit:(values) => {
      console.log(values)
      let userService = new UserService();
      userService.findByEmailAndPassword(values.email,values.password).then((result) =>  {
        console.log(result);
      if (result.data.success===false) {
       return swal(
       {
        title: result.data.message,
        text: "",
        icon: "warning",
        dangerMode: true,
        button:"Kapat"
      })
      }else{
        swal("Başarıyla giriş yapıldı","","success");
        history.push("/jobAdverts")

      }})
      
    }
  });
  return (
    <div style={{marginLeft:"15%",marginTop:"-7%",backgroundColor:("../../assets/logo.png")}}>
    
       <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='violet' textAlign='center'>
        <Image src='../../assets/logo.png' /> Giriş Yap
      </Header>
      <Form size='large' onSubmit={formik.handleSubmit}>
        <Segment stacked>
          {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' /> */}
          <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail adresi"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
              />
              {formik.errors.email && formik.touched.email && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )}
        
          
          {visible?(
            
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            style={{position:"relative",zIndex:1}}
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          ):( <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='text'
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          )
          }
          {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
          {visible?
          (<Icon style={{marginTop:"-40px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye" onClick={visibles}/>):
          (<Icon style={{marginTop:"-40px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye slash" onClick={visibles}/>)}
          
         

          <Button color='violet' fluid size='large' type="submit">
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