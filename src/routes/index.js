import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import AllGroups from "../pages/AllGroups";
import Habits from "../pages/Habits";
import GroupsPage from "../pages/GroupsPage";
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/groups">
        <Groups />
      </Route>
      <Route exact path="/allGroups">
        <AllGroups />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/groups/:id">
        <GroupsPage />
      </Route>
    </Switch>
  );
};
