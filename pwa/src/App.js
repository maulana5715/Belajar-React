import React from 'react';
import {Switch,Route, Link} from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'




function App() {
  return (
    <div>
    
    <Switch>
      <Route exact path="/"><Home namatoko="Toko Cak Anung" tanggalpembelian="22 desember 2019" totalharga="15000"/></Route>
      <Route exact path="/about"component={About}/>
      <Route exact path="/profile"component={Profile}/>
    </Switch> 
    </div>
    );
}

export default App;
