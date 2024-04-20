import { useState } from "react";
import { Button } from "./Button";

/**
 * The `FormSplitBill` function handles splitting a bill between a user and a selected friend, allowing
 * input of bill amount and expenses to determine payment amounts.
 * @returns The `FormSplitBill` component is returning a form with input fields for entering the total
 * bill amount, the user's expense, and the selected friend's expense. It also includes a dropdown to
 * select who is paying the bill (either the user or the selected friend). The form submission is
 * handled by the `handleSubmit` function, which prevents the default form submission behavior,
 * validates the input values, and
 */
export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoisPaying] = useState("user");

  /**
   * The `handleSubmit` function prevents the default form submission behavior, checks for valid input
   * values, and calls the `onSplitBill` function with the appropriate payment amount based on the payer.
   * @param e - The `e` parameter in the `handleSubmit` function is typically an event object that is
   * passed to the function when an event occurs, such as a form submission. In this case, `e` is used to
   * prevent the default behavior of the form submission using `e.preventDefault()`. This is commonly
   * @returns If either the `bill` or `paidByUser` variables are falsy (such as `null`, `undefined`, `0`,
   * or an empty string), the function will return early and not execute the `onSplitBill` function.
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Total bill amount</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoisPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
