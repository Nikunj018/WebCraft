import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import View from './pages/View/View';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Sidebar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        {/* <Route path="/about" exact>
          <About/>
        </Route> */}
        <Route path="/product" exact>
          <Product/>
        </Route>
        <Route path="/view" exact>
          <View/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
