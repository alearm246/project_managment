import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/modules/Login/Login";
import SignUp from "./components/modules/Signup/SignUp";
import UserProfile from "./components/modules/UserProfile/UserProfile";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/user-profile">
              <UserProfile />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
