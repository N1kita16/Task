import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState(["USD", "EUR", "RUB"]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  const API_URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.rates[toCurrency]);
      })
      .catch((error) => console.error("Ошибка при загрузке курсов:", error));
  }, [fromCurrency, toCurrency]);

  const convert = () => {
    if (!exchangeRate) return;
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Конвертер валют</h2>

      <div className="mb-3">
        <label>Сумма:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-3">
        <label>Из валюты:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="w-full p-2 border rounded">
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>В валюту:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="w-full p-2 border rounded">
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convert} className="w-full bg-blue-500 text-white p-2 rounded">
        Конвертировать
      </button>

      {convertedAmount !== null && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Результат:</strong> {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </div>
      )}
    </div>
  );
}
