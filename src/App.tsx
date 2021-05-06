import React from "react";
import "./App.css";
import Rooms from "./pages/rooms/Rooms";
import Estimates from "./pages/estimates/Estimates";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Rooms} />
        <Route exact path="/estimates/:id" component={Estimates} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
