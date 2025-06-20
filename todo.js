let tasks=[];
const addTask=()=>{
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim() ;
    if(taskValue){
        tasks.push({taskValue: taskValue,completed:false});
        taskInput.value="";
        updateTaskList(); // updates task list inside the user interface
    }
    updateStats();
};

const deleteTask = (index)=>{
    tasks.splice(index,1);
    updateTaskList();
    updateStats();
};

const editTask=(index)=>{
    const taskInput = document.getElementById('taskInput')
    taskInput.value= tasks[index].taskValue;
    deleteTask(index);
    updateStats();
}

const toggleTaskComplete=(index)=>{
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
};

const updateStats = ()=>{
    const completedTasks = tasks.filter(task=>task.completed).length;
    const totalTasks  = tasks.length;
    const  progress = (completedTasks/totalTasks) *100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;
};

const updateTaskList = ()=>{
    const taskList= document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task,index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML=`
        <div class="taskItem">
            <div class="task  ${task.completed ? 'completed': ''}">
                <input type="checkbox" class= "checkbox" ${task.completed?'checked':''}>
                <p>${task.taskValue}</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" onclick="editTask(${index})">
                <img src="./img/bin.png" onclick="deleteTask(${index})">
            </div>
        </div>
        `;
        listItem.addEventListener('change',()=>{toggleTaskComplete(index)});
        taskList.append(listItem);
    })
};

document.getElementById('addTask').addEventListener('click',(event)=>{
    event.preventDefault()  //prevents default behaviour when clicked
    addTask();
});