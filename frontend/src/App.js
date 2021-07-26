import NavBar from "./Components/navBar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";
import WritePost from "./pages/writePost/writePost";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={user ? Home : Register} />
        <Route path="/login" component={user ? Home : Login} />
        <Route path="/write" component={user ? WritePost : Login} />
        <Route path="/settings" component={user ? Settings : Login} />
        <Route path="/post/:postId" component={Single} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
