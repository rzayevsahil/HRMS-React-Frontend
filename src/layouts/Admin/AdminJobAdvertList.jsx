import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Icon,
  Label,
  Message,
  //MessageContent,
  Table,
  // Modal,
  // Header,
} from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import "semantic-ui-css/semantic.min.css";
//import { Link } from "react-router-dom";

export default function AdminJobAdvertList() {
  const [jobAdverts, setjobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllActiveFalseAndOpenTrueJobAdverts()
      .then((result) => setjobAdverts(result.data.data));

      
  }, []);

  let changeIsActiveByEmployee = (id) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeActiveStatus(id);
    window.location.reload();
  };

  // const [open, setOpen] = React.useState(false)

  return (
    <div>
      <div className="my-div" style={{ marginLeft: "8rem",height: '85vh' }}>
        <Card fluid color="violet" header="ONAYLANMAYAN İŞ İLANLARI" />
        {jobAdverts.length > 0 ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "0%", color: "purple" }}
                >
                  No
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "9%", color: "purple" }}
                >
                  Şirket İsmi
                </Table.HeaderCell>
                <Table.HeaderCell rowSpan="2" style={{ color: "purple" }}>
                  Şehir
                </Table.HeaderCell>
                <Table.HeaderCell rowSpan="2" style={{ color: "purple" }}>
                  Pozisyon
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "8%", color: "purple" }}
                >
                  Açık Pozisyon
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "10%", color: "purple" }}
                >
                  Çalışma Şekli
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "6%", color: "purple" }}
                >
                  İş Tipi
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ width: "10%", color: "purple" }}
                >
                  Maaş Miktarı
                </Table.HeaderCell>
                <Table.HeaderCell rowSpan="2" style={{ color: "purple" }}>
                  Son Başvuru Tarihi
                </Table.HeaderCell>
                <Table.HeaderCell rowSpan="2" style={{ color: "purple" }}>
                  Açıklama
                </Table.HeaderCell>
                <Table.HeaderCell rowSpan="2" style={{ color: "red" }}>
                  Admin tarafından Onay durumu
                </Table.HeaderCell>
                <Table.HeaderCell
                  rowSpan="2"
                  style={{ color: "green" }}
                  textAlign="center"
                >
                  Onay
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobAdverts.map((jobAdvert, key) => (
                <Table.Row key={key}>
                  <Table.Cell collapsing>{key + 1}</Table.Cell>
                  <Table.Cell collapsing>
                    {jobAdvert.employer.companyName}
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.city.name}</Table.Cell>
                  <Table.Cell>{jobAdvert.jobPosition.jobPosition}</Table.Cell>
                  <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                  <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
                  <Table.Cell>{jobAdvert.workHour.workHour}</Table.Cell>
                  <Table.Cell>
                    {jobAdvert.salaryMin}-{jobAdvert.salaryMax} ₺
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                  <Table.Cell>{jobAdvert.description}</Table.Cell>
                  {jobAdvert.active ? (
                    <Table.Cell>
                      <Label color="green" style={{ width: "100%" }}>
                        Aktif
                      </Label>
                    </Table.Cell>
                  ) : (
                    <Table.Cell>
                      <Label
                        color="orange"
                        style={{ width: "95%", paddingLeft: "center" }}
                      >
                        Pasif
                      </Label>
                    </Table.Cell>
                  )}
                  <Table.Cell collapsing>
                    <Button
                      animated="green animated"
                      onClick={() => changeIsActiveByEmployee(jobAdvert.id)}
                    >
                      <Button.Content visible>
                        <Icon name="checkmark" size="small" />
                      </Button.Content>
                      <Button.Content hidden>Onayla</Button.Content>
                    </Button>
                    {/* <Button inverted color="green"><Icon name="checkmark" size="small" />
                    Onayla
                  </Button> */}
                  </Table.Cell>
                  {/* <Table.Row>
                if ({jobAdverts.length==0}) {
              <Message info color="red">Şu anlık onaylanacak bir ilan yok</Message>
             
                 } </Table.Row> */}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <Table>
            <Message info color="red" visible style={{paddingLeft:"33%"}} size="big">
              Üzgünüz, Onaylanacak iş ilanı bulunamadı!
            </Message>
          </Table>
        )}
      </div>
      {/* <Table.Cell collapsing> 
               <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<Button
        color="green"
        icon
        labelPosition="left"
        size="mini"
      >
        <Icon name="checkmark" size="small" />
        Onayla
      </Button>}
    >
      <Header icon>
        <Icon name='question circle outline' />
        Bu iş ilanını aktif etmek istediğinize eminmisiniz?
      </Header>  
       <Modal.Content>
        <p>
          Bu iş ilanını aktif etmek istediğinize eminmisiniz?
        </p>
      </Modal.Content> 
       <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Hayır
        </Button>
        <Button color='green' inverted onClick={() => changeIsActiveByEmployee(jobAdvert.id)}>
          <Icon name='checkmark' /> Evet
        </Button>
      </Modal.Actions>
    </Modal>
    {/* </Table.Cell>  

         <div  class="ui visible message">
  <p >Pasif hiç bir ilan bulunmamaktadır</p>
</div> */}
    </div>
  );
}
