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
    animalToy (e){
        e.preventDefault()
        const id = e.target.dataset.id
        const nameAnimal = e.target.name.value
        const  descAnimal = e.target.description.value
        const images = e.target.image.value
       

        
        let config = {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Accepts": "application/json"},
            body: JSON.stringify({name: nameAnimal, description: descAnimal, image:images})
        }
        
        fetch(`http://127.0.0.1:3000/animals/${id}`, config)
        .then(resp => resp.json())
        .then(animal=>{
            // const animEdit = document.getElementById(`${id}`)
            // animEdit.querySelector('h2').innerText = nameAnimal
            // animEdit.querySelector('p').innerText = descAnimal
            // animEdit.querySelector('img').src = images
            // console.log(animEdit)
        let ani = Animal.all.find(i => i.id == animal.data.attributes.id)
            ani.editUpdate(animal.data.attributes)
            editFormAnimal.innerHTML =""
            let  allEditButtons = document.querySelectorAll('.edit')
           console.log(allEditButtons)
           allEditButtons.forEach(button => {button.disabled = false})

            })
           
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
    
    let animalOption = {
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


 
 newAddAnimal = (e) =>{
     
      const newAnimal = "RedPanda"
     const desAnimal = "this is RedPanda "
     const image = "https://i.natgeofe.com/k/63b1a8a7-0081-493e-8b53-81d01261ab5d/red-panda-full-body_16x9.jpg?w=1200"
     const category_id = 3
    console.log('hello')  
    console.log(image)
    
    let newsAnimal = {
        method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({ name: newAnimal, description: desAnimal, image: image, category_id: category_id})
    }
    
    fetch('http://127.0.0.1:3000/animals', newsAnimal)
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