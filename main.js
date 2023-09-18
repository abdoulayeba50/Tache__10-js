window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task){
            alert("Please fill out the task")
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");


        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
       
        task_el.appendChild(task_content_el);
        
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);


        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_todo_el = document.createElement("button");
        task_actions_el.classList.add("todo");
        task_todo_el.innerHTML = "To do";
        task_todo_el.style.backgroundColor = "red";
        task_todo_el.style.color = "white";
        task_todo_el.style.border = "none";
        task_todo_el.style.borderRadius = "10px";
        task_todo_el.style.padding = "7px 15px";
        task_todo_el.style.cursor = "pointer";
        task_todo_el.style.fontSize = "14px"; 

        const task_doing_el = document.createElement("button");
        task_actions_el.classList.add("doing");
        task_doing_el.innerHTML = "Doing";
        task_doing_el.style.backgroundColor = "orange";
        task_doing_el.style.color = "white"; 
        task_todo_el.style.border = "none";
        task_doing_el.style.borderRadius = "10px";
        task_doing_el.style.padding = "7px 15px";
        task_doing_el.style.cursor = "pointer";
        task_doing_el.style.fontSize = "14px";

        const task_done_el = document.createElement("button");
        task_actions_el.classList.add("done");
        task_done_el.innerHTML = "Done";
        task_done_el.style.backgroundColor = "green";
        task_done_el.style.color = "white";
        task_done_el.style.border = "none";
        task_done_el.style.borderRadius = "10px";
        task_done_el.style.padding = "7px 15px";
        task_done_el.style.cursor = "pointer";
        task_done_el.style.fontSize = "14px";


        task_actions_el.appendChild(task_todo_el);
        task_actions_el.appendChild(task_doing_el);
        task_actions_el.appendChild(task_done_el);
      
       task_el.appendChild(task_actions_el);

       list_el.appendChild(task_el);

       input.value = "";


    })
})