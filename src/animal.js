//Animal class

class Animal{
    
    static all = []
    
    constructor({ id, name, description, image,  category_id}){
        this.id = id
        this.name = name
        this.image = image
        this.description = description
        this.id = id
        this.category_id = category_id
        this.element = document.createElement('div')
        this.element.id = `${this.id}`
        this.itemList = document.getElementById('cards')


        Animal.all.push(this)
    }

    newAlpha(ani){
        debugger
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
    }



   

    renderAnimal(){
        this.itemList.append(this.fullRender())
        this.addEventListeners()
    }

 

    fullRender(){
        this.element.innerHTML = `
        <div class ="card">
        <h2 class= "card-title" data-id=${this.id}  > ${this.name}</h2>
        <img  class ="ani-image" src= ${this.image} />
        <p class="card-desc"> ${this.description}</p>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="edit" data-id="${this.id}">Edit</button>
               </div>
        `
        return this.element
    }


   editUpdate({name, description, image}){
        this.name = name
       this.description = description
       this.image = image
       
       this.fullRender()
   }


    showAni(){
        this.itemList.innerHTML = ''
       this.itemList.innerHTML = ` <img class ="image" src= ${this.image} />
       `
       displayContainer.hidden = true
       addBtn.hidden = true
     
    }

    editAnimal(animal){
       const newForm = document.querySelector(`#newForm`)
       let updateAnimal = `
       <form data-id="${this.id}">
       <input type="text" name="name" value =${this.name}>
       <input type="text" name="description" value = "${this.description}">
       <input type="text" name="image" value = ${this.image}.src>
       <input  type="submit">
       </form>
       `
       
       let formDiv = document.createElement('form')
       formDiv.dataset.id = `${this.id}`
       formDiv.innerHTML = updateAnimal
      newForm.append(formDiv)
      

    //   formDiv.addEventListener('submit',(e)=>{
    //   this.sendAnimalRequest(e)})
           
           }

        //     sendAnimalRequest=(e)=>{
        //         e.preventDefault()
        //        const id = e.target.dataset.id
        //        const name =e.target.name.value
        //        const descAnimal = e.target.description.value
        //        const imageAnimal = e.target.image.value

        //         let newAnimal ={
        //             name,
        //             descAnimal,
        //             imageAnimal
        //         }
                          
            
        //     let config ={
        //         method: 'PATCH',
        //         headers: {"Content-Type": "application/json", "Accepts":"application/json"},
        //         body: JSON.stringify(newAnimal)
        //     }
            
        //    fetch(`http://127.0.0.1:3000/animals/${id}`, config)
        //    .then(resp => resp.json())
        //    .then(animal=>{
        //         let ani = new Animal(animal.data.attributes)
        //         ani.renderAnimal()
        
        // })
           
           
        //    }



    handleListClick = (event)=>{
        console.log(this)
        let id = event.target.dataset.id
        if(event.target.className === "delete"){
            animalApi.deleteAnimal(id)
         }else if(event.target.className === "card-title"){
             animalApi.showAnimals(id)            
         }else if(event.target.className === "edit"){
            this.editAnimal(id)
        }
      
    }

 


 
}