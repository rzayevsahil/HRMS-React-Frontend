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
import { toast } from "react-toastify";
import LanguageForCvService from '../../../services/languageForCvService';
export default function LanguageUpdate({language}) {
    const [open, setOpen] = useState(false)

    //console.log(language);
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:language?.id,
          jobSeeker:language?.jobSeeker,
          level:language?.level,
          language:language?.language
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            level:Yup.number().required(" adı boş bırakılamaz!"),
            language:Yup.string().required("url boş bırakılamaz")
        }),
        onSubmit: (values) => {
          let languageService = new LanguageForCvService();
         // console.log(language)
          languageService.update(values)
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
                style={{ marginRight: ".5em",marginTop: "-27px" }}
              >
                <Icon name="pencil"></Icon>Düzenle
              </Button>
            }
          >
            <Modal.Header>Yetenek Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={14}>
                    <Form.Field>
                      <label>Dil Adı</label>
                      <input
                        name="language"
                        placeholder="site Adı"
                        value={values.language}
                        onChange={handleChange}
                      />
                      {errors.language && touched.language && (
                        <Label basic color="red" pointing>
                          {errors.language}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Dil Seviyesi</label>
                      <input
                        name="level"
                        placeholder="level"
                        value={values.level}
                        onChange={handleChange}
                      />
                      {errors.level && touched.level && (
                        <Label basic color="red" pointing>
                          {errors.level}
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