export default function ToDoList() {
    return (
        <div>
            <h3 className="text-center">ToDoList</h3>
            <p>
                C# console app to manage a to do list.
            </p>
            <ul>
                <li>Add, edit, and delete tasks</li>
                <li>Tasks have name, project, date, and status</li>
                <li>Sort list by project or date</li>
                <li>List is loaded from and saved to a JSON file</li>
            </ul>
        </div>
    );
}