class animalsApi{

    constructor(){
       this.baseUrl = 'http://localhost:3000/animals'
    }

    fetchAnimals(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(animals => {
            animals.forEach(ani =>{
                
             let animal =  new Animal(ani)
                animal.renderAnimal(ani)
                
            })
}
        )
    }


    deleteAnimal(id){
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(this.baseUrl + `/${id}`, configObj)
        .then(resp => resp.json())
        .then(animal =>{alert(animal.message)
        })
        Animal.all = Animal.all.filter(i => i.id !=id)
        let animal = document.getElementById(`${id}`)
        animal.remove()

   }
  
   
   
   toyFormContainer = (e)=>{
    e.preventDefault()
    
    const nameAnimal = e.target.name.value
    const descAnimal = e.target.description.value
    const imageAnimal = e.target.image.value
    const category_id = e.target.category.value
    
    const animalOption = {
       method: "POST",
       headers: {"Content-Type": "application/json", "Accept": "application/json"},
       body: JSON.stringify({name: nameAnimal, description: descAnimal, image: imageAnimal, category_id: category_id})
    }

    fetch('http://127.0.0.1:3000/animals', animalOption)
    .then(resp => resp.json())
    .then(newAnimal => {
        let anis = new Animal(newAnimal.data.attributes)
        displayContainer.style.display = "none"


        anis.renderAnimal()
        
    })

    animalsForm.reset() 

       
 }

   showAnimals(id){
       fetch(this.baseUrl+`/${id}`)
       .then(resp=> resp.json())
       .then(animal =>{ 
       
       let anis = new Animal(animal.data.attributes)
       
       anis.showAni()
      })
    }
   
   

    sendBack(){
        displaysContainer.innerHTML =''
        Animal.all.forEach(ani => ani.renderAnimal())
        addBtn.hidden = false
    }


       
           
   


}