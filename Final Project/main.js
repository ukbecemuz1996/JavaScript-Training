class Helper {
    static generateRandomId() {
        return Date.now();
    }
}

class Task {
    #id;
    #name;
    #status;
    #priority;

    constructor(name, status, priority) {
        this.#id = Helper.generateRandomId();
        this.#name = name;
        this.#status = status;
        this.#priority = priority;
    }

    get id() {
        return this.#id;
    }

    set name(newName) {
        this.#name = newName;
    }

    get name() {
        return this.#name;
    }

    set status(newStatus) {
        this.#status = newStatus;
    }

    get status() {
        return this.#status;
    }

    set priority(newPriority) {
        this.#priority = newPriority;
    }

    get priority() {
        return this.#priority;
    }

    toggleStatus() {
        this.#status = this.#status == "completed" ? "pending" : "completed";
    }
}

class TodoList {
    #name;
    #tasks;

    constructor(name) {
        this.#name = name;
        this.#tasks = [];
    }

    set name(newName) {
        this.#name = newName;
    }

    get name() {
        return this.#name;
    }

    get tasks() {
        return this.#tasks;
    }

    addTask(newTask) {
        if (newTask instanceof Task) {
            this.#tasks.push(newTask);
        } else {
            console.error("The new task does not belong to Task class");
        }
    }

    removeTask(task) {
        this.#tasks = this.#tasks.filter((item) => item.id !== task.id);
    }

    sortTasksByPriority() {
        const priorities = { high: 3, medium: 2, low: 1 };

        this.#tasks.sort((a, b) => {
            return priorities[b.priority] - priorities[a.priority];
        });
    }
}

const createListElement = (list) => {
    const listElement = document.createElement("div");
    listElement.className = "todo-list";
    listElement.innerHTML = `
        <h2>${list.name}</h2>
        <div class="tasks"></div>
        <input type="text" class="new-task-name" placeholder="New Task Name" />
        <select class="new-task-priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button class="add-task">Add Task</button>
    `;

    listElement.querySelector(".add-task").addEventListener("click", () => {
        const newTaskName = listElement.querySelector(".new-task-name").value;
        const newTaskPriority =
            listElement.querySelector(".new-task-priority").value;

        const newTask = new Task(newTaskName, "pending", newTaskPriority);
        list.addTask(newTask);

        updateTaskElements(listElement.querySelector(".tasks"), list);
    });

    return listElement;
};

const updateTaskElements = (tasksContainer, list) => {
    tasksContainer.innerHTML = "";
    list.sortTasksByPriority();
    list.tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <span class="task-name">${task.name}</span> | 
            <span class="task-status">${task.status}</span> | 
            <span class="task-priority">${task.priority}</span> | 
            <button class="toggle-status">Toggle Status</button>
            <button class="remove-task">Remove Task</button>
        `;

        taskElement
            .querySelector(".toggle-status")
            .addEventListener("click", () => {
                task.toggleStatus();
                updateTaskElements(tasksContainer, list);
            });

        taskElement
            .querySelector(".remove-task")
            .addEventListener("click", () => {
                list.removeTask(task);
                updateTaskElements(tasksContainer, list);
            });

        tasksContainer.appendChild(taskElement);
    });
};

const listsWrapper = document.getElementById("todo-lists");
const newListNameInput = document.getElementById("new-list-name");
const createListBtn = document.getElementById("create-list");

createListBtn.addEventListener("click", (event) => {
    const newListName = newListNameInput.value;
    const newList = new TodoList(newListName);
    const listElement = createListElement(newList);
    listsWrapper.appendChild(listElement);
    console.log(newList);
});
