import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Image,
  Header,
  Grid,
  Container,
  //Card,
  Icon,
  Button,
  Segment,
  Sticky,
  Menu,
  //Input,
  //Dimmer,
} from "semantic-ui-react";

export default function HomePage() {
  const [active, setActive] = useState(false);

  function handleChange() {
    setActive(!active);
  }
  return (
    <div>
      <div className="homeDiv">
        <div className="homeDiv2">
          <Header style={{ paddingTop: "9em" }}>
            <h1 className="myHeader" style={{ marginTop: "1.5em" }}>
              Güzel bi kariyer için bizimle başlamaya ne dersin?
            </h1>
            <h3 className="onYazi">
            Sistemimize eklenen yeni iş ilanlarını gözden geçir ve hedefine
              doğru bi adım at...
              <br />
              Adım adım yükseklere doğru... <br />
              Güzel bi kariyer sizi bekliyor...
            </h3>
          </Header>
          <Button
            as={NavLink}
            to="/jobAdverts"
            size="big"
            color="pink"
            animated
            style={{ width: "15em", height: "4em", top: "2em" }}
          >
            <Button.Content
              style={{ marginTop: "13px" }}
              visible
              className="startbutton"
            >
              BAŞLA
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Container>
            <Grid style={{ paddingTop: "20em" }}>
              <Grid.Row>
                <Grid.Column width={2}></Grid.Column>
                {/* {jobs.map((job) => (
                <Grid.Column width={4}>
                  <Card raised="true" style={{}}>
                    <Image
                      src="https://im0-tub-com.yandex.net/i?id=4693f7554d3860ea91779cc623c22118&n=13"
                      wrapped
                      ui={false}
                    />
                    <Card.Content >
                      <Card.Header>{job.name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a>
                        <Icon name="user" />
                        İş İlanlarına git
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))} */}
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
      <div style={{ marginTop: "-200px" }}>
        <Segment>
          <Sticky  className="deneme">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image 
                    style={{ marginTop: "3em",marginLeft:"13em" }}
                    src="../../assets/anaSayfa.png"
                    size="large"
                    
                  />
                </Grid.Column>
                <Grid.Column>
                <div style= {{height: "600px"}}>
                  <Menu
                    style={{
                      width: "800px",
                      height: "300px",
                      marginTop: "2em",
                      fontSize:"25px",backgroundColor:"skyblue",
                    }}
                    
                  >
                    <span style={{marginTop:"130px",marginLeft:"7em"}}>
                  Güvenli iş ilanları ve şirketlerle karşınızdayız</span>
                  </Menu></div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
              <Grid.Column>
                <div style= {{height: "600px"}}>
                  <Menu
                    style={{
                      width: "800px",
                      height: "300px",
                      marginTop: "2em",
                      fontSize:"25px",backgroundColor:"skyblue",marginLeft:"2em",marginTop: "-3em"
                    }}
                    
                  >
                    <span style={{marginTop:"130px",marginLeft:"7em"}}>
                  Güzel kariyer seni bekliyor</span>
                  </Menu></div>
                </Grid.Column>
              <Grid.Column>
                  <Image 
                    style={{ marginTop: "-4em",marginLeft:"13em" }}
                    src="../../assets/anaSayfa2.png"
                    size="large"
                    
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Sticky>
        </Segment>
      </div>
    </div>
  );
}
