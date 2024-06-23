import { useState } from "react"
import { Button } from "./Button"
import { Friends } from "./Friends"
import { FormAddFriend } from "./FormAddFriend"
import { FormBillSplit } from "./FormBillSplit"

const initialFriends = [
  {
    id: Date.now()+1,
    name: "John",
    balance: 50,
    avatar: 'https://avatar.iran.liara.run/public/7'
  },
  {
    id: Date.now()+2,
    name: "Sara",
    balance: -7,
    avatar: 'https://avatar.iran.liara.run/public/74'
  },
  {
    id: Date.now()+3,
    name: "Brad",
    balance: 10,
    avatar: 'https://avatar.iran.liara.run/public/1'
  },
]

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false)
  function handleShowAddFriendForm(){
    setShowAddFriendForm(show=>!show)
  }

  const [friends, setFriends] = useState(initialFriends)

  function handleAddFriend(newFriend){
    setFriends(friends => [...friends, newFriend])
    setShowAddFriendForm(false)
  }

  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleSelectFriend(friend){
    setSelectedFriend(cur=>cur?.id===friend.id?null:friend)
  }

  function handleSplitBill(value){
    setFriends(friends=>friends.map(friend=>friend.id===selectedFriend?.id?{...friend, balance: friend.balance+value}:friend))
    setSelectedFriend(null)
  }

  return (
    <div className="App">
      <div className="sidebar">
        <Friends data={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />
        {showAddFriendForm&&<FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendForm}>{
          showAddFriendForm ? 'Close' : 'Add friend'
        }</Button>
      </div>
      <div className="content">
        {selectedFriend&&<FormBillSplit selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </div>
      
    </div>
  );
}

export default App;
