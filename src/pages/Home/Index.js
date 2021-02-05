import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";

import PageLoader from "../../atoms/PageLoader";

import Header from "./Header";

const CustomerExperience = lazy(() => import("./CustomerExperience"));
const Sales = lazy(() => import("./Sales"));
const Home = lazy(() => import("./Home"));

const Index = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Router>
        <Header />
        <Suspense fallback={<PageLoader color="#3F51B5" visible={true} size={32} />}>
          <Switch>
            <Route path={`${path}/`} exact component={Home} />
            <Route path={`${path}/customer-experience`} component={CustomerExperience} />
            <Route path={`${path}/sales`} component={Sales} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default Index;
