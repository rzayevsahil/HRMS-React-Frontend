import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Label,
  Modal,
  Icon,
  GridRow,
} from "semantic-ui-react";
import * as Yup from "yup";
import swal from "sweetalert";
import EmployerService from "../../services/employerService";
import VerificationEmployerService from "../../services/verificationEmployerService";

export default function ActiveEmployerUpdate({ employer }) {
  const [open, setOpen] = useState(false);

  let employerService = new EmployerService();

  // console.log(employer);
  //console.log(employer?.id)
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id: employer?.id,
      email: employer?.email,
      password: employer?.password,
      companyName: employer?.companyName,
      website: employer?.website,
      phoneNumber: employer?.phoneNumber,
      active: true,
      deleted: false,
      verified: false,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string().required("Şifre boş bırakılamaz"),
      companyName: Yup.string().required("Şirket adı boş bırakılamaz"),
      website: Yup.string().required("Website alanı boş bırakılamaz"),
      phoneNumber: Yup.string().required("Telefon numarası zorunludur").length(11,"Telefon numarası hatalı").matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    }),
    onSubmit: (values) => {
     console.log("güncellendi")
     //changeIsVerified(employer?.id)
      //employerService
       // .update(values)
        //.then(()=>{changeIsVerified(employer?.id);})
        values.id=27;
        values.verified=false;
       // values.verified=false;// verify buradan değiştirip false olur
        let verificationEmployerService = new VerificationEmployerService();
        let verificationEmployer={
          companyName:values.companyName,
          id:values.id,
          email:values.email,
          website:values.website,
          phoneNumber:values.phoneNumber,
          password:values.password,
          verified:false,
          deleted:false,
          active:true
        }
        verificationEmployerService.add(verificationEmployer)//.then(swal("Başarılı","Kayıt alındı bilgileriniz personellerimiz tarafından onaylandığında güncellenecektir","success"))
        employerService.changeVerifiedStatus(employer.id)
        swal({
            title: "Bilgilerinizi güncellemek istediğinizden eminmisiniz?",
            text: "",
            //icon: "warning",
            buttons: true,
            //dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal({
                title: "Kayıt alındı",
                icon: "success",
              }).then(() => {
                swal({
                  title:
                    "Hrms personeli onayladıktan sonra bilgileriniz güncellenecektir",
                  icon: "info",
                  timer: 2000,
                })
                 .then(() => window.location.reload(20000));
              });
            }
          });
    },
  });

 

  return (
    <div>
      <Modal size="tiny"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            floated="right"
            positive
            style={{ marginBottom: ".5em", marginRight: ".5em" }}
          >
            <Icon name="pencil"></Icon>Düzenle
          </Button>
        }
      >
        <Modal.Header style={{color:"purple"}}>Şirket Bilgilerini Güncelle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
                <GridRow>
              <GridColumn width={7}>
              {/* </GridColumn>
              <GridColumn width={7}> */}
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Şirket ismi</label>
                  <input
                    name="companyName"
                    placeholder="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && touched.companyName && (
                    <Label basic color="red" pointing>
                      {errors.companyName}
                    </Label>
                  )}
                </Form.Field>
              {/* </GridColumn>
              <GridColumn width={7}> */}
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Site ismi(domain)</label>
                  <input
                    name="website"
                    placeholder="website"
                    value={values.website}
                    onChange={handleChange}
                  />
                  {errors.website && touched.website && (
                    <Label basic color="red" pointing>
                      {errors.website}
                    </Label>
                  )}
                </Form.Field>
              {/* </GridColumn>
              <GridColumn width={7}> */}
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Telefon numarası</label>
                  <input
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Label basic color="red" pointing>
                      {errors.phoneNumber}
                    </Label>
                  )}
                </Form.Field>
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <Label basic color="red" pointing>
                      {errors.email}
                    </Label>
                  )}
                </Form.Field>
              {/* </GridColumn>
              <GridColumn width={7}> */}
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Şifre</label>
                  <input
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <Label basic color="red" pointing>
                      {errors.password}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn></GridRow>
            </Grid>
            <Modal.Actions>
            <Button
                type="submit"
                color="purple" style={{marginTop:"25px"}}
                
              >
                Güncelle
              </Button>
              <Button color="black" onClick={() => setOpen(false)} style={{ marginLeft: "21.5em", marginTop: "1em"}}> 
                Vazgeç
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}