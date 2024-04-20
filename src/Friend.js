import { Button } from "./Button";

/**
 * The Friend component displays information about a friend, including their name, image, balance, and
 * a button to select or close their details.
 * @returns The `Friend` component is being returned, which renders a list item (`<li>`) containing the
 * friend's image, name, balance information, and a button to select or close the friend. The balance
 * information displayed depends on whether the balance is positive, negative, or zero. The selected
 * friend is highlighted with a "selected" class.
 */
export function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance !== 0 && (
        <p className={friend.balance < 0 ? "red" : "green"}>
          {friend.balance < 0
            ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
            : `${friend.name} owes you ${Math.abs(friend.balance)}€`}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are settled up.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
