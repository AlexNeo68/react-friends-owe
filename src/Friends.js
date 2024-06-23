import { Friend } from "./Friend";

export function Friends({ data, selectedFriend, onSelectFriend }) {
  return (
    <div className="friends">
      {data.map(friend => <Friend selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} key={friend.id} friend={friend} />)}
    </div>
  );
}
