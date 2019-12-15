import React from "react";
import { BrowserRouter } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Container from './containers/Layout'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    );
  };
}

export default App;
