import { Link } from "react-router-dom";
import tracking from "./img/tracking.png";
import cakery from "./img/cakery.png";
import todolist from "./img/todolist.png";

export default function Home() {
    return (
        <div>
            <Link to="/tracking">
                <img src={tracking} alt="Package Tracking" className="w-100" />
            </Link>
            <br /><br />
            <Link to="/cakery">
                <img src={cakery} alt="Cakery" className="w-100" />
            </Link>
            <br /><br />
            <Link to="/todolist">
                <img src={todolist} alt="ToDoList" className="w-100" />
            </Link>
            <br /><br />
            <h3>About me</h3>
            <p>
                I've been programming for over 10 years and have in that time used several different languages.
                Programming and creative problem solving is something I enjoy a lot.
                Most recently, I have been starting to learn fullstack programming.
                On this website you will find some of my recent projects, using C#, HTML, CSS, JavaScript, and React.
                The website itself is also made using React and Bootstrap.
                You can find more of my projects on <a href="https://github.com/kasperab" target="_blank">GitHub</a> and connect with me on <a href="https://linkedin.com/in/kasperab" target="_blank">LinkedIn</a>.
            </p>
        </div>
    );
}