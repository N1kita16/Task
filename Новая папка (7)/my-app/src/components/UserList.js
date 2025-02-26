export default function UserList({ users }) {
    return (
      <div className="mt-4 bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-2">Список пользователей</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">Пока нет зарегистрированных пользователей.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li key={index} className="p-2 border rounded">
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  