import "./App.css";
import Deck from "./components/Slider/Slider";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Deck} />
      </Router>
    </>
  );
}

export default App;
