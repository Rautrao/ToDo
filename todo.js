document.addEventListener('DOMContentLoaded',()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    if(storedTasks){
        storedTasks.forEach((task)=>{tasks.push(task)});
        updateTaskList();
        updateStats();
    }

});

let tasks=[];

const saveTasks=()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

const addTask=()=>{
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim() ;
    const dateInput = document.getElementById('dateInput');
    const dateValue = dateInput.value;
    if(taskValue){
        tasks.push({taskValue: taskValue,completed:false,dateValue:dateValue});
        taskInput.value="";
        updateTaskList(); // updates task list inside the user interface
    }
    updateStats();
    saveTasks();
};

const deleteTask = (index)=>{
    tasks.splice(index,1);
    updateTaskList();
    updateStats();
    saveTasks();
};

const editTask=(index)=>{
    const taskInput = document.getElementById('taskInput')
    taskInput.value= tasks[index].taskValue;
    deleteTask(index);
    updateStats();
    saveTasks();
}

const toggleTaskComplete=(index)=>{
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
    saveTasks();
    
    
};

const updateStats = ()=>{
    const completedTasks = tasks.filter(task=>task.completed).length;
    const totalTasks  = tasks.length;
    const  progress = (completedTasks/totalTasks) *100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

    if(tasks.length && completedTasks === totalTasks){
        blastConfetti();
    }
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
                <p>${task.dateValue}</p>
                
            </div>
            <div class="icons">
                <button class="pinToTop">📌</button>
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
const blastConfetti=()=>{
    confetti({
  spread: 360,
  ticks: 200,
  gravity: 1,
  decay: 0.94,
  startVelocity: 30,
  particleCount: 100,
  scalar: 3,
  shapes: ["image"],
  shapeOptions: {
    image: [{
        src: "https://particles.js.org/images/fruits/apple.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/avocado.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/banana.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/berries.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/cherry.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/grapes.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/lemon.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/orange.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/peach.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/pear.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/pepper.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/plum.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/star.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/strawberry.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon_slice.png",
        width: 32,
        height: 32,
      },
    ],
  },
});
}