export default function ResultDisplay({ result }) {
    return result ? (
      <div className="mt-3 p-2 bg-gray-100 rounded">{result}</div>
    ) : null;
  }
  