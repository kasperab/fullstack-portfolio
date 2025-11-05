import todolist from "./img/todolist.png";
import add from "./img/todolist-add.png";
import edit from "./img/todolist-edit.png";
import view from "./img/todolist-view.png";
import json from "./img/todolist-json.png";

export default function ToDoList() {
    return (
        <div>
            <h3 className="text-center">ToDoList</h3>
            <br />
            <p>
                C# console app to manage a to do list.
            </p>
            <img src={todolist} alt="ToDoList Menu" className="w-100" />
            <br /><br />
            <p>
                Add tasks with name, project, date, and status.
            </p>
            <img src={add} alt="ToDoList Add Task" className="w-100" />
            <br /><br />
            <p>
                Edit and delete tasks.
            </p>
            <img src={edit} alt="ToDoList Edit Task" className="w-100" />
            <br /><br />
            <p>
                View list sorted by project or date.
            </p>
            <img src={view} alt="ToDoList View" className="w-100" />
            <br /><br />
            <p>
                List is loaded from and saved to a JSON file.
            </p>
            <img src={json} alt="ToDoList JSON Loading and Saving" className="w-100" />
        </div>
    );
}