// Example 1

let button = document.getElementById("changeTextButton");

button.addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph is changed.";
});

// Example 2

document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function () {
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add("highlight");
    });

// Example 3

document.getElementById("changeOrder").addEventListener("click", function () {
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso";
});

// Example 4

document.getElementById("addNewItem").addEventListener("click", function () {
    let newElement = document.createElement("li");
    newElement.textContent = "Spinach";
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newElement);
});

// Example 5

document
    .getElementById("removeLastTask")
    .addEventListener("click", function () {
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    });

// Example 6

document
    .getElementById("clickMeButton")
    .addEventListener("dblclick", function () {
        alert("New alert !!!");
    });

// Example 7

document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("You selected : " + event.target.textContent);
    }
});

// Example 8

document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        document.getElementById(
            "feedbackDisplay"
        ).textContent = `Feedback is  : ${feedback}`;
    });

// Example 9

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10

document
    .getElementById("toggleHighlight")
    .addEventListener("click", function () {
        let text = document.getElementById("descriptionText");
        if (text.classList.contains("highlight")) {
            text.classList.remove("highlight");
        } else {
            text.classList.add("highlight");
        }
    });
