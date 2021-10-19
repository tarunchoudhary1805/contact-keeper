import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForNotFor from "./Pages/ForNotFor";
import HomePage from "./Pages/HomePage";
import "./Pages/style.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route component={ForNotFor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
