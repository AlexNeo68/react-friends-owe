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
        <button>Select</button>
      </div>
    </div>
  )
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
      </div>
      
    </div>
  );
}

export default App;
