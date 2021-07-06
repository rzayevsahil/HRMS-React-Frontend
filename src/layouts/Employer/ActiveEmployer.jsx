import React, { useEffect, useState } from "react";
import EmployerService from "../../services/employerService";
import VerificationEmployerService from "../../services/verificationEmployerService";
import { Card, Icon, Button, Grid,Message, Table } from "semantic-ui-react";
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
    <div style={{height:"75vh", marginTop:"8em"}}>
      {/* {employer?.verified===false? (
        <Table style={{marginBottom:"3em"}}>
        <Message info color="orange" visible style={{paddingLeft:"33%"}} size="big">
          Bilgileriniz Hrms personeli tarafından onaylandıktan sonra güncellenecektir
        </Message>
      </Table>
      ):null} */}
      
      {!employer?.verified && (
        

        <Grid>
          <Table style={{marginBottom:"3em"}}>
        <Message info color="orange" visible style={{paddingLeft:"33%"}} size="big">
          Bilgileriniz Hrms personeli tarafından onaylandıktan sonra güncellenecektir
        </Message>
      </Table>
          <Card fluid>
            <Card.Content>
              <Card.Header>{employer?.companyName}</Card.Header>
              <Card.Meta>
                <span className="date">{employer?.email}</span>
              </Card.Meta>
              <Card.Description>{employer?.website}</Card.Description>
              <Card.Description>{employer?.phoneNumber}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
              {/* <ActiveEmployerUpdate employer={employer}></ActiveEmployerUpdate> */}
            </Card.Content>
            <Button></Button>
          </Card>
        </Grid>
      )}
      {employer?.verified && (
        <Grid>
          <Card fluid>
            <Card.Content>
              <Card.Header>{verificationEmployer?.companyName}</Card.Header>
              <Card.Meta>
                <span className="date">{verificationEmployer?.email}</span>
              </Card.Meta>
              <Card.Description>
                {verificationEmployer?.website}
              </Card.Description>
              <Card.Description>
                {verificationEmployer?.phoneNumber}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
              <ActiveEmployerUpdate employer={verificationEmployer}></ActiveEmployerUpdate>
            </Card.Content>
            <Button></Button>
          </Card>
        </Grid>
      )}
    </div>
  );
}
