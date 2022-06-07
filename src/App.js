import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  const {authIsReady,user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&(
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          {user && <Home/>}
          {!user && <Redirect to="/login"/>}
        </Route>
        <Route path="/login">
        {!user && <Login/>}
        {user && <Redirect to="/"/>}
        </Route>
        <Route path="/signup">
        {!user &&  <SignUp/>}
        {user && <Redirect to="/"/>}
        </Route>
        <Route path="*">
        <Redirect to="/"/>
        </Route>
      </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
