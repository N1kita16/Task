import { useState } from "react";
import Modal from "./Mod";

export default function RegistrationForm({ addUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;
    addUser(user);
    setUser({ name: "", email: "" });
    setIsOpen(false);
  };

  return (
    <div >
      <button onClick={() => setIsOpen(true)} >
        Зарегистрироваться
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 >Регистрация</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={user.name}
            onChange={handleChange}
            
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
           
          />
          <button type="submit">
            Зарегистрироваться
          </button>
        </form>
      </Modal>
    </div>
  );
}
