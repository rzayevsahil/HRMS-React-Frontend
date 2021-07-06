import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Footer from './pages/Footer/Footer';
import HomePage from './layouts/HomePage';
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      
      <Navi/> 
      <Route exact path="/" component={HomePage}/>     
      <Container className="main">       
      <Dashboard className="dashboard"/> 
      </Container>
     <Footer className="footer"/>
    </div>
    
    
  );
}

export default App;
