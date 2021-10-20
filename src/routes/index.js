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
import CardProfile from "../components/cardProfile";
import { Container } from "./style";
import Front from "../components/FrontCover";

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
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route exact path="/groups">
          <Header logout />
          {/* <Front name="Grupos" /> */}
          <Container>
            <Groups />
          </Container>
        </Route>
        <Route exact path="/allGroups">
          <Header logout />
          <Container>
            <CardProfile />
            <AllGroups />
          </Container>
        </Route>
        <Route path="/habits">
          <Header logout />
          <Container>
            <Habits />
          </Container>
        </Route>
        <Route path="/groupDetails">
          <Header logout />
          <Container>
            <CardProfile />
            <GroupDetails />
          </Container>
        </Route>
      </Switch>
    </>
  );
};
