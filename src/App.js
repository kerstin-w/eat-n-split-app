import { useState } from "react";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFried } from "./FormAddFried";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * The function `handleShowAddFriend` toggles the value of `showAddFriend` between true and false.
   */
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /**
   * The function `handleAddFriend` adds a new friend to the list of friends and hides the add friend
   * interface.
   * The `friend` parameter in the `handleAddFriend` function is typically an object
   * representing a new friend that you want to add to the list of friends. It could contain information
   * such as the friend's name, age, location, or any other relevant details you want to store about the
   * friend.
   */
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  /**
   * The function `handleSelection` updates the selected friend and hides the add friend option.
   * The `friend` parameter in the `handleSelection` function is an object representing a
   * friend. It likely contains properties such as `id`, `name`, `email`, or any other relevant
   * information about the friend.
   */
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  /**
   * The function `handleSplitBill` updates the balance of a selected friend in a list of friends by a
   * specified value and then clears the selected friend.
   * The `value` parameter in the `handleSplitBill` function likely represents the amount
   * by which the bill is being split among friends. This value is added to the balance of the selected
   * friend in the list of friends.
   */
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFried onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
