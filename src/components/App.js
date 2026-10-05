import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1>Personalized Greeting</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && (
        <h2>Hello, {name}!</h2>
      )}
    </div>
  );
};

export default App;
