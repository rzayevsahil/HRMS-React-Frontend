import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
import {
  Icon,
  Button,
  Card,
  Image,
  Label,
  Table,
  Pagination,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CityFilter from "../layouts/Filters/CityFilter";
import WorkTypeFilter from "../layouts/Filters/WorkTypeFilter";
import moment from "moment";
import "moment/locale/tr";
import JobSeekerService from "../services/jobSeekerService";
import FavoritesAddDelete from "./Favorites/FavoritesAddDelete";

export default function JobAdvertList() {
  moment.locale("tr");

  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [jobAdverts, setjobAdverts] = useState(null);
  const [activePage, setActivePage] = useState(1);
  //**************************************************************************************************** */
  const [jobSeeker, setJobSeeker] = useState(null); // favorite add
  //**************************************************************************************************** */

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllPagination(activePage)
      .then((result) => setjobAdverts(result.data.data));

    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getById(1)
      .then((result) => setJobSeeker(result.data.data));

  }, [activePage]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    //console.log(pageInfo.activePage)
    //console.log(pageInfo)
  };



  useEffect(() => {
    let filteredJobByJobAdverts;
    if (selectedCity && selectedWorkType) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) =>
          jobAdvert.city.id === selectedCity &&
          jobAdvert.workType.id === selectedWorkType
      );
    } else if (selectedCity) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) => jobAdvert.city.id === selectedCity
      );
    } else if (selectedWorkType) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) => jobAdvert.workType.id === selectedWorkType
      );
    } else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [selectedCity, selectedWorkType]);

//   function change(id) {
//     {favorites?.map((favorite)=>{
     
//         if (id===favorite.jobAdvert.id) {
//          return <Rating icon='heart' style={{color:"red"}} defaultRating={1} maxRating={1}/>
//         }else{
//           return <Rating icon='heart' style={{color:"red"}} defaultRating={0} maxRating={1}/>
//         }
//       })

// }}

  return (
    <div className="ui four link cards">
      {/* <Input
              action={{ color: "purple", content: "Ara"}}
              icon="search"
              iconPosition="left"
              placeholder="Şehire göre ara" style={{marginBottom:"20px", marginLeft:"10%",marginTop:"15px"}}
            />
            <Input
              action={{ color: "violet", content: "Ara"}}
              icon="search"
              iconPosition="left"
              placeholder="Çalışma tipine göre ara" style={{marginBottom:"20px", marginLeft:"10%",marginTop:"15px"}}
            />  */}
      {/* <Route path="/jobAdverts" component={CityFilter}></Route>
      <Route path="/jobAdverts" component={WorkTypeFilter}></Route>
      <Route exact path="/" component={CityFilter}></Route>
      <Route exact path="/" component={WorkTypeFilter}></Route> */}
      {/* <Grid><Grid.Row>
      <Grid.Column width={8}>
      <CityFilter onSelect={handleSelectCity}/>
      </Grid.Column>
      <Grid.Column width={8}>
      <WorkTypeFilter onSelect={handleSelectWorkType}/>
      </Grid.Column>
    </Grid.Row>

    </Grid> */}
      <CityFilter onSelect={handleSelectCity} />
      <WorkTypeFilter onSelect={handleSelectWorkType} />

      <Table style={{ marginRight: "50%", height: "27vh" }}>
        <Pagination
          style={{ marginLeft: "650px", backgroundColor: "orange" }}
          activePage={activePage}
          onPageChange={onChange}
          totalPages={10}
        />
        <Card.Group>{jobAdverts && renderJobAdvertList()}</Card.Group>
        <Pagination
          style={{
            marginLeft: "650px",
            marginTop: "20px",
            backgroundColor: "orange",
          }}
          activePage={activePage}
          onPageChange={onChange}
          totalPages={10}
        />
      </Table>
    </div>
  );

  function handleSelectWorkType(workTypeId) {
    setSelectedWorkType(workTypeId);
  }

  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }

  function renderJobAdvertList() {
    let renderJobAdverts = jobAdverts;

    if (filteredJobAdverts) {
      renderJobAdverts = filteredJobAdverts;
    }

    const shouldDisplayEmptyState = !renderJobAdverts.length;

    return shouldDisplayEmptyState ? (
      <Message
        className="ui center aligned segment"
        size="big"
        style={{
          marginLeft: "15%",
          marginTop: "5%",
          width: "50%",
          marginBottom: "3%",
          color: "white",
          backgroundColor: "red",
        }}
        visible
      >
        Üzgünüz, İlan bulunamadı! <Icon name="times rectangle" />
      </Message>
    ) : (
      renderJobAdverts.map((jobAdvert, key) => (
        // <JobAdvertListItem jobAdvert={jobAdvert} jobSeeker={jobSeeker} isFavorite={jobAdvert.favorites.some((favorite)=>
        //   favorite.jobAdvert.id===jobAdvert.id
        // )}/>
        <Card style={{ marginTop: "25px" }} fluid color="violet">
          <Card.Content>
          {moment().isBefore(moment(jobAdvert.deadline)) ?(null):
            ((moment(jobAdvert.publishedAt).locale("tr").fromNow()[0] <= "2" &&
              moment(jobAdvert.publishedAt).locale("tr").fromNow()[1] === " " &&
              moment(jobAdvert.publishedAt).locale("tr").fromNow()[2] <= " ") ||
            moment(jobAdvert.publishedAt).locale("tr").fromNow()[0] === "b" ? (
              <Label style={{ marginRight: "85%" }} as="a" color="red" ribbon>
                Yeni
              </Label>
            ) : null)}

            <Image
              floated="right"
              // fluid
              // label={{ as: 'a', corner: 'right', icon: 'heart', color:"red" }} size="small" style={{marginBottom:"2%"}}
              // src="../assets/logo.png"
            >


              <FavoritesAddDelete jobAdvert={jobAdvert} jobSeeker={jobSeeker}/>
              {/* <JobSeekerFavorites jobAdvert={jobAdvert} jobSeeker={jobSeeker}/> */}

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
            {moment().isBefore(moment(jobAdvert.deadline)) ? (
              <Card.Description style={{ marginLeft: "39%" }}>
                <strong>
                  Son Başvuru Tarihi - {jobAdvert.deadline}
                  <br />
                  <b style={{ marginLeft: "55px", color: "green" }}>
                    (
                    {moment(jobAdvert.deadline)
                      .endOf(jobAdvert.publishedAt)
                      .from(jobAdvert.publishedAt)}{" "}
                    bitiyor)
                  </b>
                </strong>

                <span style={{ marginLeft: "59%", color: "purple" }}>
                  <b>{moment(jobAdvert.publishedAt).locale("tr").fromNow()}</b>
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
          {moment().isBefore(moment(jobAdvert.deadline)) ? (
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
            </Card.Content>
          ) : (
            <Card.Content extra>
              <Link to={`/jobAdverts/${jobAdvert.id}`}>
                <Button basic color="red" style={{ width: "100%" }}>
                  Detaylar
                </Button>
              </Link>
            </Card.Content>
          )}
        </Card>
      ))
    );
  }
}
