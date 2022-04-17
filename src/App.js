import React from 'react';

import Adduser from './Component/Adduser';
import { Route, Switch} from "react-router-dom";
import './App.css';
import Userlist from './Component/Userlist';
import Updateuser from './Component/Updateuser';
import Upload from './Component/Upload';
import Navbar from './Component/Navbar';


const Navlinks = () => {
  return (
    
      <Switch>
        <Route exact path="/">
          <Userlist />
        </Route>
        <Route exact path="/userlist">

        </Route>
        <Route exact path="/adduser">
          <Adduser />
        </Route>
        <Route exact path="/updateuser">
          <Updateuser />
        </Route>
        <Route exact path="/upload">
          <Upload />
        </Route>

      </Switch>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Navlinks />
    </div>




  );
}


export default App;
