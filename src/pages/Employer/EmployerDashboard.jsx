import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Divider,
    Grid,
    Icon,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'

export default function EmployerDashboard() {

    const [visible, setVisible] = useState(true)

    function isVisible() {
        setVisible(!visible)
    }

    return (
        <div>
            <Grid inverted columns={1} className="ui left fixed menu" style={{marginTop:"4.8em",width:"180px"}}>
      <Grid.Column width="1">
        <Icon name="fas fa-bars" size="big" onClick={isVisible} style={{marginBottom:"7em",marginTop:"-1em"}}/>
      </Grid.Column>
{/* {visible?( */}
      <Grid.Column style={{marginTop:"-40.5em"}}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu} 
            animation='overlay'
            icon='labeled'
            inverted
            // onHide={() => setVisible(false)}
            onClick={isVisible}
            vertical
            visible={visible}
            width='thin' 
          >
              <Link to="/jobAdverts">
            <Menu.Item as='a' style={{marginTop:"3em"}}>
              <Icon name='home'/>
              Ana sayfa
            </Menu.Item>
            </Link><Divider/>
            <Link to="/jobadvertsAdd">
            <Menu.Item as='a'>
              <Icon name='plus' />
              İlan ekle
            </Menu.Item>
            </Link><Divider/>
            <Link to="/activeemployer">
            <Menu.Item as='a'>
              <Icon name='settings' />
              Profil
            </Menu.Item>
            </Link>
          </Sidebar>

          {/* <Sidebar.Pusher dimmed={visible} style={{backgorundColor:"black"}}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
      </Grid.Column>
       {/* ):(null)} */}
    </Grid>
        </div>
    )
}
