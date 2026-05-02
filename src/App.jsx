import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setLikes] = useState(0);

  function handleTambah() {
    setLikes(likes + 1);
  }

  function handleKurang() {
    setLikes(likes - 1);
  }

  function handleReset() {
    setLikes(0);
  }

  return (
    <div>
      <Header />
      <button onClick={handleTambah}>+</button>
      <p>{likes}</p>
      <button onClick={handleKurang}>-</button>
      <button onClick={handleReset}>Reset Angka</button>
    </div>
  );
}

export default App;
