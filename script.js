
btn.addEventListener("click", function () {
    todo = document.getElementById("todo-input").value;
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = todo;
    ul.append(li);
    var output = document.getElementById("output");
    output.append(ul);
});

remove-btn.addEventListener("click", function () {
    output = document.getElementById("output");
    output.innerHTML = "";
});