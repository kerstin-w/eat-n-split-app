import { useState } from "react";
import { Button } from "./Button";

/**
 * The `FormAddFriend` function handles form submission, validates input fields,
 * generates a random ID, creates a new friend object with default balance, and triggers a callback
 * function to add the new friend to a list.
 * @returns The `FormAddFriend` component is returning a form with input fields for entering a friend's
 * name and image URL, along with a submit button labeled "Add". The form submission is handled by the
 * `handleSubmit` function, which validates the input fields, generates a random ID, creates a new
 * friend object with default balance, and triggers a callback function (`onAddFriend`) to add the new
 * friend
 */
export function FormAddFried({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * The handleSubmit function handles form submission, validates input fields, generates a
   * random ID, creates a new friend object with default balance, and triggers a callback function to add
   * the new friend to a list.
   * @param e - The `e` parameter in the `handleSubmit` function is typically an event object that
   * represents the event triggered by a user action, such as submitting a form. In this case,
   * `e.preventDefault()` is used to prevent the default behavior of form submission, which allows you to
   * handle the form data manually
   * @returns If the `name` or `image` variables are not truthy (empty or undefined), the function will
   * add a "bounce" class to the input field, remove it after 1 second, and then return without further
   * execution. If the `name` and `image` variables are truthy, a new friend object is created with a
   * random `id`, `name`, modified `image`
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) {
      const inputField = document.querySelector('input[type="text"]');
      inputField.classList.add("bounce");
      setTimeout(() => {
        inputField.classList.remove("bounce");
      }, 1000);
      return;
    }

    const id = Math.floor(Math.random() * 1000000);
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");
    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🏞️ Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
