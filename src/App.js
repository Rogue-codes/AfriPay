import Header from './components/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/views/Home';
import Careers from './components/views/Careers';
import About from './components/views/About';
import Stories from './components/views/Stories';
import FAQ from './components/views/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    
    <Router>
          <Header/>
          

          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            <Route  exact path="/about">
             <About/>
            </Route>

            <Route  exact path="/stories">
             <Stories/>
            </Route>

            <Route  exact path="/careers">
             <Careers/>
            </Route>

            <Route  exact path="/faq">
             <FAQ/>
            </Route>
          </Switch>
        
          <Footer/>
      
      </Router>
    </div>
  );
}

export default App;
