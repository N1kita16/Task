import { useState } from "react";
import InputField from "./InputField";
import SolveButton from "./SolveButton";
import ResultDisplay from "./ResultDisplay";
export default function QuadraticSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  const solveEquation = () => {
    const A = a !== "" ? parseFloat(a) : NaN;
    const B = b !== "" ? parseFloat(b) : NaN;
    const C = c !== "" ? parseFloat(c) : NaN;
    console.log(`Входные данные: A=${A}, B=${B}, C=${C}`);
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setResult("Введите корректные числа");
      return;
    }
    if (A === 0) {
      setResult("Коэффициент 'a' не может быть 0 (это не квадратное уравнение)");
      return;
    }
    const D = B * (B - 4 )* A * C;
    console.log(`Дискриминант: D=${D}`);
    if (D < 0) {
      setResult("Корней нет (D < 0)");
    } else if (D === 0) {
      const x = -B / (2 * A);
      setResult(`Один корень: x = ${x}`);
    } else {
      const x1 = (-B + Math.sqrt(D)) / (2 * A);
      const x2 = (-B - Math.sqrt(D)) / (2 * A);
      setResult(`Два корня: x1 = ${x1}, x2 = ${x2}`);
    }
  };
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Решатель квадратных уравнений</h2>
      <InputField label="Коэффициент a" value={a} onChange={setA} />
      <InputField label="Коэффициент b" value={b} onChange={setB} />
      <InputField label="Коэффициент c" value={c} onChange={setC} />
      <SolveButton onClick={solveEquation} />
      <ResultDisplay result={result} />
    </div>
  );
}
