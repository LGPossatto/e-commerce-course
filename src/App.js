import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop/hats" component={HatsPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
