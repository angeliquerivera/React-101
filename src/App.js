import React from "react";
import Greeting from "./components/Greeting";
import DestructuredGreeting from "./components/DestructuredGreeting";
import MyFriends from "./components/MyFriends";

export default function App() {
  return (
    <div id="container">
      This is the container.
      <Greeting name={"Angie"} />
      <DestructuredGreeting name={"Christian"} />
      <MyFriends firstFriend={"Josie"} secondFriend={"Spencer"} />
    </div>
  );
}
