function updateTime() {
    const now = new Date();

    document.getElementById("dynamic-title").textContent =
        now.toLocaleTimeString();
}

updateTime();

setInterval(updateTime, 1000);

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = "Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeButton.textContent = "Dark Mode";

    }

});

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = "";

});

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "b") {
        document.body.style.backgroundColor = "blue";
    }

});

const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.getElementById("close-modal");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!email.value.includes("@")) {

        modalMessage.textContent =
            "Please enter a valid email address.";

    } else {

        modalMessage.textContent =
            "Form Submitted Successfully!";

    }

    modal.style.display = "block";

});

closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});