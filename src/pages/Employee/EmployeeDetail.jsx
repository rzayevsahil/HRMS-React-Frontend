import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
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
      <div style={{ position: "relative", marginLeft: "500px" }}>
        <Image src={"../../../assets/avataremployee.jpg"} size="medium" />
        <Card
          header={employee?.firstName}
          meta={employee?.lastName}
          description={employee?.email}
        />
        <div style={{ float: "left" }}>
          <EmployeeUpdate employee={employee} />
        </div>
      </div>
    </div>
  );
}
