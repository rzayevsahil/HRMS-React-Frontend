import React, { useState, useEffect } from "react";
import { Table, Button, Icon, Divider, Message } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";
import VerificationEmployerService from "../../../services/verificationEmployerService";
export default function AdminAllEmployersVerifyFalse() {
  const [verificationEmployers, setVerificationEmployers] = useState([]);

  let employerService = new EmployerService();
  let verificationEmployerService = new VerificationEmployerService();

  useEffect(() => {
    verificationEmployerService
      .getAllByVerifyFalse()
      .then((result) => setVerificationEmployers(result.data.data));
  }, []);

  let changeIsVerificationEmployerVerified = (id)=>{
    verificationEmployerService.changeVerificationEmployerStatus(id)
  }
  let changeIsVerifiedStatus = (id) => {
    employerService.changeVerifiedStatus(id);
  };

  return (
    <div style={{height: '55vh',marginLeft:"10em"}}>
      <Button fluid color="purple">
        Onay Bekleyen İşverenler
      </Button>
      {verificationEmployers.length>0?(
      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>WebSitesi</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Onay Durumu :</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {verificationEmployers?.map((employer, key) => (
          <Table.Body>
            <Table.Row key={key}>
            <Table.Cell>{key+1}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>
                {employer?.verified
                  ? "Doğrulanmış"
                  : "Doğrulanması gereken güncelleme "}
              </Table.Cell>
              {/* <Table.Cell>
                <Button
                  onClick={()=>handleVerifiedButtonClick(employer)}
                  fluid
                  color="red"
                >
                  Onayla
                </Button>
              </Table.Cell> */}
              <Table.Cell collapsing>
                <Button
                  animated="purple animated"
                  onClick={() => handleVerifiedButtonClick(employer)}
                  fluid
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
              {/* <Table.Cell> <Button onClick={()=>deleteVerificationEmployer(employer.userId)} fluid color="red"> Listeden kaldır</Button> </Table.Cell> */}
            </Table.Row>
          </Table.Body>
        ))}
      </Table>):(
          <Table>
          <Message info color="red" visible style={{paddingLeft:"33%"}} size="big">
            Üzgünüz, Onaylanacak işveren bilgisi bulunamadı!
          </Message>
        </Table>
      )}
    </div>
  );

  function handleVerifiedButtonClick(employer) {
    changeIsVerifiedStatus(employer.id);
    employerService.Update(employer);
    setVerificationEmployers(
      verificationEmployers.filter((emp) => emp.id !== employer.id)
    );
    changeIsVerificationEmployerVerified(employer.id);
  }
}
