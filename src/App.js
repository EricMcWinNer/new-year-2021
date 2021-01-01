import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/home"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:nameParam" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
