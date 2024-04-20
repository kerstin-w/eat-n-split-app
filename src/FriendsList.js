import { Friend } from "./Friend";

/**
 * The `FriendsList` function renders a list of friends with the ability to select a friend.
 * @returns The `FriendsList` component is being returned. It renders a list (`<ul>`) of friends by
 * mapping over the `friends` array and rendering a `Friend` component for each friend. The `Friend`
 * component is passed the `friend` object, a unique `key` based on the friend's `id`, an `onSelection`
 * function, and the `selectedFriend` object
 */
export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
