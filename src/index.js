let taskInput = document.querySelector('.input');
let myForm = document.querySelector('#my-form');
let findForm = document.querySelector('.task-find-form');
let taskFind = document.querySelector('.task-find');
let addBtn = document.querySelector('.add-btn');
let msgArea = document.querySelector('.msg');
let taskList = document.querySelector('.taskList');

myForm.addEventListener('submit', onsubmit);
taskList.addEventListener('click', removeItem);
findForm.addEventListener('keyup', findTask);

function onsubmit(e) {
  e.preventDefault();
  if(taskInput.value.trim() =='') {
    msgArea.classList.add('alert')
    msgArea.classList.add('alert-danger');
    // msgArea.style.backgroundColor = '#ec4646';
    msgArea.innerHTML = 'Alert! Fill the fields first';
  }
  else { 
    console.log('success'); 

    msgArea.innerHTML = '';
    msgArea.classList.remove('alert');
    msgArea.classList.remove('alert-danger');

    
    //li
    let newTask = document.createElement('li');
    newTask.appendChild(document.createTextNode(`${taskInput.value}`));
    newTask.classList.add('list-group-item');
    newTask.classList.add('tasks')
    newTask.style.background = 'transparent';
    newTask.style.margin = 0;

    //delete btn
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-outline-dark float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.style.marginLeft = '5%';

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function removeItem(e) {
  if(e.target.classList.contains('delete') && confirm("Are you sure you want to delete the task?")) {
    let itemToBeRemoved = e.target.parentElement;
    taskList.removeChild(itemToBeRemoved);
  }
}

function findTask(e) {
  let task = e.target.value.toLowerCase();
  let allTasks = taskList.getElementsByTagName('li');
  //converting to an array
  Array.from(allTasks).forEach((eachTask) => {
    let taskName = eachTask.firstChild.textContent;
    if(taskName.toLowerCase().indexOf(task) != -1){
      eachTask.style.display = 'block';
    } else {
      eachTask.style.display = 'none';
    }
  });
}
