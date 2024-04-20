import { useState } from "react";
import { Button } from "./Button";

export function FormAddFried({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

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
