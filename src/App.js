const initialFriends = [
  {
    id: Date.now(),
    name: "John",
    balance: 50,
    avatar: 'https://avatar.iran.liara.run/public/7'
  },
  {
    id: Date.now(),
    name: "Sara",
    balance: -7,
    avatar: 'https://avatar.iran.liara.run/public/74'
  },
  {
    id: Date.now(),
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
          {friend.balance == 0 && <div>{friend.name} and you are even ${friend.balance}</div>}
        </div>
      </div>
      <div className="friend__button">
        <Button>Select</Button>
      </div>
    </div>
  )
}

function Button({children}){
  return <button>{children}</button>
}

function Friends({data}){
  return (
    <div className="friends">
      {data.map(friend=><Friend key={friend.id} friend={friend} />)}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Friends data={initialFriends} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <div className="content">
        <FormBillSplit />
      </div>
      
    </div>
  );
}

function FormAddFriend(){
  return (
    <form >
      <div>
        <label> 🧑‍🤝‍🧑 Friend Name</label>
        <input type="text" />
      </div>
      <div>
        <label> 🖼️ Image URL</label>
        <input type="text" />
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
