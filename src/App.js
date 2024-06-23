import { useState } from "react"

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

function Friend({friend}){
  return (
    <div className="friend">
      <div className="friend__avatar">
        <img src={friend.avatar} alt={friend.name} />
      </div>
      <div className="friend__info">
        <div className="friend__name">{friend.name}</div>
        <div className="friend__balance">
          {friend.balance < 0 && <div>You owe {friend.name} ${Math.abs(friend.balance)}</div>}
          {friend.balance > 0 && <div>{friend.name} owes you ${friend.balance}</div>}
          {friend.balance === 0 && <div>{friend.name} and you are even ${friend.balance}</div>}
        </div>
      </div>
      <div className="friend__button">
        <Button>Select</Button>
      </div>
    </div>
  )
}

function Button({children, onClick}){
  return <button onClick={onClick}>{children}</button>
}

function Friends({data}){
  return (
    <div className="friends">
      {data.map(friend=><Friend key={friend.id} friend={friend} />)}
    </div>
  )
}

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

  return (
    <div className="App">
      <div className="sidebar">
        <Friends data={friends} />
        {showAddFriendForm&&<FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendForm}>{
          showAddFriendForm ? 'Close' : 'Add friend'
        }</Button>
      </div>
      <div className="content">
        <FormBillSplit />
      </div>
      
    </div>
  );
}

function FormAddFriend({onAddFriend}){
  
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e){
    
    e.preventDefault()
    
    if(!name||!image) return;

    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`
    }
    onAddFriend(newFriend)
    setName('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> 🧑‍🤝‍🧑 Friend Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <label> 🖼️ Image URL</label>
        <input type="text" value={image } onChange={(e)=>setImage(e.target.value)} />
      </div>
      <Button>Add</Button>
    </form>
  )
}


function FormBillSplit(){
  return (
    <form >
      <div>
        <label> 💰 Bill value</label>
        <input type="text" />
      </div>
      <div>
        <label> 🏋️‍♀️ Your expense</label>
        <input type="text" />
      </div>
      <div>
        <label> 🙆‍♀️ X`s` expense</label>
        <input type="text" />
      </div>
      <div>
        <label> 💁 Who is paying the bill</label>
        <select>
          <option value="user">Your</option>
          <option value="friend">X</option>
        </select>
      </div>
      <Button>Split bill</Button>
    </form>
  )
}


export default App;
