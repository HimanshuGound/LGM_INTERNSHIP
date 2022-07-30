window.addEventListener('load', () => {
    const form = document.querySelector("#Task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks'); 

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task = input.value;

        if(!task){
            alert("Please add task");
            return;
        } 
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        
        task_el.appendChild(task_content_el);

        const task_inputel = document.createElement("input");
        task_inputel.classList.add("text");
        task_inputel.type = "text";
        task_inputel.value = task;
        task_inputel.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_inputel);

        const task_action = document.createElement("div");
        task_action.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_action.appendChild(task_edit);
        task_action.appendChild(task_delete);

        task_el.appendChild(task_action);

        list_el.appendChild(task_el);
        input.value = "";

        task_edit.addEventListener('click', () =>{
            if (task_edit.innerText.toLowerCase() ==
            "edit"){
            task_inputel.removeAttribute("readonly");
            task_inputel.focus();
            task_edit.innerText = "Save";
            }else{
                task_inputel.setAttribute("readonly", "readonly");
                task_edit.innerText = "Edit";
            }
         
        });

        task_delete.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

    });
});