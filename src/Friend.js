import { Button } from "./Button";

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
