import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NavbarContainer from './containers/Layout'
import ContentContainer from './containers/Content'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavbarContainer />
        <ContentContainer />
      </div>
    );
  };
}

export default App;