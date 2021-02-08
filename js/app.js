 
const searchFoods = () => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php/=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data =>  displayFoods(data.categories))
}

const displayFoods = foods => {
        console.log(foods)
        const mealContainer = document.getElementById('meals-container');
        mealContainer.innerHTML = ''
   foods.forEach( items => {
     
     const ItemsDiv = document.createElement('div');
     ItemsDiv.className =`item`
     ItemsDiv.innerHTML =`
     <img onclick="getIngredient${items.strCategoryThumb} ${items.strCategory}" src="${items.strCategoryThumb}">
     <h6 class="item-name"> ${items.strCategory}</h6>
     `
     mealContainer.appendChild(ItemsDiv)  
    });   
}

const getIngredient = (CategoryThumb,Category) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/list.php?i=${CategoryThumb}/${Category}`
   
     fetch(url)
    .then(res => res.json())
    .then(data => displayIngredient(data.idIngredient))
}
const displayIngredient = idIngredient =>{
    const ingredientContainer = document.getElementById('ingredient-container');
    ingredientContainer.innerText = idIngredient ;
}

