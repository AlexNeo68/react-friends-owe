import { useState } from "react";
import { Button } from "./Button";

export function FormBillSplit({selectedFriend, onSplitBill}) {
  const [bill, setBill] = useState(0)
  const [yourExpense, setYourExpense] = useState(0)
  const [who, setWho] = useState('user')

  const friendsExpense = bill&&bill-yourExpense

  function handleSubmit(e){
    e.preventDefault()
    onSplitBill(who==='user' ? -friendsExpense : friendsExpense)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Owe to {selectedFriend.name}</h3>
      <div>
        <label> 💰 Bill value</label>
        <input type="text" value={bill} onChange={e=>setBill(Number(e.target.value))} />
      </div>
      <div>
        <label> 🏋️‍♀️ Your expense</label>
        <input type="text" value={yourExpense} onChange={e=>setYourExpense(Number(e.target.value)>bill?yourExpense:Number(e.target.value))} />
      </div>
      <div>
        <label> 🙆‍♀️ {selectedFriend.name}`s expense</label>
        <input type="text" disabled value={friendsExpense} />
      </div>
      <div>
        <label> 💁 Who is paying the bill</label>
        <select value={who} onChange={e=>setWho(e.target.value)}>
          <option value="user">Your</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <Button>Split bill</Button>
    </form>
  );
}
