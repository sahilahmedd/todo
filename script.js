let addTask = () => {
    let input = document.querySelector("input")
    let taskText = input.value.trim();
    if(taskText === "") {
        return;
    }
    
    let li = document.createElement("li")
    li.innerHTML = `<span>${taskText}</span> <div><button class="delete" onclick=deleteTask(this)>X</button> <button class="delete" onclick=deleteTask(this)>X</button></div>`

    document.getElementById("tasklist").appendChild(li)
    input.value = ""
    
}

let deleteTask = (button) => {
    button.parentElement.remove();
}