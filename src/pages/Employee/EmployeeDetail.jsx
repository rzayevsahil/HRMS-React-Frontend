import React, { useState, useEffect } from "react";
import { Card, Divider, Grid, GridColumn, Image } from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import EmployeeUpdate from "./EmployeeUpdate";

export default function EmployeeDetail() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getById(29).then((result) => setEmployee(result.data.data));
  }, []);

  return (
    <div>
      <div style={{ position: "relative", marginLeft: "200px",marginTop:"10em" }}>
        {/* <Image src={"../../../assets/avataremployee.jpg"} size="medium" /> style={{marginTop:"6px"}}*/}
        <Card style={{fontSize:"20px",width:"1000px",height:"300px"}}>
        <span style={{fontSize:"25px",marginRight:"30em",marginTop:"0.5em",color:"purple"}}>Özel Bilgiler</span><Divider/>
        <div style={{ float: "right",marginRight:"1em",marginTop:"-2.8em" }}>
          <EmployeeUpdate employee={employee} />
        </div>
        <Grid columns={2}>
        <Grid.Row textAlign="center">
          <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>İsim</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employee?.firstName}</Card.Header>
        </Grid.Column>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Soyisim</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employee?.lastName}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{marginTop:"2em"}}>
        <Card.Meta>
        <span className='employeeStyle1'>Email</span>
        </Card.Meta>
        <Card.Header className="employeeStyle">{employee?.email}</Card.Header>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Card>
        
      </div>
    </div>
  );
}
