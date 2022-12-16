import "./UserList.css";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <UserItem
          id={user.id}
          name={user.name}
          age={user.age}
          onDelete={props.onDeleteUser}
        />
      ))}
    </ul>
  );
};

export default UserList;
