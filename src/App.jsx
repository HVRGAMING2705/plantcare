import { useState } from "react";

const FEATURES = ["Add plants with name and watering frequency", "Watering schedule and due reminders", "Plant care history log"];

export default function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("plantcare_plant_watering_reminder_app_items") || "[]"));
  const [text, setText] = useState("");
  const add = () => { if (!text.trim()) return; const next = [...items, text]; setItems(next); localStorage.setItem("plantcare_plant_watering_reminder_app_items", JSON.stringify(next)); setText(""); };
  return (<div><h1>PlantCare - Plant Watering Reminder App</h1>{FEATURES.map(f => <div key={f}>{f}</div>)}<input value={text} onChange={e => setText(e.target.value)} placeholder="Add an entry…" /><button onClick={add}>Add</button><ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul></div>);
}
