import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="p-3">
        <header className="p-3 text-center text-white bg-secondary">
          <Link to="/" className="text-white">
            <h1>Kasper Andersson Brandt</h1>
          </Link>
          <h2>Fullstack Programmer</h2>
        </header>

        <main className="p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </main>

        <footer className="p-3 text-right text-white bg-secondary"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
