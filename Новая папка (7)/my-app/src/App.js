import { useState, useEffect } from "react";
import QuadraticSolver from "./components/QuadraticSolver";
import UserForm from "./components/UserForm";
import CurrencyConverter from "./components/CurrencyConverter";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <QuadraticSolver />
      <UserForm />
      <CurrencyConverter />
      <RegistrationForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
