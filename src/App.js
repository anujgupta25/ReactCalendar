import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Cal from './Cal.js';


// import Cal from './CalDup.js';

const App = () =>{
  return(
    <>
      <Switch>
        <Route exact path='/' component={Cal} />
      </Switch>

    </>
  );
}
export default App; 