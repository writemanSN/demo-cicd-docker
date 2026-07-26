import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/items";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const loadItems = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error("Erreur de chargement:", err));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const addItem = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        loadItems();
      });
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 480, margin: "40px auto" }}>
      <h1>Demo CI/CD</h1>
      <form onSubmit={addItem}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de l'item"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
