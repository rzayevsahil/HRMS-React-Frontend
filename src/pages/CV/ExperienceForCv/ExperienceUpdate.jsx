import React ,{useState}from 'react'
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
import ExperienceForCvService from '../../../services/experienceForCvService';
import { toast } from 'react-toastify';
export default function ExperienceUpdate({experience,trigger}) {
    const [open, setOpen] = useState(false)

    //console.log(experience);
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:experience?.id,
          jobSeeker:experience?.jobSeeker,
          startDate:experience?.startDate,
          workplaceName:experience?.workplaceName,
          position:experience?.position,
          leaveDate:experience?.leaveDate
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            position:Yup.string().required(" adı boş bırakılamaz!"),
            workplaceName:Yup.string().required("url boş bırakılamaz"),
            leaveDate:Yup.date(),
            startDate:Yup.date()
        }),
        onSubmit: (values) => {
          let experienceService = new ExperienceForCvService();
        //  console.log(experience)
          experienceService.update(values)
            .then(toast.success("Güncellendi"));
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
                style={{ marginTop: "-27px", marginRight: ".5em" }}
              >
                <Icon name="pencil"></Icon>Düzenle
              </Button>
            }
          >
            <Modal.Header>Deneyim Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={14}>
                    <Form.Field>
                      <label>Deneyim ekle</label>
                      <input
                        name="position"
                        placeholder="pozisyonAdı"
                        value={values.position}
                        onChange={handleChange}
                      />
                      {errors.position && touched.position && (
                        <Label basic color="red" pointing>
                          {errors.position}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Work Place</label>
                      <input
                        name="workplaceName"
                        placeholder="workplaceName"
                        value={values.workplaceName}
                        onChange={handleChange}
                      />
                      {errors.workplaceName && touched.workplaceName && (
                        <Label basic color="red" pointing>
                          {errors.workplaceName}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Başlama Tarihi</label>
                      <input
                        name="startDate"
                        placeholder="startDate"
                        value={values.startDate}
                        onChange={handleChange}
                      />
                      {errors.startDate && touched.startDate && (
                        <Label basic color="red" pointing>
                          {errors.startDate}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Ayrılma Tarihi</label>
                      <input
                        name="leaveDate"
                        placeholder="leaveDate"
                        value={values.leaveDate}
                        onChange={handleChange}
                      />
                      {errors.leaveDate && touched.leaveDate && (
                        <Label basic color="red" pointing>
                          {errors.leaveDate}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                </Grid>
                <Modal.Actions>
                  <Button color="red" onClick={() => setOpen(false)}>
                    Vazgeç
                  </Button>
                  <Button
                    type="submit"
                    color="teal"
                    style={{ marginLeft: "22em", marginTop: "1em" }}
                  >
                    Güncelle
                  </Button>
                </Modal.Actions>
              </Form>
            </Modal.Description>
          </Modal>
        </div>
      )
}