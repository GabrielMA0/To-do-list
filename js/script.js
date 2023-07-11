const todoForm = document.querySelector("#todo-form");
const formInput = document.querySelector("#form-input");
const todoList = document.querySelector("#todo-list");
var btnAdd = document.querySelector("#btn-add");

function createTodo() {
    // PEGANDO O QUE FOI DIGITADO NO INPUT
    const inputValue = formInput.value;

    // NÃO CRIAR NENHUMA TAREFA, CASO CAMPO FOR VAZIO.
    if (inputValue == "" || inputValue == null) {
        alert("Preencha o campo!");
    } else {
        // CRIANDO OS ELEMENTOS
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todoList.appendChild(todo);

        const todoInput = document.createElement("input");
        todoInput.setAttribute("value", inputValue);
        todoInput.setAttribute("type", "text");
        todoInput.disabled = true;
        todo.appendChild(todoInput);

        const todoBtns = document.createElement("div");
        todoBtns.classList.add("todo-btns");
        todo.appendChild(todoBtns);

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("finish-todo");
        doneBtn.title = "Concluir tarefa";
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        todoBtns.appendChild(doneBtn);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-todo");
        editBtn.title = "Editar tarefa";
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        todoBtns.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-todo");
        deleteBtn.title = "Apagar tarefa";
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        todoBtns.appendChild(deleteBtn);

        // APAGAR INPUT APÓS CRIAR TAREFA
        formInput.value = "";
        // FOCAR NO INPUT APÓS CRIAR TAREFA
        formInput.focus();

        //FUNÇÕES PARA OS BOTÕES
        doneBtn.addEventListener("click", finish);

        function finish() {
            todo.classList.toggle("done");
            editBtn.classList.toggle("hide");
        }

        editBtn.addEventListener("click", edit);

        function edit() {
            if (todoInput.disabled === true) {
                editBtn.innerHTML = '<i class="fa-solid fa-check-double"></i>';
                doneBtn.classList.add("hide");
                todoInput.disabled = false;
                todoInput.focus();
            } else {
                todoInput.disabled = true;
                doneBtn.classList.remove("hide");
                editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
            }
        }

        deleteBtn.addEventListener("click", delet);

        function delet() {
            let removeTodo = confirm("Tem certeza?");
            if (removeTodo == true) {
                todo.remove();
            }
        }
    }
}

// ATIVANDO A TECLA ENTER

document.addEventListener("keypress", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        btnAdd.click();
    }
});
