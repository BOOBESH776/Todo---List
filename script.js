
btn.addEventListener("click", function () {
    todo = document.getElementById("todo-input").value;
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = todo;

    ul.appendChild(li);

    document.getElementById("output").appendChild(ul);
});