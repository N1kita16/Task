export default function SolveButton({ onClick }) {
    return (
      <button 
        onClick={onClick} 
        className="w-full bg-blue-500 text-white p-2 rounded mt-3"
      >
        Решить
      </button>
    );
  }
  