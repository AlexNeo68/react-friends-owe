import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {

    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`
    };
    onAddFriend(newFriend);
    setName('');
    setImage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> 🧑‍🤝‍🧑 Friend Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label> 🖼️ Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <Button>Add</Button>
    </form>
  );
}
