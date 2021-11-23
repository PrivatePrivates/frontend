import "./App.css";
import Deck from "./components/Slider/Slider";
import Dashboard from "./components/Dashboard";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Deck} />
        <Route path="/old" component={Dashboard} />
      </Router>
    </>
  );
}

export default App;
