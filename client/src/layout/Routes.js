import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import POD from "../pod/POD";
import NotFound from "./NotFound"
import MarsRover from "../marsrover/MarsRover"
import Neows from "../neows/neows";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to={"/dashboard"} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/pod">
          <POD />
        </Route>
        <Route path="/neows">
          <Neows />
        </Route>
        <Route path="/marsrover">
          <MarsRover />
        </Route>
        <Route path="/NotFound">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
