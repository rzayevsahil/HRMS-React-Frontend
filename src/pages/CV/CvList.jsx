import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Image, Reveal } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService"

export default function CvList() {

    moment.locale('tr')
  const [jobSeekerCvs, setJobSeekerCvs] = useState(null);
  useEffect(() => {
    let jobSeekerCvService = new JobSeekerService();

    jobSeekerCvService.getJobseekerCVById(1).then((result) => setJobSeekerCvs(result.data.data));
    
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow={4}>
          
              <Card style={{width:"50%"}}>
              <Reveal animated='move up'>
    <Reveal.Content visible>
      <p>slşdk</p>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Image src="../../assets/logo.png" wrapped ui={false} />
    </Reveal.Content>
  </Reveal>
              
              <Card.Content>
                <Card.Header>{jobSeekerCvs?.jobSeeker?.firstName} {jobSeekerCvs?.jobSeeker?.lastName}</Card.Header>
                <Card.Meta>
                  <span className="date">{moment(jobSeekerCvs?.jobSeeker?.dateOfBirth).format("Do MMMM , YYYY")}</span>
                </Card.Meta>
                <Card.Description>
                {jobSeekerCvs?.languages?.map((language)=>language.language.toUpperCase()).join(",")}
                </Card.Description>
              </Card.Content>
              {/* <Card.Content extra>
                <a>
                  <Icon name="github" size="large" color="black" />{" "}
                </a>
                <a>
                  <Icon name="linkedin" size="large" color="blue" />
                </a>
              </Card.Content> */}
            </Card>
        
      </Card.Group>
    </div>
  );
}
