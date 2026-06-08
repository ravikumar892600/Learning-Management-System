import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
