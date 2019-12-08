import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Content from '../containers/Content'
import Personal from '../components/personal/Personal'

class Switcher extends React.Component{
    render(){
        return (
          <div className="App">
            <Switch>
                <Route exact path='/' component={ Content }/>
                <Route exact path='/personal' component={ Personal }/>
            </Switch>
          </div>
        );
      };
}

export default Switcher;
