import React from 'react'
import {
    Container,
    Divider,
    //Dropdown,
    Grid,
    Header,
    Image,
    List,
    //Menu,
    Segment,
  } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom' 

export default function Footer() {
    return (
        <div>
             <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center' style={{height:"300px"}}>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Çalışanlar' />
            <List link inverted>
              <List.Item as='a'>Şirket bilgileri</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='İşverenler' />
            <List link inverted>
              <List.Item as='a'>Şirketler</List.Item>
              <List.Item as='a'>Maaşlar</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='İşarayanlar' />
            <List link inverted>
              <List.Item as={NavLink} to='/jobSeekerCv'>Cv'ler</List.Item>
              <List.Item as='a'>İletişim bilgileri</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='HRMS' />
            <p>
              Güzel bi kariyer sizi bekliyor...
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='small' src='../../assets/logo.png' />
        Copyright ©{"  "}
      <Link color="inherit" href="">
         Human Resources Management System
      </Link><br/>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
        </div>
    )
}
