import "./UserItem.css";

const UserItem = (props) => {
    const deleteHandler =()=>{
        props.onDeleteUser(props.id)
    }

  return (
    <li className="goal-item" onClick={deleteHandler}>
      <p>
        Username: <span>{props.children.username}</span>{" "}
      </p>
      Age: {props.children.age}
    </li>
  );
};

export default UserItem;
