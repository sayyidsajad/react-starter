import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let newArr = [1, 2, 3, 4, 5, 6, 7];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Sayyid Sajad" />
      <Card username="JSON" post="Staff" myArr={newArr} />
      <Card />
    </>
  );
}

export default App;
