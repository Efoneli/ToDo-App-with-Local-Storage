// ////////////////////////////////////////////////
// COLOR PICKER LOGIC
// ///////////////////////////////////////////////
const colorPickerButton = document.querySelector("#color-selector-add-button");
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
        <input type="radio" name="color-selector" value="${color}" id="${id}-color-selector" hidden>
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
});


// add to do to local storage
document.querySelector("#add-task")
  .addEventListener("click", (event) => {
    event.preventDefault();
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
      title
    };
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({...todo, id: todos.length + 1});
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.href = "/src/index.html";
  })

// get todos from localstorage

// update todo in localstorage
