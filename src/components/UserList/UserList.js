import UserItem from "../UserItem/UserItem.";
import "./UserList.css";

const UserList = (props) => {
  return <ul className="goal-list">
      {props.items.map((user) => <UserItem
      key ={user.id}
      id={user.id}
      onDeleteUser={props.onDelete}>
        {user.text}
      </UserItem>)}
      </ul>;
};

export default UserList;
