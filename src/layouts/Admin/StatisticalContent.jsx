import React, { useEffect, useState } from "react";
import JobPositionService from "../../services/jobPositionService";
import UserService from "../../services/userService";
import {
  Progress,
  Segment,
  Message
} from "semantic-ui-react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import JobSeekerService from "../../services/jobSeekerService";
import JobAdvertService from "../../services/jobAdvertService";
import EmployeeService from "../../services/employeeService";
import EmployerService from "../../services/employerService";

export default function StatisticalContent() {

    const [users, setUsers] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [jobSeekers, setJobSeekers] = useState([]);
  const [jobAdverts, setJobAdverts] = useState([]);
  const [jobAdvertsActive, setJobAdvertsActive] = useState([]);
  const [jobAdvertsJustOpen, setJobAdvertsJustOpen] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [employersVerify, setEmployersVerify] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getAll().then((result) => setUsers(result.data.data));

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getall()
      .then((result) => setJobPositions(result.data.data));

      let jobSeekerService=new JobSeekerService()
      jobSeekerService.getall().then((result)=>setJobSeekers(result.data.data))

      let jobAdvertService=new JobAdvertService()
      jobAdvertService.getall().then((result)=>setJobAdverts(result.data.data))
      jobAdvertService.getAllActiveTrueAndOpenTrueJobAdverts().then((result)=>setJobAdvertsActive(result.data.data))
      jobAdvertService.getAllActiveFalseAndOpenTrueJobAdverts().then((result)=>setJobAdvertsJustOpen(result.data.data))

      let employeeService=new EmployeeService()
      employeeService.getEmployers().then((result)=>setEmployees(result.data.data))

      let employerService=new EmployerService()
      employerService.getAll().then((result)=>setEmployers(result.data.data))
      employerService.getAllByVerify().then((result)=>setEmployersVerify(result.data.data))
  });

    const [isVisiblate, setIsVisiblate] = useState(false);
    const [visiblate, setVisiblate] = useState(false);
  
    function toggleVisiblate() {
      setIsVisiblate(!isVisiblate);
    }
    function visiblates() {
      setVisiblate(!visiblate);
    }
  
    const [active, setActive] = useState("");
  
    const handleItemClick = (e, { active }) => {
      setActive(active.active);
    };
  
    const [value, onChange] = useState(new Date());
    return (
        <div>
             {visiblate?(
          <div >
     
    <Segment inverted style={{marginLeft:"20em",marginTop:"-18.5em",width:"600px"}}>
       
    <Message style={{backgroundColor:"purple",color:"white"}}>Kullanıcılar</Message>
   <Progress
     percent={Math.round(jobSeekers.length/users.length*100)}
     inverted
     color="orange"
     progress
     active
     content="İş arayan"
   />
   <Progress
     percent={Math.round(employers.length/users.length*100)}
     inverted
     color="green"
     progress
     active
     content=" İşveren"
   />

 </Segment> <br/>

 <Segment inverted inverted style={{marginLeft:"20em",width:"600px"}}>
 <Message style={{backgroundColor:"purple",color:"white"}}>İlanlar</Message>
 <Progress
     percent={Math.round(jobAdvertsJustOpen.length/jobAdverts.length*100)}
     inverted
     color="orange"
     progress
     active
     content=" Onaylanmayan iş ilanı"
   />
 <Progress
     percent={Math.round((100-(jobAdvertsActive.length+jobAdvertsJustOpen.length)/jobAdverts.length*100))}
     inverted
     color="red"
     progress
     active
     content=" Pasif iş ilanı"
   />
   <Progress
     percent={ Math.round(jobAdvertsActive.length/jobAdverts.length*100)}
     inverted
     color="green"
     progress
     active
     content=" Aktif iş ilanı"
   />
</Segment></div>
    ):(
      <div>
      <div style={{marginLeft:"150%",width:"300px",height:"270px",paddingLeft:"40px",paddingTop:"10px"}}>
    <Calendar
      onChange={onChange}
      value={value}
    /></div>
  
  <Segment inverted style={{marginLeft:"20em",marginTop:"-18.5em",width:"600px"}}>
     
  <Message style={{backgroundColor:"purple",color:"white"}}>Kullanıcılar</Message>
 <Progress
   percent={Math.round(jobSeekers.length/users.length*100)}
   inverted
   color="orange"
   progress
   active
   content="İş arayan"
 />
 <Progress
   percent={Math.round(employers.length/users.length*100)}
   inverted
   color="green"
   progress
   active
   content=" İşveren"
 />

</Segment>
    <Segment inverted inverted style={{marginLeft:"20em",width:"600px",marginTop:"47px"}}>
    <Message style={{backgroundColor:"purple",color:"white"}}>İlanlar</Message>
    <Progress
        percent={Math.round(jobAdvertsJustOpen.length/jobAdverts.length*100)}
        inverted
        color="orange"
        progress
        active
        content=" Onaylanmayan iş ilanı"
      />
    <Progress
        percent={Math.round((100-(jobAdvertsActive.length+jobAdvertsJustOpen.length)/jobAdverts.length*100))}
        inverted
        color="red"
        progress
        active
        content=" Pasif iş ilanı"
      />
      <Progress
        percent={ Math.round(jobAdvertsActive.length/jobAdverts.length*100)}
        inverted
        color="green"
        progress
        active
        content=" Aktif iş ilanı"
      />
</Segment></div>
    )}
        </div>
    )
}
