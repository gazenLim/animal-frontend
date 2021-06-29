class Category{
    static all =[]
    constructor({id, name}){
        this.id = id
        this.name = name
        this.categoryList = document.getElementById('category-list')
        this.element = document.createElement('a')
        this.element.dataset.id = `${id}`
        Category.all.push(this)

        
    }


 



    renderCategory(){
        this.categoryList.append(this.domRender())
        this.addEventListeners()
                
    }

    addEventListeners(){
        this.element.addEventListener('click', this.showCategory)
    }

   
    domRender(){
        this.element.innerHTML = `
           ${this.name}
       `
       return this.element
    }

    get animals(){
        return Animal.all.filter(i => i.category_id == this.id)
    }

    showCategory = (e) =>{
        const display = document.getElementById('cards')
        console.log(this)
        display.innerHTML = ''
        this.animals.forEach(a => {
            a.renderAnimal()
        })
        


    }

   
}