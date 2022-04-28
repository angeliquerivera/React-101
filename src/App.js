import React from "react";
import Greeting from "./components/Greeting";
import DestructuredGreeting from "./components/DestructuredGreeting";
import MyFriends from "./components/MyFriends";
import Example from "./components/ClassExample";
import Comment from "./components/Comment";

const commentProps = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/256/256",
  },
};

export default function App() {
  return (
    <div id="container">
      {/* Reading props from an object */}
      <Comment
        author={commentProps.author}
        text={commentProps.text}
        date={commentProps.date}
      />

      {/* Passing props via spread syntax */}
      <Comment {...commentProps} />

      {/* <Greeting name={"Angie"} />
      <Greeting name={"Angie"} /> */}
      {/* <DestructuredGreeting name={"Christian"} />
      <MyFriends firstFriend={"Josie"} secondFriend={"Spencer"} />
      <Example name={"Danish"} /> */}
    </div>
  );
}
