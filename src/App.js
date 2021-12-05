import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Route";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navbar";
import { Account } from "./components/Account";
function App() {
  return (
    <Account>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Account>
  );
}

export default App;
