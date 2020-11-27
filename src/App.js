import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar1 from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Components/Blog/Blog';


function App() {
  return (
    <>
       <Router>
         <Navbar1></Navbar1>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/portfolio">
                <Portfolio/>
              </Route>  
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/blogs">
                <Blog/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route path='*'>
                <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
              </Route>
          </Switch>
    </Router>
    </>
  );
}

export default App;
