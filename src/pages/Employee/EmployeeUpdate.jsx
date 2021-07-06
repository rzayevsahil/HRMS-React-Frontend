import { useFormik } from "formik";
import React, { useState } from "react";
import EmployeeService from "../../services/employeeService";
import {
    Button,
    Form,
    Grid,
    GridColumn,
    GridRow,
    Label,
    Modal,
    Icon,
} from "semantic-ui-react";
import swal from "sweetalert";
import * as Yup from "yup";

export default function EmployeeUpdate({employee}) {

    const [open, setOpen] = useState(false);

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id: employee?.id,
      email: employee?.email,
      password: employee?.password,
      firstName: employee?.firstName,
      lastName: employee?.lastName,
      active: true,
      deleted: false,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      //  bla bla
    }),
    onSubmit: (values) => {
      let employeeService = new EmployeeService();
      //   console.log(employee)
      employeeService.update(values)

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
             window.location.reload(20000);
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
        <Modal.Header style={{color:"purple"}}>Bilgilerini Güncelle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
                <GridRow>
              <GridColumn width={7}>
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
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>İsim</label>
                  <input
                    name="firstName"
                    placeholder="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && touched.firstName && (
                    <Label basic color="red" pointing>
                      {errors.firstName}
                    </Label>
                  )}
                </Form.Field>
                <Form.Field style={{marginLeft:".8em",width:"35em"}}>
                  <label>Soyisim</label>
                  <input
                    name="lastName"
                    placeholder="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && touched.lastName && (
                    <Label basic color="red" pointing>
                      {errors.lastName}
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
  )
}
