import React,{useState,useEffect} from 'react'
import { Table, Label , Icon, Card} from "semantic-ui-react";
import JobAdvertService from '../../services/jobAdvertService';
export default function EmployerJobAdvertList() {
    
    const [jobAdverts, setJobAdverts] = useState([])
     

useEffect (()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getAllByEmployerId(17)// fake id verildi yine çünkü authorization yok
    .then((result)=>setJobAdverts(result.data.data))
},[])

let changeIsOpenByEmployer = (id)=> {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeOpenStatus(id);
    window.location.reload();
}

    
    return (
        <div>
            <div className="my-div"
        style={{ marginLeft: "2rem",height: '100vh',marginBottom:"300vh"}}>  
            <Card fluid color="violet" header="İŞ İLANLARIM" /> 
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">No</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İş Tipi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            
            <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
            <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3">İlanın Durumunu değiştir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.Cell>{key+1}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.jobPosition}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHour}</Table.Cell>
              <Table.Cell>
                {jobAdvert.salaryMin} ₺ - {jobAdvert.salaryMax} ₺
              </Table.Cell>
              <Table.Cell>{jobAdvert.deadline}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              {jobAdvert.open ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    İş ilanı Açık
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="red" style={{ width: "100%" }}>
                    İş ilanı Kapalı
                  </Label>
                </Table.Cell>
              )}
              {jobAdvert.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Onaylı
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}
              <Table.Cell collapsing>
                {/* <Button
                  onClick={() => changeIsOpenByEmployer(jobAdvert.id)}
                  icon
                  labelPosition="left"
                  size="tiny" className="ui inverted green button"
                >
                  <Icon name="checkmark" size="small" />
                  Değiştir
                </Button> */}
                <div class="ui green animated button" onClick={() => changeIsOpenByEmployer(jobAdvert.id)}>
              <div class="visible content"> <Icon name="checkmark" size="small" /> </div>
              <div class="hidden content">
                  Değiştir
              </div>
            </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
        </div>
    )
}