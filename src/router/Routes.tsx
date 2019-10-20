import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from 'components/modules/posts/posts';


const Routes = () => {
  return (
    <Switch>
      <Route
        path="/posts"
        component={Posts} 
      />
    </Switch>
  );
};

export default Routes;
