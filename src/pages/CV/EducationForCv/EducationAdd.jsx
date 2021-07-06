import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'
import *as Yup from "yup"
import { toast } from 'react-toastify';
import EducationForCvService from '../../../services/educationForCvService';
export default function EducationAdd({jobSeeker}) {
    
    const [open, setOpen] = useState(false)
console.log(jobSeeker)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            schoolName: "",
            departmentName: "",
            startYear: "",
            graduationYear: "",
            jobSeeker:jobSeeker
        },
        enableReinitialize:true,
        validationSchema:
            Yup.object({
                schoolName: Yup.string().required("Okul adı boş bırakılamaz!"),
                departmentName: Yup.string().required("Bölüm boş bırakılamaz!"),
                startYear: Yup.date().required(" başlama yılı boş bırakılamaz"),
                graduationYear: Yup.date()
                
            }),
        onSubmit: values => {
            let educationService = new EducationForCvService();
            console.log("eklendi")
            educationService.add(values).then(toast.success("Eğitim eklendi"));

            window.location.reload(10000);
        }
    });

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button floated="right" color="purple" style={{ marginTop: "-27px", marginRight: ".5em" }}><Icon name="add"></Icon>Ekle</Button>}
            >
                <Modal.Header>Eğitim Ekle</Modal.Header>
                <Modal.Description>
                    <Form onSubmit={handleSubmit} style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}>
                        <Grid stackable>
                            <GridColumn width={14}>
                                <Form.Field>
                                    <label>Okul Adı</label>
                                    <input name="schoolName" placeholder='Okul Adı' value={values.schoolName} onChange={handleChange} />
                                    {
                                        errors.schoolName && touched.schoolName &&
                                        <Label basic color='red' pointing>
                                            {errors.schoolName}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Derece</label>
                                    <input name="departmentName" placeholder='departmentName' value={values.departmentName} onChange={handleChange} />
                                    {
                                        errors.departmentName && touched.departmentName &&
                                        <Label basic color='red' pointing>
                                            {errors.departmentName}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Başlama Tarihi</label>
                                    <input name="startYear" type="date" value={values.startYear} onChange={handleChange} />
                                    {
                                        errors.startYear && touched.startYear &&
                                        <Label basic color='red' pointing>
                                            {errors.startYear}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Bitiş Tarihi</label>
                                    <input name="graduationYear" type="date" value={values.graduationYear} onChange={handleChange} />
                                    {
                                        errors.graduationYear && touched.graduationYear &&
                                        <Label basic color='red' pointing>
                                            {errors.graduationYear}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                        </Grid>
                        <Modal.Actions>
                            <Button color='red' onClick={() => setOpen(false)}>
                                Vazgeç
                            </Button>
                            <Button type='submit' color="teal" style={{ marginLeft: "22em", marginTop: "1em" }}>Ekle</Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Description>
            </Modal>
        </div>
    
    


    )
 
}