/* eslint-disable no-alert */
import { Children } from '../../../common/types/children';

// ListUsers/UserCard/index.tsx

interface UserCardProps extends Children {
  user: string,
}

const UserCard = (props: UserCardProps) => {
  const { user, children } = props;

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
        {children}
      </div>
    </div>
  );
};

// ListUsers/index.tsx

type ListUsersProps = Children;

const ListUsers = (props: ListUsersProps) => {
  const { children } = props;

  // Algum tipo de logica complexa que precisa ser encapsulada

  return (
    <>
      { children || 'Sem usuarios'}
    </>
  );
};

const Final02 = () => {
  const users = ['A', 'B', 'C'];

  function handleSelectUser(name: string) {
    alert(name);
  }

  return (
    <div className="flex items-center h-screen bg-gray-300 justify-evenly">
      <ListUsers>
        {users.map((user) => (
          <UserCard
            key={user}
            user={user}
          >
            <button type="button" onClick={() => handleSelectUser(user)}>select</button>
          </UserCard>
        ))}
      </ListUsers>
    </div>
  );
};

export default Final02;
