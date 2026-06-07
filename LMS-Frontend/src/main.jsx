// CSS imports
import "./index.css";

// Components imports
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Library imports
import ReactDom from "react-dom/client";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
