import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/layout/navbar";
import Home from "./components/home/home";
import Chat from "./components/msg/chat";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import PostDetails from "./components/posts/postdetails";
import Personal from "./components/personal/personal";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/chat" component = {Chat} />
        <Route exact path = "/signin" component = {SignIn} />
        <Route exact path = "/signup" component = {SignUp} />  
        <Route exact path = "/personal" component = {Personal} />
        <Route exact path = "/:post_id" component = {PostDetails} />      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
