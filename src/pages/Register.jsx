import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { useFormik } from "formik";
import AuthService from "../services/authService";

export default function Register() {

  const [visible, setVisible] = useState(true)

  function visibles(){
    setVisible(!visible);
  }

  let authService = new AuthService();
  const jobSeekerRegisterSchema = Yup.object().shape({
    birthDate: Yup.date().required("Doğum Tarihi zorunludur"),
    email: Yup.string().required("Email alanı zorunludur").email("Geçerli bir email değil"),
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Soy isim zorunludur"),
    nationalNumber: Yup.string().required("Kimlik numarası zorunludur").length(11,"Kımlık numarası hatalı").matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunlugunda olmalıdır"),
    rePassword: Yup.string().oneOf([Yup.ref("password"),null], "Şifreler eşleşmiyor")
  });

  const history = useHistory();

  const formik= useFormik({
    initialValues: {
      birthDate:"",
      email:"",
      firstName:"",
      lastName:"",
      nationalNumber:"",
      password:"",
      rePassword:"",
    },
    validationSchema: jobSeekerRegisterSchema,
    onSubmit:(values) => {
      console.log(values)
      //candidateService.registerCandidate(values).then((result) => alert(result.message))
      
      history.push("/login")
    }
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName,value);
  }

  return (
    <div style={{marginLeft:"15%",marginTop:"100px"}}>
      {/* <div className="register2"></div>
      <div className="register1"> */}
        <Container style={{width:"40em"}}>
      <Header as="h2" color="purple" style={{marginRight:"10%",color:"white"}}>
        <Image style={{width:"70px"}}  src="../../assets/logo.png"/>İş Arayan Olarak Kayıt Ol
      </Header>
      <Form onSubmit={formik.handleSubmit}>
        <Segment stacked>
          <Grid stackable>
            <Grid.Column>
            <div style={{marginTop:"1em"}}>
              <label><b>İsim</b></label>
              
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="İsim"
                type="text"
                value={formik.values.firstName}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.firstName && formik.touched.firstName && (
                  <div className={"ui pointing red label"}>
                    {formik.errors.firstName}
                  </div>
                )
              }
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Soy İsim</b></label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Soy isim"
                type="text"
                value={formik.values.lastName}
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Kimlik Numarası</b></label>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="Kimlik numarası"
                type="text"
                value={formik.values.nationalNumber}
                name="nationalNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nationalNumber && formik.touched.nationalNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.nationalNumber}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Doğum Tarihi</b></label>
              <Form.Input
                fluid
                icon="calendar times"
                iconPosition="left"
                placeholder="Dogum tarihi"
                type="date"
                error={Boolean(formik.errors.birthDate)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "birthDate")
                }
                value={formik.values.birthDate}
                onBlur={formik.handleBlur}
                name="birthDate"
              />
              {formik.errors.birthDate && formik.touched.birthDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.birthDate}
                  </div>
                )}
              </div>
            {/* </Grid.Column>

            <Grid.Column width={8}> */}
              <div style={{marginTop:"1em"}}>
            <label><b>Email</b></label>
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
              </div>
              {visible?(
                <div style={{marginTop:"1em"}}>
                <label><b>Şifre</b></label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Şifre"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                />
                 {formik.errors.password && formik.touched.password && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              ):(<div style={{marginTop:"1em"}}>
              <label><b>Şifre</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre"
                type="text"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
              />
               {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
              </div>)}
              {visible?
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye" onClick={visibles}/>):
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye slash" onClick={visibles}/>)}
              
               {visible?(
              <div style={{marginTop:"1em"}}>
              <label><b>Şifre Tekrar</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre tekrar"
                type="password"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="rePassword"
              />
              {formik.errors.rePassword && formik.touched.rePassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.rePassword}
                  </div>
                )}
              </div>):(
                <div style={{marginTop:"1em"}}>
                <label><b>Şifre Tekrar</b></label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Şifre tekrar"
                  type="text"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="rePassword"
                />
                {formik.errors.rePassword && formik.touched.rePassword && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.rePassword}
                    </div>
                  )}
                </div>
              )}
              {visible?
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye" onClick={visibles}/>):
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye slash" onClick={visibles}/>)}
            </Grid.Column>
          </Grid>

            <br/>
          <Button color="violet" fluid size="large" type="submit">
            Kayıt Ol
          </Button>
        </Segment>
      </Form>
      <Message info color="violet"><Link to={"/signUp/Employer"}>İşveren olarak kaydolmak için buraya tıkla</Link></Message>
      <Message info color="violet"><Link to={"/signIn"}>Hesabın zaten var mı? Giriş yap</Link></Message>
      </Container>
      {/* </div> */}
      {/* <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment> */}
    </div>
  );
}