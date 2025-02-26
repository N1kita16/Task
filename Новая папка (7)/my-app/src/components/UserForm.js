import { useState } from "react";
import Modal from "./Modal";

export default function UserForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Данные пользователя:", userData);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Открыть форму
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Заполните данные</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Возраст"
            value={userData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
            Сохранить
          </button>
        </form>
      </Modal>
    </div>
  );
}
