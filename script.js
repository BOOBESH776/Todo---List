
btn.addEventListener("click", function () {
    todo = document.getElementById("todo-input").value;
    if(todo === "") {
        alert("Please enter a todo item.");
        return;
    }
    else{
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = todo;
        ul.append(li);
        var output = document.getElementById("output");
        output.append(ul);
    }
});

remove-btn.addEventListener("click", function () {
    var output = document.getElementById("output");
    output.innerHTML = "";
});