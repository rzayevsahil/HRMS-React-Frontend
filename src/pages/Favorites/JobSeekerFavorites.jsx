import React, { useEffect, useState } from 'react'
import FavoriteService from '../../services/favoritesService'
import {
    Icon,
    Button,
    Card,
    Image,
    Label,
    Table,
    Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/tr";
import FavoritesAddDelete from './FavoritesAddDelete';

export default function JobSeekerFavorites() {
    moment.locale("tr");

    const [favorites, setFavorites] = useState(null)

    useEffect(()=>{
        let favoriteService= new FavoriteService()
        favoriteService.getByJobSeekerId(1).then((result)=>setFavorites(result.data.data))
        
    },[])
    return (
        <div>
            <Table>
            <Message info color="white" visible style={{paddingLeft:"42.5%",backgroundColor:"purple",color:"white"}} size="big">
              Favoriler listesi
            </Message>
          </Table>
            {favorites?.map((favorite,key)=>(
                <Card style={{ marginTop: "25px" }} fluid color="violet" key={key}>
                <Card.Content>
                {(moment(favorite?.jobAdvert.publishedAt).locale("tr").fromNow()[0] <= "2" &&
                    moment(favorite?.jobAdvert.publishedAt).locale("tr").fromNow()[1] === " " &&
                    moment(favorite?.jobAdvert.publishedAt).locale("tr").fromNow()[2] <= " ") ||
                  moment(favorite?.jobAdvert.publishedAt).locale("tr").fromNow()[0] === "b" ? (
                    <Label style={{ marginRight: "85%" }} as="a" color="red" ribbon>
                      Yeni
                    </Label>
                  ) : null}
      
                  <Image
                    floated="right"
                    // fluid
                    // label={{ as: 'a', corner: 'right', icon: 'heart', color:"red" }} size="small" style={{marginBottom:"2%"}}
                    // src="../assets/logo.png"
                  >
      
      
                    <FavoritesAddDelete jobAdvert={favorite.jobAdvert} jobSeeker={favorite.jobSeeker}/>
                    
      
                    </Image>
                  <Image floated="left" size="small" src="../assets/logo.png" />
                  <Card.Header>
                      <span style={{ marginLeft: "-16%" }}>{favorite?.jobAdvert?.jobPosition.jobPosition}</span>
                  </Card.Header>
                  <Card.Meta>
                    <span style={{ marginLeft: "-16%" }}>{favorite?.jobAdvert?.employer.companyName} company</span>
                  </Card.Meta>
                  <Card.Meta style={{marginTop: "1%" }}>
                  <span style={{ marginLeft: "-19%" }}><Icon name="map marker alternate" />
                    {favorite?.jobAdvert?.city.name}</span>
                  </Card.Meta>
      
                  <Label
                    style={{
                      marginLeft: "-17%",
                      color: "purple",
                      marginTop: "3px",
                    }}
                  >
                    <Card.Description>{favorite?.jobAdvert?.workHour.workHour}</Card.Description>
                  </Label>
                  {moment().isBefore(moment(favorite?.jobAdvert?.deadline)) ? (
                    <Card.Description>
                      <strong>
                        Son Başvuru Tarihi - {favorite?.jobAdvert?.deadline}
                        <br />
                        <b style={{ marginLeft: "24em", color: "green" }}>
                          (
                          {moment(favorite?.jobAdvert?.deadline)
                            .endOf(favorite?.jobAdvert?.publishedAt)
                            .from(favorite?.jobAdvert?.publishedAt)}{" "}
                          bitiyor)
                        </b>
                      </strong>
      
                      <span style={{ marginLeft: "27%", color: "purple",marginTop:"5em" }}>
                        <b>{moment(favorite?.jobAdvert?.publishedAt).locale("tr").fromNow()}</b>
                      </span>
                    </Card.Description>
                  ) : (
                    <Card.Description style={{ marginLeft: "39%" }}>
                      <strong style={{ color: "red" }}>
                        Son Başvuru Tarihi Bitmiş
                      </strong>
                    </Card.Description>
                  )}
                  {/* <Rating icon="star" defaultRating={0} maxRating={5}>
                Rating
              </Rating> */}
                </Card.Content>
                {moment().isBefore(moment(favorite?.jobAdvert?.deadline)) ? (
                  <Card.Content extra>
                    <Link to={`/jobAdverts/${favorite?.jobAdvert.id}`}>
                      <Button basic color="green" style={{ width: "49.4%" }}>
                        Başvur
                      </Button>
                    </Link>
                    <Link to={`/jobAdverts/${favorite?.jobAdvert?.id}`}>
                      <Button basic color="red" style={{ width: "49.4%" }}>
                        Detaylar
                      </Button>
                    </Link>
                  </Card.Content>
                ) : (
                  <Card.Content extra>
                    <Link to={`/jobAdverts/${favorite?.jobAdvert?.id}`}>
                      <Button basic color="red" style={{ width: "100%" }}>
                        Detaylar
                      </Button>
                    </Link>
                  </Card.Content>
                )}
              </Card>
            ))}
            
        </div>
    )
}
