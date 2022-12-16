import "./UserItem.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.name} ({props.age})
    </li>
  );
};

export default UserItem;
