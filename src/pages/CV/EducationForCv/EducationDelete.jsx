import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import EducationForCvService from '../../../services/educationForCvService';
export default function EducationDelete({id}) {
   
    const [open, setOpen] = useState(false)
//console.log(id)
    const deleteEducation = () => {
        let educationService = new EducationForCvService();
        console.log("silindi");
        educationService.delete(id).then(toast.success("Eğitim bilgisi silindi!"));
        window.location.reload(2000)
    }
   
    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button floated="right" style={{ marginTop: "-25px", marginRight: ".5em" }} negative><Icon name="trash alternate" />Sil</Button>}
            >
                <Modal.Header>Eğitim Bilgisi Sil</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
                            Bu eğitim bilgisini silmek istiyormusunuz?
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        Vazgeç
                    </Button>
                    <Button
                        content="Evet"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        onClick={() => deleteEducation()}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}