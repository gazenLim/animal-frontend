class categoriesApi{

    constructor(){
        this.baseUrl = 'http://localhost:3000/categories'
    }

    fetchCategories(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(categories => {
            categories.data.forEach(cate =>{
                
                let category = new Category(cate.attributes)
                category.renderCategory(cate)
                
            })
        })
        
    }



 




    
}