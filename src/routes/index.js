import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import AllGroups from "../pages/AllGroups";
import Habits from "../pages/Habits";
import Header from "../components/NavBar";
import GroupDetails from "../pages/GroupDetails";

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header destino={"/login"} name={"Entrar"} />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Header destino={"/"} name={"Sair"} />
          <Dashboard />
        </Route>
        feature/groups
        <Route exact path="/groups">
          <Header destino={"/"} name={"Sair"} />
          <Groups />
        </Route>
        <Route exact path="/allGroups">
          <Header destino={"/"} name={"Sair"} />
          <AllGroups />
        </Route>
        <Route path="/habits">
          <Header destino={"/"} name={"Sair"} />
          <Habits />
        </Route>
        <Route path="/groupDetails">
          <Header destino={"/"} name={"Sair"} />
          <GroupDetails />
        </Route>
      </Switch>
    </>
  );
};
