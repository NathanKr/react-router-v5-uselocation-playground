import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/Screen1">Screen1</Link> <Link to="/Screen2">Screen2</Link>
        <hr />
        <Switch>
          <Route exact path="/Screen1">
            <Screen1 />
          </Route>
          <Route exact path="/Screen2">
            <Screen2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
