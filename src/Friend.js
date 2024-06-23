import { Button } from "./Button";


export function Friend({ friend, selectedFriend, onSelectFriend }) {
  const isCur = selectedFriend?.id === friend.id
  return (
    <div className={'friend'+(isCur?' selected':'')}>
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
        <Button onClick={()=>onSelectFriend(friend)}>{isCur?'Close':'Select'}</Button>
      </div>
    </div>
  );
}
