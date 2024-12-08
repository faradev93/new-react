import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Flexy from "./components/Flexy";
import Line from "./components/Line";
import Data from "./components/Data";

function App() {
  return (
    <div>
      <Flexy>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Flexy>
      <Line></Line>
      <Data
        id={2}
        sex={"Male"}
        Name={"Faramarz"}
        lastname={"Rezakhanlou"}
        age={31}
      />
    </div>
  );
}

export default App;
