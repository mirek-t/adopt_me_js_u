import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WrappedDetails from "./components/Details";
import SearchParams from "./components/SearchParams";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<WrappedDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
