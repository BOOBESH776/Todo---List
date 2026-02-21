todo = document.getElementById("todo-input").value;

btn.addEventListener("click", function() {
    document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = todo;
    ul.append(li);
    document.body.append(ul);
});