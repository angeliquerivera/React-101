import React from "react";

export default function MyFriends(props) {
  // Explicit destructuring after `props` is declared
  const { firstFriend, secondFriend } = props;

  return (
    <h2>
      These are my friends: {firstFriend} and {secondFriend}!
    </h2>
  );
}

// export default function MyFriends({ firstFriend, secondFriend }) {
//   return (
//     <h2>
//       These are my friends: {firstFriend} and {secondFriend}!
//     </h2>
//   );
// }
