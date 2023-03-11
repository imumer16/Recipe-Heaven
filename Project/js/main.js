let food = {
  get_ingredients: function () {
    var x = document.getElementById("food").value;
    if (x.length == 0) {
      alert("Please enter a Some data");
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
      .then((response) => response.json())
      .then((data) => {
        let html = "";
        if (data.meals) {
          data.meals.forEach((meal) => {
            html += `
                       <div class="col-md-3" data-id="${meal.idMeal}">
                     <div class="card mx-auto" style="width: 100%;">
                         <img src="${meal.strMealThumb}" alt="food" width="200px" class="card-img-top">
                     </div> 
                     <div class="card-body">
                         <p style="font-family:'Lucida Sans Unicode';" class="card-text">${meal.strMeal}</p>
                         <a href="#" class="recipe-btn">Get Recipe</a>
                     </div>
                  </div>
                  `;
          });
          $("#meal").removeClass("notfound");
        } else {
          html = "Sorry, Can't find any recipe!!";
          $("#meal").addClass("notfound");
        }
        $("#meal").html(html);
      })
      .catch((error) => {
        alert("Can't find any recipe");
      });
  },
};

//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    food.get_ingredients();
  }
});
