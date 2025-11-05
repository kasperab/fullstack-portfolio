import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cakery from "./pages/Cakery";
import ToDoList from "./pages/ToDoList";
import NoPage from "./pages/NoPage";
import github from "./img/github-brands-solid-full.svg"
import linkedin from "./img/linkedin-brands-solid-full.svg"

function App() {
  return (
    <BrowserRouter>
      <div className="p-3 m-auto" style={{ maxWidth: 800 }}>
        <header className="p-3 text-center text-white bg-secondary">
          <Link to="/" className="text-white">
            <h1>Kasper Andersson Brandt</h1>
          </Link>
          <h2>Fullstack Programmer</h2>
        </header>

        <main className="p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cakery" element={<Cakery />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </main>

        <footer className="p-3 text-end bg-secondary fs-1">
          <a href="https://github.com/kasperab" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/kasperab" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
