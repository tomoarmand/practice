const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const displayField = document.getElementById("displayField");

let taskStorage = [];

addButton.addEventListener ("click", () => {
    toStorageArray();
    renderTasks();
});

function toStorageArray() {
    const task = {
        title: inputField.value,
        completed: false
    }
    taskStorage.push(task);
};

function displayOnPage(object, index) {
    const listItem = document.createElement("div");
    listItem.classList = "list-item";

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.classList = "checkbox";

    checkbox.checked = object.completed;

    const itemText = document.createElement("span");
    itemText.innerText = object.title;
    itemText.classList = "item-text";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList = "delete-button";
    //Fix this!!!!!!!!!!!!1
    const deleteCompleted = document.createElement("button");
    deleteCompleted.innerText = "Delete all completed";
    deleteCompleted.classList = "delete-completed";

    listItem.appendChild(checkbox);
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    displayField.appendChild(listItem);
    //Fix this!!!!!!!
    displayField.appendChild(deleteCompleted);

    checkbox.addEventListener("change", () => {
        object.completed = checkbox.checked;

        if (checkbox.checked) {
            itemText.classList.add("completed")
        } else {
            itemText.classList.remove("completed")
        }
    })

    deleteButton.addEventListener("click", () => {
        taskStorage.splice(index, 1);
        renderTasks();
    })
    //Fix this!!!!!!!!!!!!!1
    deleteCompleted.addEventListener("click", () => {
        taskStorage = taskStorage.filter((object) => {
            return !object.completed;
        })//Returns filtered array back to taskStorage
        renderTasks()
    })

}

function renderTasks() {
    displayField.replaceChildren();

    let index = 0;

    taskStorage.forEach((object) => {
        displayOnPage(object, index);
        index++;
    })

}






