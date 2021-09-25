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
import {createContext, useState} from "react";
import PreviewQues from "./Components/Pages/PreviewQues";

export  const QuestionSets = createContext();

function App() {
    const [questions, setQuestions] = useState([{
        questionSetName: "",
        questionText: "",
        questionType: "radio",
            isPassage:false,
        passages:[
            {passage: ""}
        ],
        options: [
            {optionText: ""}
        ]
    }]);
  return (
    <QuestionSets.Provider value={[questions, setQuestions]}>
        <Router>
            <Sidebar/>
            <Switch>
                <Route path={"/"} exact component={Dashboard}/>
                <Route path={"/admin"} component={Admins}/>
                <Route path={"/users"} component={Users}/>
                <Route path={"/questionset"} component={QuestionSet}/>
                <Route path={"/preview"} component={PreviewQues}/>
                <Route path={"/settings"} component={Settings}/>
                <Route path={"/*"} component={NotFound}/>
            </Switch>
            <CssBaseline/>
        </Router>
    </QuestionSets.Provider>
  );
}

export default App;
