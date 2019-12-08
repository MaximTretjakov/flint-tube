import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NavbarContainer from './containers/Layout'
import Switcher from './containers/Switcher'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavbarContainer />
        <Switcher />
      </div>
    );
  };
}

export default App;
