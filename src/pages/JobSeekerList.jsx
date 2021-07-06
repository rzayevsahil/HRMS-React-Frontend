import React, { useEffect, useState } from 'react'
import JobSeekerService from '../services/jobSeekerService'
import {  Table, Header ,Image} from "semantic-ui-react";

export default function JobSeekerList() {

    const [jobSeekers, setjobSeekers] = useState([])
    
    useEffect(()=>{
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getall().then((result)=>setjobSeekers(result.data.data))
    })
    return (
        <div>
         
            <Header as="h2">
             <Image size='large' avatar src="/public/assets/hrmsFrontend.png" style={{ marginRight: '1.5em' }} />
        Job Seekers
        <Header.Subheader>
          Aşağıda sistemimizde olan iş arayanları görmektesiniz
        </Header.Subheader>
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>SoyAdı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>DoğumGünü</Table.HeaderCell> 

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker,key) => (
            <Table.Row key={key}>
              <Table.Cell>{key+1}</Table.Cell>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
         
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
        </div>
    )
}
