export default function InputField({ label, value, onChange }) {
    return (
      <div>
        <label className="block text-sm font-medium">{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </div>
    );
  }
  