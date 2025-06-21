document.addEventListener('DOMContentLoaded',()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    if(storedTasks){
        storedTasks.forEach((task)=>{tasks.push(task)});
        updateTaskList();
        updateStats();
    }

});
let tasks=[];
const saveToLocalStorage=()=>{ // function to save data to local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

const addTask=()=>{//function to add the task
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim() ;
    const dateInput = document.getElementById('dateInput');
    const dateValue = dateInput.value;
    if(!dateValue){
      alert('Please choose a date');
      return;
    }
    if(taskValue){
        tasks.push({taskValue: taskValue,completed:false,dateValue:dateValue,isPinned:false});
        taskInput.value="";
        updateTaskList(); // updates task list inside the user interface
    }
    updateStats();
    saveToLocalStorage();
    dateInput.value = '';
};

const deleteTask = (index)=>{//function to delete task
    tasks.splice(index,1);
    updateTaskList();
    updateStats();
    saveToLocalStorage();
};

const editTask=(index)=>{//function to edit task
    const taskInput = document.getElementById('taskInput')
    taskInput.value= tasks[index].taskValue;
    deleteTask(index);
    updateStats();
    saveToLocalStorage();
}

const toggleTaskComplete=(index)=>{//function to toggle task complete/  incomplete
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
    saveToLocalStorage();
};
const updateStats = ()=>{//function to update stats in stats-container
    const completedTasks = tasks.filter(task=>task.completed).length;
    const totalTasks  = tasks.length;
    const  progress = (completedTasks/totalTasks) *100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

    if(tasks.length && completedTasks === totalTasks){
        taskCompletionblast();
    }
};

const updateTaskList = ()=>{ //function to update task list
    const taskList= document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task,index)=>{ // creating an element in list
        const listItem = document.createElement('li');
        listItem.innerHTML=`
        <div class="taskItem">

            <div class="task  ${task.completed ? 'completed': ''}">
                <input type="checkbox" class= "checkbox" ${task.completed?'checked':''}>
                <p>${task.taskValue}</p>
                <p>${new Date(task.dateValue).toLocaleDateString()}</p>
            </div>

            <div class="icons">
                <button class="pin-to-top js-pin-to-top-${index}" onClick="pinToTop(${index})">${task.isPinned?'📍':'📌'}</button>
                <img src="./img/edit.png" onclick="editTask(${index})">
                <img src="./img/bin.png" onclick="deleteTask(${index})">
            </div>

        </div>
        `;
        listItem.addEventListener('change',()=>{toggleTaskComplete(index)});
        taskList.append(listItem);
    })
};

const pinToTop = (index) => { // function to pin to top
  tasks[index].isPinned = !tasks[index].isPinned;
  const pinnedTask = tasks.splice(index, 1)[0]; //Get the task at 'index'
  tasks.unshift(pinnedTask); //inserts it to the beginning of the tasks
  updateTaskList();
  saveToLocalStorage();
};
const sortByDatefn = ()=>{ // function to sort task list by date
  tasks.forEach((task)=>{task.isPinned=false});
  tasks.sort((a, b) => {
    const dateA = new Date(a.dateValue);
    const dateB = new Date(b.dateValue);
    return dateA - dateB; // in ascending order
});

  updateTaskList(); // refreshes task list UI
  saveToLocalStorage();      // updates local storage
};

document.getElementById('addTask').addEventListener('click',(event)=>{
    event.preventDefault()  //prevents default behaviour when clicked
    addTask();
});
const taskCompletionblast=()=>{
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