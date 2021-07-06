import React,{useState} from 'react'
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
import CoverLetterForCvService from '../../../services/coverLetterForCvService';
export default function CoverLetterUpdate({coverLetter}) {
    const [open, setOpen] = useState(false)
    
    //console.log(coverLetter)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:coverLetter?.id,
          jobSeeker:coverLetter?.jobSeeker,
          content:coverLetter?.content
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            content: Yup.string().required(" adı boş bırakılamaz!"),
        }),
        onSubmit: (values) => {
          let coverLetterService = new CoverLetterForCvService();
          //console.log(values);
    
          coverLetterService.update(values)
            .then(toast.success("Yetenek Bilgisi güncellendi!"));
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
                style={{ marginBottom: ".5em", marginRight: ".5em" }}
              >
                <Icon name="pencil"></Icon>Düzenle
              </Button>
            }
          >
            <Modal.Header>Açıklama Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={14}>
                    <Form.Field>
                      <label>İçerik </label>
                      <input
                        name="content"
                        placeholder="İçeriği"
                        value={values.content}
                        onChange={handleChange}
                      />
                      {errors.content && touched.content && (
                        <Label basic color="red" pointing>
                          {errors.content}
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