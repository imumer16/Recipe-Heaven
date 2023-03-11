const mealDetailsContent = document.querySelector(".meal-details-content");

//   Get Recipe Box
$("#meal").click(function (event) {
  event.preventDefault();
  if ($(event.target).hasClass("recipe-btn")) {
    let mealitem = event.target.parentElement.parentElement;
    $.getJSON(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealitem.dataset.id}`,
      function (data) {
        let meal = data.meals[0];
        let html = `
                             <h2 class="recipe-title" style="color: tomato;">
                    ${meal.strMeal}</h2>
                    <p class="recipe-category">${meal.strCategory}</p>
                    <div class="recipe-instruct">
                        <h3 style="color: tomato;">Instruction:</h3>
                        <p>
                        ${meal.strInstructions}
                        </p>
                    </div>
                    <div class="recipe-meal-img">
                        <img src="${meal.strMealThumb}" alt="" style="width: 18rem;" class="img-fluid">
                    </div>
                    <div class="recipe-link">
                       <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
                    </div>
                             `;
        $(".meal-details-content").html(html);
        mealDetailsContent.parentElement.classList.add("showRecipe");
      }
    );
  }
});

// remove meal recipe
$("#recipe-close-btn").click(function () {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});
