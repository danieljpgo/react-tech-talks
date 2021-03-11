/* eslint-disable no-alert */
interface CardProps {
  user: string,
  onSelect: (user: string) => void,
}

const Card = (props: CardProps) => {
  const { user, onSelect } = props;

  return (
    <div className="max-w-xs">
      <div className="grid gap-6 p-8 bg-white rounded-md shadow-md">
        <h3 className="text-2xl text-gray-500">{user}</h3>
        <hr />
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-400 rounded-md" />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            repudiandae magnam illo blanditiis?
          </p>
        </div>
        <button type="button" onClick={() => onSelect(user)}>Selected</button>
      </div>
    </div>
  );
};

interface ListUsersProps {
  users: string[],
  onSelectedUser: (user: string) => void;
}

const ListUsers = (props: ListUsersProps) => {
  const { users, onSelectedUser } = props;

  return (
    <>
      {users.length
        ? users.map((user) => (
          <Card
            key={user}
            user={user}
            onSelect={(selectedUser) => onSelectedUser(selectedUser)}
          />
        ))
        : 'Sem usuarios'}
    </>
  );
};

const Exercise02 = () => {
  const users = ['A', 'B', 'C'];

  return (
    <div className="flex items-center h-screen bg-gray-300 justify-evenly">
      <ListUsers
        users={users}
        onSelectedUser={alert}
      />
    </div>
  );
};

export default Exercise02;
