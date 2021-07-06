import React, { useEffect, useState } from 'react'
import JobPositionService from '../services/jobPositionService'
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobPositionList() {

    const [jobPositions, setjobPositions] = useState([])

    useEffect(()=>{
        let jobPositionService = new JobPositionService()
        jobPositionService.getall().then((result)=>setjobPositions(result.data.data))
    })

    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {jobPositions.map((jobPosition,key)=>(
           <Table.Row key={key}>
           <Table.Cell>{key+1}</Table.Cell>
            <Table.Cell>{jobPosition.jobPosition}</Table.Cell>
          </Table.Row>
        ))}
          
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}
