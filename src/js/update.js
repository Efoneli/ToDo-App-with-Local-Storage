// ////////////////////////////////////////////////
// COLOR PICKER LOGIC
// ///////////////////////////////////////////////
const colorPickerButton = document.querySelector("#color-selector-add-button");
const parseQueryParams = (search)=>JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
const colorsForColorPicker = [
  "#FBE114",
  "#4BEED1",
  "#13D3FB",
  "#B6ADFF",
  "#FB1467",
];

const addColorToColorPicker = (color) => {
  const colorSelectorContainer = document.querySelector(
    "[data-color-selector-container]"
  );
  const id = Math.random().toString(36).substring(2, 7);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class="color-selector">
        <input type="radio" name="color-selector" value="${color}" id="${color.replace('#','')}-color-selector" hidden>
        <label for="${id}-color-selector" class="h-5 w-5 rounded-full inline-block" style="background: ${color}"></label>
    </div>`;
  colorSelectorContainer.append(wrapper.firstChild);
};

colorPickerButton.addEventListener("click", (event) => {
  event.preventDefault();

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  addColorToColorPicker(color);
});

window.addEventListener("DOMContentLoaded", () => {
  colorsForColorPicker.forEach((color) => addColorToColorPicker(color));
  var search = location.search.substring(1);
    const queryParams = parseQueryParams(search)
    if(queryParams.id){
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const currentTodo = todos.find(todo=>todo.id==Number(queryParams.id));
        
        document.querySelector("input[name='task-title']").value = currentTodo.title;
        document.querySelector("input[name='location']").value = currentTodo.location;
        document.querySelector("input[name='deadline']").value = currentTodo.deadline;

        for(const type of currentTodo.taskType){
            document.querySelector(`#${type}-checkbox`).checked = true;
        }
        document.querySelector(`${currentTodo.color}-color-selector`)
        .checked = true;
    }
});


// add to do to local storage
document.querySelector("#update-task")
  .addEventListener("click", (event) => {
    event.preventDefault();
    var search = location.search.substring(1);
    const queryParams = parseQueryParams(search)
    if(queryParams.id){
        const taskType = [];
    const taskTypes = document.querySelectorAll("input[name='task_type']:checked")
    for(const item of taskTypes){
      taskType.push(item.value);
    }
    
    const color = document.querySelector("input[name='color-selector']:checked").value;
    
        const location = document.querySelector("input[name='location']").value;
        const title = document.querySelector("input[name='task-title']").value;
        const deadline = document.querySelector("input[name='deadline']").value;
        const todo = {
            taskType,
            color,
            location,
            deadline,
            title,
            id: queryParams.id
        };

        
        
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const index = todos.findIndex(todo=>todo.id==queryParams.id);
        todos[index] = todo;
        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.href = "/src/index.html";
    }
  })

// get todos from localstorage

// update todo in localstorage
