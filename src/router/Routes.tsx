import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "components/modules/posts/posts";
import PostDetails from "components/modules/postDetails/postDetails";
import SearchScreen from "components/modules/search/search";
import SearchResult from "components/modules/search/searchResult";
import Vocab from "components/modules/vocabs/vocab";
import Login from "components/modules/login/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchScreen} />
      <Route exact path="/search/:query" component={SearchResult} />
      <Route exact path="/vocabs/:id" component={Vocab} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/login" component={Login} />
      <Route
        exact
        path="/posts/:postId"
        render={(props) => <PostDetails {...props} />}
      />
    </Switch>
  );
};

export default Routes;
