import "./App.css";
import { useState } from "react";
import { ErrorMessage } from "./components/ErrorMessage";
import { Input } from "./components/Input";

function App() {
  const [humidity, setHumidity] = useState(0);
  const [temp, setTemp] = useState(0);
  const [dewPoint, setDewPoint] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleHumidityChange = (e) => {
    const value = e.target.value;

    if (value > 100) {
      // send error message
      setErrorMessage("Please input a value under 100%");
      setHumidity(100);
    } else {
      setErrorMessage("");
      setHumidity(Number(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDewPoint((temp - (100 - humidity) / 5).toFixed(2));
  };

  return (
    <main>
      <section className="calculator">
        <h1>Dew Point Calculator</h1>

        <Input
          name="humidity"
          id="humidity"
          placeholder="Relative Humidity..."
          value={humidity}
          onChange={handleHumidityChange}
          icon={"%"}
        />

        <Input
          name="temperature"
          id="temperature"
          placeholder="Temperature..."
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          icon={"°C"}
        />

        <ErrorMessage message={errorMessage} />

        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>

        <span id="dew-point">Dew Point: {dewPoint} °C</span>
      </section>
    </main>
  );
}

export default App;
