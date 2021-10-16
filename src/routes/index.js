import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import AllGroups from "../pages/AllGroups";

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/groups">
          <Groups />
        </Route>
        <Route exact path="/allGroups">
          <AllGroups />
        </Route>
      </Switch>
    </>
  );
};
