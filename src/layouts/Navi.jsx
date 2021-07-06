import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Image,
  Label,
  Menu,
} from "semantic-ui-react";
import FavoriteService from "../services/favoritesService";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  const [favorites, setFavorites] = useState(null)

  useEffect(()=>{
    let favoriteService=new FavoriteService()
    favoriteService.getByJobSeekerId(1).then((result)=>setFavorites(result.data.data))
  })

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item>
            <Image size="tiny"  src="../../assets/logo.png" />
          </Menu.Item>
          <Link to="/">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "125%",
                marginTop: "12px",
                marginLeft: "5px"
              }}
            >
              <Button.Content visible>
                <Icon name="home" size="big" />
              </Button.Content>
              <Button.Content hidden>Home</Button.Content>
            </Button>
          </Link>
          <Link to="/jobAdverts">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "100%",
                marginTop: "12px",
                marginLeft: "30px"
              }}
            >
              <Button.Content visible>
              <Icon name="clipboard list" size="big" />
              </Button.Content>
              <Button.Content hidden>İlanlar</Button.Content>
            </Button>
          </Link>
          <Link to="/employerJobAdvertList">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "100%",
                marginTop: "12px",
                marginLeft: "35px"
              }}
            >
              <Button.Content visible>
              <Icon name="user" size="big" />
              </Button.Content>
              <Button.Content hidden>Employer Panel</Button.Content>
            </Button>
          </Link>

          <Link to="/adminJobAdvertList">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "100%",
                marginTop: "12px",
                marginLeft: "40px"
              }}
            >
              <Button.Content visible>
              <Icon name="cog" size="big" />
              </Button.Content>
              <Button.Content hidden>Employee Panel</Button.Content>
            </Button>
          </Link>

          <Link to="/jobadvertsAdd">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "100%",
                marginTop: "12px",
                marginLeft: "45px"
              }}
            >
              <Button.Content visible>
              <Icon name="handshake" size="big" />
              </Button.Content>
              <Button.Content hidden>Job Advert Add</Button.Content>
            </Button>
          </Link>


          <Link to="/jobSeekerCv">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "100%",
                marginTop: "12px",
                marginLeft: "50px"
              }}
            >
              <Button.Content visible>
              <Icon name="list alternate" size="big" />
              </Button.Content>
              <Button.Content hidden>Cv</Button.Content>
            </Button>
          </Link>
          <Link to="/static">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "115%",
                marginTop: "12px",
                marginLeft: "55px"
              }}
            >
              <Button.Content visible>
              <i class="fas fa-2x fa-user-tie"></i>
              </Button.Content>
              <Button.Content hidden>Admin Dashboard</Button.Content>
            </Button>
          </Link>
          {favorites?.length>0?(
          <Link to="/jobSeekerFavorites">
            <Button
              tabIndex={0}
              animated=" black fade"
              style={{
                color: "white",
                height: "45px",
                width: "80%",
                marginTop: "12px",
                marginLeft: "80px"
              }}
            >
              <Button.Content visible>
              <Label color='red' floating>
                {favorites.length}
              </Label>
              {/* blue    bu da efsoooo oluyor */}
              <Icon name="heart" size="big" color="purple" /> 
              
              </Button.Content>
              <Button.Content hidden>Favorites</Button.Content>
            </Button>
          </Link>
          ):(null)}
          </Container>
 {/* <i class="fas fa-user-tie"></i> */}
          <Menu.Menu position="right" style={{marginRight:"3%"}}>
            {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Dropdown.Item></Dropdown.Item>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        {/* </Container> */}
      </Menu>
      {/* <div class="ui inverted vertical segment landpage-image">
    <div class="ui page grid">
        <div class="column">
            <h1 class="ui title-header"></h1>
            <div class="centered grid slogan">
                <div class="column">
                    <p>Some content over here</p>
                </div>
            </div>
        </div>
    </div>
</div> */}{" "}
      {/*backgorunImage*/}
    </div>
  );
}
