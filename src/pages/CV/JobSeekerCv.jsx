import React, { useState, useEffect } from "react";
import { Card, Divider, Icon, Image, Label, Message, Rating } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import CoverLetterUpdate from "./CoverLetterForCv/CoverLetterUpdate";
import EducationAdd from "./EducationForCv/EducationAdd";
import EducationDelete from "./EducationForCv/EducationDelete";
import EducationUpdate from "./EducationForCv/EducationUpdate";
import ExperienceUpdate from "./ExperienceForCv/ExperienceUpdate";
import ImageUpdate from "./ImageForCv/ImageUpdate";
import LanguageUpdate from "./LanguageForCv/LanguageUpdate";
import LinkUpdate from "./LinkForCv/LinkUpdate";
import SkillUpdate from "./SkillForCv/SkillUpdate";
import moment from "moment";

export default function JobSeekerCv() {
  moment.locale('tr')
  const [jobSeekerCv, setJobSeekerCvs] = useState(null);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobseekerCVById(1)
      .then((result) => setJobSeekerCvs(result.data.data));
  }, []);
  console.log(jobSeekerCv);

  return (
    <div>
      <div style={{width:"1000px",marginLeft:"7em" }}>
     
        <Card fluid>
        
          <Card.Content>
          <Message style={{marginTop:"-10px"}} color="black">İş arayan Bilgisi</Message>
          {jobSeekerCv?.image?.url?(
            <Image floated="left" size="small" src={jobSeekerCv?.image?.url} />
          ):(
            // <Table>
            <Message info color="black" visible style={{paddingLeft:"0%",width:"140px",height:"140px",marginBottom:"-9em"}} size="big">
              <b style={{marginLeft:"21px",fontSize:"20px"}}>Resim yok</b>
              <Icon name="far fa-image" size="huge" style={{marginLeft:".35em"}}/>
            </Message>
          // </Table>
          )}
            
            <div style={{marginTop:"70px"}}>
              <ImageUpdate image={jobSeekerCv?.image}/>
            </div>
           
            <div style={{ float: "left" }} />
            <p >
              <b style={{marginRight:"7.5%"}}>Adı : {jobSeekerCv?.jobSeeker.firstName}</b>
            </p>
            <p >
              <b style={{marginRight:"6.5%"}}>Soyad : {jobSeekerCv?.jobSeeker.lastName}</b>
            </p>
            <p>
              <b style={{marginRight:"18%"}}>Email : {jobSeekerCv?.jobSeeker.email} </b>{" "}
            </p>
            <p>
              <b style={{marginRight:"18%"}}>Doğum tarihi : {moment(jobSeekerCv?.jobSeeker?.dateOfBirth).format("Do MMMM, YYYY")} </b>{" "}
            </p>
          </Card.Content>
          {/* <div style={{ backgroundColor: "skyblue", height: "30px" }}>
           
            <Label ribbon color="red">Açıklama Mektubu</Label>
          </div> */}
          {jobSeekerCv?.coverletters?.map((coverLetter,key)=>(
            <Card.Content key={key}>
           {coverLetter?.content}
            <CoverLetterUpdate coverLetter={coverLetter} />
          </Card.Content>
          ))}
          
          <Card.Header><Message color="blue">Deneyim Bilgisi</Message></Card.Header>
          <Label color="red" style={{width:"120px",marginLeft:"44%"}}>İşyeri - Deneyim</Label>
          {jobSeekerCv?.experiences.map((experience,key)=>(
             <Card.Content style={{marginTop:"20px"}}>
             <b  style={{ fontSize: "19px" }}>
               {key+1}. <b style={{color:"purple"}}>{experience?.workplaceName.toUpperCase()}</b> -
               <b style={{color:"blue"}}>{experience?.position.toLowerCase()}</b>
             </b><br></br>
             <b>
             Başlangıç-Bitiş tarihleri :{" "}
             {moment(experience.startDate).format("Do MMMM , YYYY")} - {moment(experience.leaveDate).format("Do MMMM , YYYY")}
               
             </b>
             <ExperienceUpdate experience={experience} /><Divider></Divider>
           </Card.Content>
          ))}
         
          
           
          
        
            <Card.Header>  <Message color="blue">Eğitim Bilgisi <EducationAdd jobSeeker={jobSeekerCv?.jobSeeker} /></Message>
            </Card.Header>
             
            
            <Label color="red" style={{width:"100px",marginLeft:"45%"}}>Okul - Bölüm</Label>
          {jobSeekerCv?.educations.map((education,key) => (
          
            <Card.Content>
              
             
              <div >
                {/* <b>Okul Adı : {jobSeekerCv?.educations.map((education)=>education.schoolName).join(",")}</b>  */}
                <b style={{ fontSize: "17px" }}> {key+1}. {education.schoolName}{" - "}
              {education.departmentName}</b><br/>
              <b>Başlangıç - Mezuniyyet yılı :{" "}{moment(education.startYear).format("Do MMMM , YYYY")}{"  "}-{"  "}
              {education.graduationYear?(moment(education.graduationYear).format("Do MMMM , YYYY")):
              (<b style={{color:"purple"}}>Devam Ediyor</b>)}
               </b>
               

                <EducationUpdate
                  education={education}
                  jobSeeker={jobSeekerCv?.jobSeeker}
                />
                <EducationDelete id={education.id} />
              </div><Divider></Divider>
            </Card.Content>
          ))}
         

            <Card.Header><Message color="blue">Yetenek Bilgisi</Message></Card.Header>
            
          {jobSeekerCv?.skills.map((skill,key) => (
            <Card.Content style={{ fontSize: "17px" }}><b>
              {key+1}.{" "}
              {/* {jobSeekerCv?.skills.map((skill) => skill.name).join(",")} */}
              {skill.name}</b>
              <SkillUpdate
                skill={skill}
                jobSeeker={jobSeekerCv?.jobSeeker}
              /><Divider></Divider>
            </Card.Content>
          ))}

<Card.Header><Message color="blue">Bağlantı Adresler</Message></Card.Header>
         
          {jobSeekerCv?.links.map((link,key) => (
            <Card.Content>
              {key+1}. <b style={{color:"purple"}} >{link.name.toUpperCase()} :</b>  {link.url}
              <LinkUpdate link={link} />
              <Divider></Divider>
            </Card.Content>
          ))}

         
          
            
            <Card.Header><Message color="blue">Yabancı Dil Bilgisi</Message></Card.Header>
            <Label color="red" style={{width:"150px",marginLeft:"43%"}}>Dil - Level (5 üzerinden)</Label>
          {jobSeekerCv?.languages.map((language,key) => (
            <Card.Content>
              
              {key+1}. <b style={{color:"purple",fontSize: "17px" }}>{language.language.toUpperCase()}&nbsp;&nbsp;&nbsp;&nbsp;</b>
              <Rating defaultRating={language.level} maxRating={5} disabled />
              <LanguageUpdate language={language} />
              <Divider></Divider>
            </Card.Content>
          ))}
        </Card>
      </div>
      
    </div>
  );
}