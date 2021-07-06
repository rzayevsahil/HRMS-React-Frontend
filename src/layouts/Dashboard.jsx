import React from "react";
import { Route } from "react-router";
import { Container, Grid } from "semantic-ui-react";
import JobSeekerList from "../pages/JobSeekerList";
import JobAdvertList from "../pages/JobAdvertList";
import JobPositionList from "../pages/JobPositionList";
import Categories from "./Categories";
import JobSeeker from "../pages/JobSeeker";
import AdminJobAdvertList from "./Admin/AdminJobAdvertList";
import EmployerJobAdvertList from "./Employer/EmployerJobAdvertList";
import JobAdvertDetail from "../pages/JobAdvetDetail";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
//import MenuFilter from "./Filters/Menu";
//import JobSeekerCvList from "../pages/CV/JobSeekerCvList";
import CvList from "../pages/CV/CvList";
import RegisterEmployer from "../pages/RegisterEmployer";
import JobSeekerCv from "../pages/CV/JobSeekerCv";
//import Pdf from "../pages/Deneme/Pdf";
//import ImageAdd from "../pages/CV/ImageForCv/ImageAdd";
//import FavoritesAdd from "../pages/Favorites/FavoritesAdd";
import Static from "./Admin/Static";
import { ToastContainer } from "react-toastify";
import ActiveEmployer from "./Employer/ActiveEmployer";
import AdminEmployers from "./Admin/Employers/AdminEmployers";
import AdminAllEmployers from "./Admin/Employers/AdminAllEmployers";
import AdminAllEmployersVerifyFalse from "./Admin/Employers/AdminAllEmployersVerifyFalse";
import JobAdvertAdd from "../pages/Employer/JobAdvertAdd";
import EmployerDashboard from "../pages/Employer/EmployerDashboard";
import JobSeekerFavorites from "../pages/Favorites/JobSeekerFavorites";
import StatisticalContent from "./Admin/StatisticalContent";
import EmployeeDetail from "../pages/Employee/EmployeeDetail";

export default function Dashboard() {
  return (
    <div>
      {/* <Route exact path="/" component={HomePage}/> */}
      <Route exact path="/jobAdvertsAdd" component={EmployerDashboard}></Route>
      <Route exact path="/activeemployer" component={EmployerDashboard}></Route>
      <Route exact path="/employerJobAdvertList" component={EmployerDashboard}></Route>
      <Route exact path="/static" component={Static}/>
      <Route path="/adminallemployersverifyfalse" component={Static}/>
      <Route path="/adminJobAdvertList" component={Static}/>  

     <Container>

     <ToastContainer position="bottom-right"/>
     
      <Route path="/signIn" component={SignIn}></Route>
      <Route path="/signUp/Employer" component={RegisterEmployer}></Route>
      <Route exact path="/signUp" component={Register}></Route>
      <Route exact path="/adminJobAdvertlist" component={AdminJobAdvertList} />
      <Route path="/employerJobAdvertlist" component={EmployerJobAdvertList} />
      {/* <Route path="/admin" component={MenuFilter} /> */}
      <Route path="/activeemployer" component={ActiveEmployer} />
      <Route path="/adminemployer" component={AdminEmployers} />
      <Route path="/adminemployeedetail" component={EmployeeDetail} />
      <Route path="/adminallemployers" component={AdminAllEmployers}/>
      <Route path="/adminallemployersverifyfalse" component={AdminAllEmployersVerifyFalse}/>
      <Grid>
      <Grid.Column width={12}><Route  path="/jobSeekerCv" component={JobSeekerCv} /></Grid.Column>
        <Grid.Row>
          <Grid.Column width={4}>
            {/* <Route exact path="/" component={Categories}></Route> */}
            <Route exact path="/jobSeekers" component={Categories}></Route>
            <Route  path="/jobAdverts" component={Categories}></Route>
            <Route exact path="/jobPositions" component={Categories}></Route>
            {/* <Route exact path="/jobAdvertsAdd" component={Categories}></Route> */}
            <Route exact path="/jobSeekerCvList" component={Categories}></Route>
            <Route exact path="/jobSeekerFavorites" component={Categories}></Route>
            <Route exact path="/jobSeeker" component={JobSeeker}></Route>
            {/* <Route  path="/jobSeekerCv" component={JobSeekerCv} /> */}
            {/* <Route exact path="/jobSeekerCv*" component={Pdf}/>
            <Route exact path="/jobSeekerCv*" component={ImageAdd}/> */}
            {/* <Route exact path="/favoriteAdd" component={FavoritesAdd}/> */}
          </Grid.Column>
          <Grid.Column width={12}>
            {/* <Route exact path="/" component={JobAdvertList}></Route> */}
            <Route exact path="/statisticalContent" component={StatisticalContent}></Route>
            <Route exact path="/jobAdverts" component={JobAdvertList}></Route>
            <Route path="/jobAdverts/:id" component={JobAdvertDetail}></Route>
            <Route exact path="/jobAdvertsAdd" component={JobAdvertAdd} />
            <Route exact path="/jobSeekers" component={JobSeekerList}></Route>
            <Route exact path="/jobPositions" component={JobPositionList}></Route>
            {/* <Route exact path="/jobSeekerList"><JobSeekerList/></Route> */}
            <Route exact path="/jobSeekerCvList" component={CvList}></Route>
            <Route exact path="/jobSeekerFavorites" component={JobSeekerFavorites}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
      
    </div>
  );
}
