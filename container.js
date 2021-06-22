const displayContainer = document.querySelector(".container")
const addBtn = document.querySelector("#new-toy-btn")
let addAnimal = false;

  addBtn.addEventListener("click", () =>{
    addAnimal = !addAnimal;
    if(addAnimal)
    {
      displayContainer.style.display = "block"
    }
    else{
      displayContainer.style.display = "none"
    }
  })
