import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import Dashboard from "./Components/Pages/Dashboard";
import Admins from "./Components/Pages/Admins";
import Users from "./Components/Pages/Users";
import QuestionSet from "./Components/Pages/QuestionSet";
import Settings from "./Components/Pages/Settings";
import NotFound from "./Components/Pages/404NotFound";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path={"/dashboard"} exact component={Dashboard}/>
        <Route path={"/admin"} component={Admins}/>
        <Route path={"/users"} component={Users}/>
        {/*<Route path={"/questionset"} component={QuestionSet}/>*/}
        <Route path={"/settings"} component={Settings}/>
        <Route path={"/*"} component={NotFound}/>
      </Switch>
      <CssBaseline/>
    </Router>
  );
}

export default App;
