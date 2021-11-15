import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/Pages/404NotFound";
import Admins from "./Components/Pages/Admins";
import Dashboard from "./Components/Pages/Dashboard";
import Login from "./Components/Pages/Login";
import PreviewQues from "./Components/Pages/PreviewQues";
import QuestionSet from "./Components/Pages/QuestionSet";
import Settings from "./Components/Pages/Settings";
import theme from "./Components/Pages/Theme";
import Users from "./Components/Pages/Users";
import Sidebar from "./Components/Sidebar/Sidebar";

export const QuestionSets = createContext();

function App() {
  const [questions, setQuestions] = useState({
    year: 0,
    examNo: 0,
    examType: "",
    sections: [
      {
        sectionNo: 0,
        examRules: "",
        passage: "",
        audio: "",
        image: "",
        subSections: [
          {
            examRules: "",
            image: "",
            questionText: "",
            questionType: "",
            passages: [],
            questionAndAns: [
              {
                questionNumber: 0,
                queAndAns: "",
              },
            ],
          },
        ],
      },
    ],
  });
  return (
    <ThemeProvider theme={theme}>
      <QuestionSets.Provider value={[questions, setQuestions]}>
        <Router>
          <Sidebar />
          <Switch>
            <Route path={"/"} exact component={Login} />
            <Route path={"/dashboard"} component={Dashboard} />
            <Route path={"/admin"} component={Admins} />
            <Route path={"/users"} component={Users} />
            <Route path={"/questionset"} component={QuestionSet} />
            <Route path={"/preview"} component={PreviewQues} />
            <Route path={"/settings"} component={Settings} />
            <Route path={"/*"} component={NotFound} />
          </Switch>
          <CssBaseline />
        </Router>
      </QuestionSets.Provider>
    </ThemeProvider>
  );
}

export default App;
