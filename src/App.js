import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/userInterface/Header";
import Sidebar from "./components/userInterface/Sidebar";
import ChatRoom from "./components/userInterface/ChatRoom";
import Login from "./authentication/Login";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  return (
    <div className="app">
      <Router>
        {/* Header */}
        {isUserLoggedIn ? (
          <Fragment>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              {/* React-Router -> The chat screen you are going to view */}
              <Route path="/room/:roomId">
                <ChatRoom />
              </Route>
            </div>
          </Fragment>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;
