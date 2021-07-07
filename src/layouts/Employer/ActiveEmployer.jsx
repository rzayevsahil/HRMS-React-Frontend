import React, { useEffect, useState } from "react";
import EmployerService from "../../services/employerService";
import VerificationEmployerService from "../../services/verificationEmployerService";
import { Card, Icon, Button, Grid,Message, Table, Divider } from "semantic-ui-react";
import ActiveEmployerUpdate from "./ActiveEmployerUpdate";

export default function ActiveEmployer() {
  const [employer, setEmployer] = useState(null);
  const [verificationEmployer, setVerificationEmployer] = useState(null);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(27).then((result) => setEmployer(result.data.data));

    let verificationEmployerService = new VerificationEmployerService();
    verificationEmployerService
      .getById(27)
      .then((result) => setVerificationEmployer(result.data.data));
  }, []);
  console.log(employer);
  console.log(verificationEmployer);

  return (
    <div>
      <div style={{ position: "relative", marginLeft: "200px",marginTop:"10em",height:"75vh" }}>


{!employer?.verified && (
     <Table>
  <Message info color="orange" visible className="activeemployer" size="big">
    Bilgileriniz Hrms personeli tarafından onaylandıktan sonra güncellenecektir
  </Message>
</Table>)}
{!employer?.verified && (
  <Card style={{fontSize:"20px",width:"1000px",height:"300px"}}>
   
        <span style={{fontSize:"25px",marginRight:"30em",marginTop:"0.5em",color:"purple"}}>Özel Bilgiler</span><Divider/>
        <Grid columns={2}>
        <Grid.Row textAlign="center">
          <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Şirket ismi</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employer?.companyName}</Card.Header>
        </Grid.Column>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Site ismi(domain)</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employer?.website}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Email</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employer?.email}</Card.Header>
        </Grid.Column>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Telefon numarası</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employer?.phoneNumber}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Card>
)}



 {employer?.verified && (
  <Card style={{fontSize:"20px",width:"1000px",height:"300px"}}>
        <span style={{fontSize:"25px",marginRight:"30em",marginTop:"0.5em",color:"purple"}}>Özel Bilgiler</span><Divider/>
        <div style={{ float: "right",marginRight:"1em",marginTop:"-2.8em" }}>
        <ActiveEmployerUpdate employer={verificationEmployer}></ActiveEmployerUpdate>
        </div>
        <Grid columns={2}>
        <Grid.Row textAlign="center">
          <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Şirket ismi</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{verificationEmployer?.companyName}</Card.Header>
        </Grid.Column>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Site ismi(domain)</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{verificationEmployer?.website}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Email</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{verificationEmployer?.email}</Card.Header>
        </Grid.Column>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Telefon numarası</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{verificationEmployer?.phoneNumber}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Card>)}

</div>
    </div>
  );
}
