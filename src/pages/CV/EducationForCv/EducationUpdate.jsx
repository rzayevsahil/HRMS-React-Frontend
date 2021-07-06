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
} from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import EducationForCvService from "../../../services/educationForCvService";
export default function EducationUpdate({ education }) {


  const [open, setOpen] = useState(false);

//  console.log(education)

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id: education?.id,
      jobSeeker: education?.jobSeeker,
      schoolName: education?.schoolName,
      departmentName: education?.departmentName,
      startYear: education?.startYear,
      graduationYear: education?.graduationYear,
    },
    enableReinitialize:true,
    validationSchema: Yup.object({
      schoolName: Yup.string().required("Okul adı boş bırakılamaz!"),
      departmentName: Yup.string().required("Bölüm boş bırakılamaz!"),
      startYear: Yup.date().required("Başlama tarihi bos bırakılamaz!"),
      graduationYear: Yup.date(),
    }),
    onSubmit: (values) => {
      let educationService = new EducationForCvService();
     // console.log(values);

      educationService
        .update(values)
        .then(toast.success("Eğitim bilgisi güncellendi!"));
        window.location.reload()
    },
  });

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            floated="right"
            positive
            style={{ marginTop: "-25px", marginRight: ".5em" }}
          >
            <Icon name="pencil"></Icon>Düzenle
          </Button>
        }
      >
        <Modal.Header>Eğitim Güncelle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={14}>
                <Form.Field>
                  <label>Okul Adı</label>
                  <input
                    name="schoolName"
                    placeholder="Okul Adı"
                    value={values.schoolName}
                    onChange={handleChange}
                  />
                  {errors.schoolName && touched.schoolName && (
                    <Label basic color="red" pointing>
                      {errors.schoolName}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={14}>
                <Form.Field>
                  <label>DepartmentName</label>
                  <input
                    name="departmentName"
                    placeholder="Okul Adı"
                    value={values.departmentName}
                    onChange={handleChange}
                  />
                  {errors.departmentName && touched.departmentName && (
                    <Label basic color="red" pointing>
                      {errors.schoolNdepartmentNameame}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>Başlama Tarihi</label>
                  <input
                    name="startYear"
                    type="date"
                    value={values.startYear}
                    onChange={handleChange}
                  />
                  {errors.startYear && touched.startYear && (
                    <Label basic color="red" pointing>
                      {errors.startYear}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>Bitiş Tarihi</label>
                  <input
                    name="graduationYear"
                    type="date"
                    value={values.graduationYear}
                    onChange={handleChange}
                  />
                  {errors.graduationYear && touched.graduationYear && (
                    <Label basic color="red" pointing>
                      {errors.graduationYear}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
            </Grid>
            <Modal.Actions>
            <Button
                type="submit"
                color="teal"
                
              >
                Güncelle
              </Button>
              <Button style={{ marginLeft: "45em", marginTop: "1em" }} color="red" onClick={() => setOpen(false)}>
                Vazgeç
              </Button>
             
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}