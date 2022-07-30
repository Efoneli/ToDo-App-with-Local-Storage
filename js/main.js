// ////////////////////////////////////////////////
// COLOR PICKER LOGIC
// ///////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const taskContainer = document.getElementById("task-list");
  todos.map(({title, color, taskType, deadline, id})=>{
    let tags = ``;
  for(const tag of taskType){
    tags = tags+`<div class="tag">${tag.toUpperCase()}</div>`
  }
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<article  style="background-color: ${color}" class="p-4 rounded-xl">
    <div class="flex items-center gap-3 justify-between">
        <div class="text-xs flex flex-wrap gap-3">
            ${tags}
        </div>
        <a href="/src/modify.html?id=${id}" class="text-xxs h-5 w-5 flex justify-center items-center bg-primary-500 text-white rounded-md" >
            <i class="fa-solid fa-pen"></i>
        </a>
    </div>
    <h3 class="mt-4 font-semibold text-lg truncate">${title}</h3>
    <div class="mt-6 flex gap-3 items-end justify-between">
        <div class="text-sm ">
            <p class="grid grid-cols-[1rem,1fr] gap-1.5 items-center mb-1"><i class="fa-regular fa-calendar-days"></i> ${deadline}</p>
            <p class="grid grid-cols-[1rem,1fr] gap-1.5 items-center"><i class="fa-regular fa-clock"></i> 07:30 (Remind At 07:15)</p>
        </div>
        <div>
            <input type="checkbox" id="${id}" hidden>
            <label for="${id}" class="custom-checkbox"></label>
        </div>
    </div>
</article>`;
    taskContainer.appendChild(task);
  })

});


