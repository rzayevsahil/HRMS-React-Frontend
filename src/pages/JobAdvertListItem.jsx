import React, { useState } from 'react'
import {
    Icon,
    Button,
    Card,
    Image,
    Label,
    //Table,
    //Pagination,
    //Message,
    //Rating,
    //Grid,
  } from "semantic-ui-react";
  import { Link } from "react-router-dom";
  import moment from "moment";
import "moment/locale/tr";
import FavoriteService from "../services/favoritesService";

export default function JobAdvertListItem({jobAdvert,jobSeeker,isFavorite}) {
    moment.locale("tr");

    const [isFavorites, setIsFavorites] = useState(isFavorite)

    function handleFavoriteClick(){
        
        let favoriteService=new FavoriteService()
        favoriteService.delete()
        if (isFavorites) {
            favoriteService.delete(jobSeeker.id,jobAdvert.id)
        }else{
            favoriteService.add({jobSeeker,jobAdvert})
        }
        setIsFavorites(!isFavorites) 

    }






   

    return (
        <div>
            <Card style={{ marginTop: "25px" }} fluid color="violet">
          <Card.Content>
            {moment(jobAdvert.publishedAt).locale("tr").fromNow()[0] <= "2" &&
            moment(jobAdvert.publishedAt).locale("tr").fromNow()[1] === " " &&
            moment(jobAdvert.publishedAt).locale("tr").fromNow()[2] <= " " ||
            moment(jobAdvert.publishedAt).locale("tr").fromNow()[0] === "b" ?  (
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
              {/* <Button color="blue"><Rating icon="heart" style={{color:"red"}} defaultRating={0} maxRating={1}></Rating></Button> */}

             {/* {favorites.map((favorite)=>(
               if (jobAdvert.id===favorite.jobAdvert.id) {
                return <Rating icon='heart' style={{color:"red"}} defaultRating={1} maxRating={1}/>
               }else{
                 return <Rating icon='heart' style={{color:"red"}} defaultRating={0} maxRating={1}/>
               }
             ))}  */}
      
      {/* ************************************************************************************************************** */}
       
        {/* <i className="far fa-2x fa-bookmark"></i> <Icon name="fas fa-bookmark" size="big" style={{marginTop:"-12px"}}/> */}
                {isFavorite?
                (<Icon onClick={handleFavoriteClick} name="fas fa-bookmark" size="big" style={{marginTop:"-12px"}}/>):
                (<i onClick={handleFavoriteClick} className="far fa-2x fa-bookmark"></i>)}
                 
             
      {/* ************************************************************************************************************** */}

                <Button type="button"
                onClick={()=>{
                    let values={
                      //ilk kısımdaki isimlendirme swagger tarafıyla aynı olmalı
                      jobSeeker:jobSeeker,
                      jobAdvert:jobAdvert
                    }
                    console.log(jobAdvert,jobSeeker);
                      let favoritesService= new FavoriteService()
                      favoritesService.add(values)//.then((result)=>console.log(result.data.data))
                }}
                ></Button>


            </Image>
            <Image floated="left" size="small" src="../assets/logo.png" />
            <Card.Header style={{ marginLeft: "40%" }}>
              {jobAdvert.jobPosition.jobPosition}
            </Card.Header>
            <Card.Meta style={{ marginLeft: "43%" }}>
              {jobAdvert.employer.companyName} company
            </Card.Meta>
            <Card.Meta style={{ marginLeft: "44%", marginTop: "1%" }}>
              <Icon name="map marker alternate" />
              {jobAdvert.city.name}
            </Card.Meta>

            <Label
              style={{
                marginLeft: "30%",
                color: "purple",
                marginTop: "3px",
              }}
            >
              <Card.Description>{jobAdvert.workHour.workHour}</Card.Description>
            </Label>
            {moment().isBefore(moment(jobAdvert.deadline)) ?(
            <Card.Description style={{ marginLeft: "39%" }}>
              <strong>Son Başvuru Tarihi - {jobAdvert.deadline}<br/>
              <b style={{marginLeft:"55px",color:"green"}}>({moment(jobAdvert.deadline).endOf(jobAdvert.publishedAt).from(jobAdvert.publishedAt)} bitiyor)</b></strong>



              <span style={{ marginLeft: "59%",color:"purple" }}>
                <b>{moment(jobAdvert.publishedAt).locale("tr").fromNow()}</b>
              </span>

            </Card.Description>
             ):( <Card.Description style={{ marginLeft: "39%" }}>
                <strong style={{color:"red"}}>Son Başvuru Tarihi Bitmiş</strong>
              </Card.Description>) }
            {/* <Rating icon="star" defaultRating={0} maxRating={5}>
          Rating
        </Rating> */}
          </Card.Content>
          {moment().isBefore(moment(jobAdvert.deadline)) ?(
          <Card.Content extra>

            <Link to={`/jobAdverts/${jobAdvert.id}`}>
              <Button basic color="green" style={{ width: "49.4%" }}>
                Başvur 
                
              </Button>
            </Link>
            <Link to={`/jobAdverts/${jobAdvert.id}`}>
              <Button basic color="red" style={{ width: "49.4%" }}>
                Detaylar
              </Button>
            </Link>
          </Card.Content>):(
            <Card.Content extra>
            <Link to={`/jobAdverts/${jobAdvert.id}`}>
              <Button basic color="red" style={{ width: "100%" }}>
                Detaylar
              </Button>
            </Link>
          </Card.Content>
          )}
        </Card>
        </div>
    )
}
