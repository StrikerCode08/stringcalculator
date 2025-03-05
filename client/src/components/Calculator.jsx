import React, { useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setError(null);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/calculate`,
        {
          input,
        }
      );
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>String Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers (e.g. 1 2 3)"
        style={{ padding: "10px", width: "300px" }}
      />
      <button
        onClick={handleCalculate}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Calculate
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>
        Result: {result !== null ? result : "Enter values and click Calculate"}
      </h3>
    </div>
  );
};

export default Calculator;
