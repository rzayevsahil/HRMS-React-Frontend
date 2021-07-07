import React, { useEffect, useState } from "react";
import JobPositionService from "../../services/jobPositionService";
import UserService from "../../services/userService";
import { NavLink } from "react-router-dom";
import {
  Divider,
  Menu,
  Card,
  Button,
  Transition,
  Label,
  Icon
} from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import JobAdvertService from "../../services/jobAdvertService";
import EmployeeService from "../../services/employeeService";
import EmployerService from "../../services/employerService";
import 'react-calendar/dist/Calendar.css';
import './Static.css'
import Takvim from "./Calendar";

export default function Static() {
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
      <div style={{marginLeft:"60em",marginTop:"8em"}}>
      {visiblate?(
      <Takvim visiblate={visiblate}/>):null}
        </div>
        {/* {visiblate?(
          <div >
      <div style={{marginLeft:"80%",width:"300px",height:"270px",paddingLeft:"40px",paddingTop:"10px"}}>
      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
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
    )} */}
       

      <Menu 
        className="ui left fixed vertical menu"//vertical kaldırınca efsoo oluyor
        style={{ marginTop: "66px", backgroundColor: "black",height:"1500em",
        width:"350px",
         paddingLeft:"30px" 
      }}
      >
        <Button
          content={isVisiblate ? "Menü" : "Göster"}
          color="purple"
          onClick={toggleVisiblate}
        ></Button>
        <Divider hidden />
        {isVisiblate ? (
          <Transition visible={isVisiblate} animation="scale" duration={2000}>

            <Card style={{backgroundColor:"black"}} className="menyu">
              <Menu.Item 
                as={NavLink}
                to="/"
                name="JobAdverts"
                active={active === "JobAdverts"} style={{backgroundColor:"grey"}}
                onClick={handleItemClick} style={{ fontSize: "22px", color:"grey" }}
              >
                Admin Panel
              </Menu.Item>
              <Divider/>
              {/* <Menu.Item>
                <Input placeholder="Search..." />
              </Menu.Item> */}

              <Menu.Item style={{ fontSize: "17px",backgroundColor:"black",color:"white" }}>
                {/* <Menu.Header> */}
               
                <b><Icon  style={{marginLeft:"50px"}}  name="users" left/> Kullanıcılar<Label style={{marginLeft:"50px"}} color='purple'>{users.length}</Label></b>
                  {/* </Menu.Header> */}
                <Menu.Menu style={{backgroundColor:"black"}}>
                <Menu.Item
                name="messages"
                active={active === "messages"}
                onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
              >
                <span><i style={{marginLeft:"30px"}} class="fas fa-user-tie"></i> Hrms personeli<Label style={{marginLeft:"50px"}} color='purple'>{employees.length}</Label></span>
              </Menu.Item>
                <Menu.Item
                    name="add"
                    active={active === "add"}
                    onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
                  >
                    <span><Icon style={{marginLeft:"50px"}} name="fas fa-id-badge" left/>İş arayanlar<Label style={{marginLeft:"50px"}} color='purple'>{jobSeekers.length}</Label></span>
                  </Menu.Item>
              <Menu.Item
                name="messages"
                active={active === "messages"}
                onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
              >
                <span><Icon style={{marginLeft:"60px"}} name="fas fa-male" left/>İşverenler<Label style={{marginLeft:"50px"}} color='purple'>{employers.length}</Label></span>
              </Menu.Item><Divider/>
                  <Menu.Item
                    name="search"
                    active={active === "search"}
                    onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
                  >
                  <b><i style={{marginLeft:"30px"}} class="fas fa-dice-d6"></i> İş pozisyonları<Label style={{marginLeft:"50px"}} color='purple'>{jobPositions.length}</Label></b>
                  </Menu.Item><Divider/>
                  <Menu.Item
                    name="about"
                    active={active === "about"}
                    onClick={handleItemClick} style={{ fontSize: "20px",color:"white" }}
                  >
                    <b><Icon style={{marginLeft:"38px"}} name="clipboard list" left/>İş ilanları<Label style={{marginLeft:"55px"}} color='purple'>{jobAdverts.length}</Label></b>
                  </Menu.Item>
                  <Menu.Item
                    name="add"
                    active={active === "add"}
                    onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
                  >
                    <span><Icon style={{marginLeft:"30px"}} name="tasks" left/>Aktif iş ilanları<Label style={{marginLeft:"40px"}} color='purple'>{jobAdvertsActive.length}</Label></span>
                  </Menu.Item>
                  <Menu.Item
                    onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
                  >
                    <span><Icon style={{marginLeft:"30px"}} name="fas fa-lock" left/>Pasif iş ilanları<Label style={{marginLeft:"50px"}} color='purple'>{jobAdverts.length-(jobAdvertsJustOpen.length+jobAdvertsActive.length)}</Label></span>
                  </Menu.Item>
                  <Menu.Item 
                   as={NavLink} to="/adminJobAdvertList"
                   active={active === "about"}
                    onClick={handleItemClick} style={{ fontSize: "17px",color:"white" }}
                  >
                    <span><Icon style={{marginLeft:"0px"}} name="fas fa-question-circle" left/>Onaylanmayan iş ilanları<Label style={{marginLeft:"5px"}} color='purple'>{jobAdvertsJustOpen.length}</Label></span>
                  </Menu.Item><Divider/>
                  <Menu.Item
                    name="about"
                    active={active === "about"}
                    as={NavLink} to="/adminallemployersverifyfalse" style={{ fontSize: "17px",color:"white" }}
                  >
                    <b><Icon style={{marginLeft:"-25px"}} name="fas fa-question" left/>Onaylanmayan işverenler<Label style={{marginLeft:"5px"}} color='purple'>{employersVerify.length}</Label></b>
                  </Menu.Item>
                  {visiblate?(
                  <Menu.Item
                    onClick={visiblates} style={{ fontSize: "19px",color:"blue" }}
                  >
                    <span><Icon style={{marginLeft:"-40px"}} name="fas fa-calendar-alt" left/>Takvim</span>
                  </Menu.Item>):(
                  <Menu.Item
                    onClick={visiblates} style={{ fontSize: "17px",color:"grey" }}
                  >
                    <span><Icon style={{marginLeft:"-40px"}} name="fas fa-calendar-alt" left/>Takvim</span>
                  </Menu.Item>)}
                </Menu.Menu>
              </Menu.Item>


            </Card>
          </Transition>
        ) : null}
      </Menu>
    </div>
  );
}
