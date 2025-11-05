import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/cakery">Cakery</Link>
            <br/>
            <Link to="/todolist">ToDoList</Link>
        </div>

    );
}