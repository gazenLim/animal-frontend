const displaysContainer = document.querySelector("#cards");
const toyFormContainer = document.querySelector(".container");
const animalsForm = document.getElementById('add-friends')
const animalApi = new animalsApi
const categoriesApis = new categoriesApi 
const newAnimal =document.getElementById('addNewAnimal')

const editFormAnimal = document.querySelector("#newForm")


         document.addEventListener("DOMContentLoaded", () => {
               const back = document.querySelector("#back")
               back.addEventListener('click', animalApi.sendBack)
            animalApi.fetchAnimals()
            categoriesApis.fetchCategories()
            animalsForm.addEventListener('submit', animalApi.toyFormContainer )
            editFormAnimal.addEventListener('submit', animalApi.animalToy)
            newAnimal.addEventListener('click', animalApi.newAddAnimal)

            


         })
   // function fetchAnimals(){
   // fetch('http://localhost:3000/animals')
   // .then(resp => resp.json())
   // .then(renderAnimals)
   // }

         // function renderAnimals(animals){
         //    const arrayAnimals = animals.data
         //    arrayAnimals.forEach((animal) =>{
         //       renderAnimal(animal)
         //    })
         // }

         // function renderAnimal(animal){
         //    displaysContainer.innerHTML += `
         //    <div class = "card" data-id=${animal.id} >
         //       <h2 class= "card-title" data-id=${animal.id}  > ${animalName.name}</h2>
         //       <img  class ="ani-image" src= ${animalName.image} />
         //       <p class="card-desc"> ${animalName.description}</p>
         //       <button>Edit</button>
         //       <button>Delete</button>
         //       </div>`              

         //    const animalImage = document.getElementsByClassName('card-title')
         //    for (const img of animalImage){
         //       img.addEventListener('click', animalShow)

         //    }

         //    const btnAnimal = document.querySelectorAll('button')
         //    for( const btn of btnAnimal){
         //          btn.addEventListener('click', handleButton)
         //    }
          

         // }
   
         // function animalShow(){
         //  debugger
         //    // for (const img of animalImage){
         //    //    btn.addEventListener('click', handleButton) }
         //    // const id = event.target.dataset.id
         //    // fetch(`http://localhost:3000/animals/${id}`)
         //    // .then(resp => resp.json())
         //    // .then(animal => {
         //    //    const animalName = animal.data.attributes
         //    //    displaysContainer.innerHTML = ' '
         //    //    displaysContainer.innerHTML += `
         //    //    <img src= ${animalName.image} />`
         //    //    addBtn.style.display = "none"

         //    // })
         // }


         
         
         // toyFormContainer.addEventListener("submit", function(e){
         //    e.preventDefault()
            
         //    const nameAnimal = e.target.name.value
         //    const descAnimal = e.target.description.value
         //    const imageAnimal = e.target.image.value
         //    const category_id = e.target.category.value
            
         //    const animalOption = {
         //       method: "POST",
         //       headers: {"Content-Type": "application/json", "Accept": "application/json"},
         //       body: JSON.stringify({name: nameAnimal, description: descAnimal, image: imageAnimal, category_id: category_id})
         //    }

         //    fetch('http://127.0.0.1:3000/animals', animalOption)
         //       .then(r => r.json())
         //       .then(newAnimal =>
         //          renderAnimal(newAnimal)
                  
         //       )
         // })



       
       
         // function handleButton(){
         //    if(event.target.innerText === 'Delete'){
         //       deleteAnimal(event.target)
         //     }
         //     else if(event.target.innerText === 'Edit'){
         //       editAnimal(event.target)
               

         //       }
         // }
          
         // function deleteAnimal(element){
         //    const div = element.parentElement
         //    const id = div.dataset.id

         //    div.remove()
         //    fetch(`http://localhost:3000/animals/${id}`,{method: 'DELETE'})
         //    .then(resp => resp.json())
         //    .then(animal => alert(animal.message))
         // }


         // function editAnimal(element){
         //    displaysContainer.innerHTML =''
         //   let id = element.parentElement.dataset.id
            

            
         // }
   



     