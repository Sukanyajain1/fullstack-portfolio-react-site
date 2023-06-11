import logo from './logo.svg';
import {
  Routes,
  Route} from 'react-router-dom'
import './App.css';

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Home from './components/Home'
import SignIn from './components/SignIn'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <TopNav></TopNav>
        <Routes>
          <Route path = "/" element= {<MainContent/>}>
            <Route path = "" element= {<Home/>}/>
            <Route path = "signin" element= {<SignIn/>}/>
            <Route path = "about-sukanya" element= {<AboutMe/>}/>
            <Route path = "my-projects" element= {<MyProjects/>}/>
            <Route path = "contact-me" element= {<ContactMe/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
