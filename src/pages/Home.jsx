import { Link } from "react-router-dom";
import cakery from "./img/cakery.png";
import todolist from "./img/todolist.png";

export default function Home() {
    return (
        <div>
            <Link to="/cakery">
                <img src={cakery} alt="Cakery" className="w-100" />
            </Link>
            <br /><br />
            <Link to="/todolist">
                <img src={todolist} alt="ToDoList" className="w-100" />
            </Link>
        </div>
    );
}