import React, { useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Button, Modal } from 'semantic-ui-react'

export default function Takvim({visiblate}) {
    const [value, onChange] = useState(new Date());

    const [open, setOpen] = useState(true)
    return (
        <div>
            {/* <div>
      <Calendar style={{marginLeft:"100em"}}
        onChange={onChange}
        value={value}
      />
      </div> */}
       <Modal style={{width:"400px"}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    //   trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Takvim</Modal.Header>
      <Modal.Content>
      <Calendar style={{marginLeft:"100em"}} 
        onChange={onChange}
        value={value}
      />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} color="black">Geri</Button>
      </Modal.Actions>
    </Modal>
      </div>
    )
}
