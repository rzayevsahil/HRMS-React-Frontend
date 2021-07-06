import { useFormik } from "formik";
import React, { useState } from "react";
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
import * as Yup from "yup";
import AuthService from "../services/authService";
import {Link, useHistory} from 'react-router-dom'
import swal from "sweetalert";

export default function RegisterEmployer() {
  const [visible, setVisible] = useState(true)

  function visibles(){
    setVisible(!visible);
  }

  let employerService = new AuthService();
  const employerRegisterSchema = Yup.object().shape({
    companyName: Yup.string().required("Şirket adı zorunludur").min(2,"Şirket adı en az iki uzunlukta olmalıdır"),
    phoneNumber: Yup.string().required("Telefon numarası zorunludur").length(10,"Telefon 10 rakamdan oluşmalıdır").matches(/^[0-9]+$/, "Sadece rakam girilmelidir")
    .test("0 olmadan yazınız","0 olmadan yazınız",function() {
      let phoneNumber = this.parent["phoneNumber"];
      if(phoneNumber){
        return phoneNumber.startsWith("0") ? false : true;
      }
    },"slkdsld"),
    password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunluğunda olmalıdır"),
    confirmPassword: Yup.string().required("Şifre tekrar zorunludur").oneOf([Yup.ref("password"),null], "Şifreler eşleşmiyor"),
    website: Yup.string().required("Web sitesi zorunludur").test("Http olmadan yazınız",function() {
      let site = this.parent["website"];
      if(site){
        return site.startsWith("http://www.") ? false : true;
      }
    }),
    email: Yup.string().required("Email zorunludur").email("Geçerli bir email değil")
    // .test("Email domaini ile web sitesi domaini aynı olmalıdır",function() {
    //   let site = this.parent["website"];
    //   let email = this.parent["email"];
    //   if(site && email) {
    //     return email.endsWith(site) ? true : false; 
    //   }
    // }),
    
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      companyName:"",
      password:"",
      confirmPassword:"",
      website:"www.",
      email:"",
      phoneNumber:"",
      active: true,
      deleted: false,
      verified: false,
    },
    validationSchema: employerRegisterSchema,
    onSubmit:(values) => {
      console.log(values,values.confirmPassword)
      employerService.registerEmployer(values,values.confirmPassword).then((result) =>  {
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
        swal("Başarıyla kayıt oldunuz","","success");
        history.push("/signIn")

      }})
      
      
    }
  });

  return (
    <div style={{marginLeft:"15%",marginTop:"100px"}}>
        <Container style={{width:"40em"}}>
      <Header as="h2" color="violet" style={{marginRight:"10%"}}>
        <Image src="../../assets/logo.png" /> İşveren Olarak Kayıt Ol
      </Header>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment stacked>
        <div style={{marginTop:"1em"}}>
              <label><b>Şirket Adı</b></label>
              <Form.Input
                fluid
                icon="building"
                iconPosition="left"
                placeholder="Şirket Adı"
                type="text"
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.companyName && formik.touched.companyName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.companyName}
                  </div>
                )
              }
              </div>
          <Grid stackable>            
            <Grid.Column>
              <div style={{marginTop:"1em"}}>
                <label><b>Telefon Numarası</b> (Sıfır olmadan yazınız)</label>
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Telefon Numarası"
                  type="text"
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {
                formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.phoneNumber}
                  </div>
                )
              }
              </div>

              <div style={{marginTop:"1em"}}>
              <label><b>Web Sitesi </b><b style={{color:"purple"}}>(http://www olmadan yazınız)</b></label>
              <Form.Input
                fluid
                icon="world"
                iconPosition="left"
                placeholder="Web Sitesi"
                type="text"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.website && formik.touched.website && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.website}
                  </div>
                )
              }
              
              </div>
              
              <div style={{marginTop:"1em"}}>
              <label><b>Email </b><b style={{color:"purple"}}>(Web sitesi domaini ile aynı domaine sahip olmalıdır)</b></label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                type="email"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.email && formik.touched.email && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )
              }
              </div>

                {/* </Grid.Column> */}
{/* *************************************************************** */}
            {/* <Grid.Column width={8}> */}
            {visible?(
              <div style={{marginTop:"1em"}}>
              <label><b>Şifre</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )
              }
              </div>
          ):(<div style={{marginTop:"1em"}}>
          <label><b>Şifre</b></label>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.password && formik.touched.password && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.password}
              </div>
            )
          }
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
                placeholder="Şifre Tekrar"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.confirmPassword}
                  </div>
                )}
              </div>
              ):(
                <div style={{marginTop:"1em"}}>
              <label><b>Şifre Tekrar</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre Tekrar"
                type="text"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.confirmPassword}
                  </div>
                )}
              </div>
              )}

              {visible?
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye" onClick={visibles}/>):
          (<Icon style={{marginTop:"-27.5px",marginBottom:"5px",marginLeft:"-105px",marginRight:"10px",float:"right",position:"relative",zIndex:3}} name="eye slash" onClick={visibles}/>)}
            </Grid.Column>
          </Grid>

          <br />
          <Button color="violet" fluid size="large" type="submit">
            Kayıt Ol
          </Button>
        </Segment>
      </Form>
      <Message info color="violet"><Link to={"/signUp"}>İş arayan olarak kaydolmak için buraya tıkla</Link></Message>
      <Message info color="violet"><Link to={"/signIn"}>Hesabın zaten var mı? Giriş yap</Link></Message>
      </Container>
    </div>
  );
}