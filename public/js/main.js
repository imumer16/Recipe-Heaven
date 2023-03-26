//To Get Random Recipe
for (let index = 0; index < 12; index++) {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `

                <div class="row" data-id="${meal.idMeal}">
                  <div class="max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src="${meal.strMealThumb}" alt="${meal.idMeal}" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${meal.strMeal}</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Area: ${meal.strArea}, Category: ${meal.strCategory}.</p>
                      <a href="#"   id="myBtn" onclick="popup_Menu()"class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
                </div>
              </div>
                `;
        });
      }
      $("#meal").append(html);
    })
    .catch((error) => {
      //custom alert
      modal.innerHTML = `
      <div class="modal-content">
      <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Danger alert!</span><br>Failed in geting Random Recipets From DataBase.<br>Check your internet connection or Reload Page.
      </div>
    </div>
          </div>
            `;
      modal.style.display = "block";
    });
}

//Search for Recipe
let food = {
  get_ingredients: function () {
    var x = document.getElementById("default-search").value;
    if (x.length == 0) {
      modal.innerHTML = `
      <div class="modal-content">
      <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Danger alert!</span> Please enter a ingredient and try submitting again.
      </div>
    </div>
          </div>
            `;
      modal.style.display = "block";
      // alert("Please enter a Some data");
      return;
    } else {
      // console.log(x);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          let html = "";
          if (data.meals) {
            data.meals.forEach((meal) => {
              html += `

              <div class="row" data-id="${meal.idMeal}">
              <div class="max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="${meal.strMealThumb}" alt="${meal.idMeal}" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${meal.strMeal}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Area: ${meal.strArea}, Category: ${meal.strCategory}.</p>
                  <a id="myBtn" href="#" onclick="popup_Menu()" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>
          </div>
                    `;
            });
            $("#meal").removeClass("notfound");
          } else {
            modal.innerHTML = `
            <div class="modal-content">
            <div class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Warning alert!</span> Cannot find Recipe in DataBase.
            </div>
          </div>

                </div>
                  `;
            modal.style.display = "block";
          }
        })
        .catch((error) => {
          modal.innerHTML = `
          <div class="modal-content">
          <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Danger alert!</span><br>Failed in geting Random Recipets From DataBase.<br>Check your internet connection or Reload Page.
          </div>
        </div>
              </div>
                `;
          modal.style.display = "block";
        });
    }
  },
};

//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    food.get_ingredients();
  }
});

// Popup meun when click on Read more
var modal = document.getElementById("myModal");
function popup_Menu() {
  let mealitem = event.target.parentElement.parentElement.parentElement;
  // console.log(mealitem.dataset.id);
  $.getJSON(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealitem.dataset.id}`,
    function (data) {
      // console.log(data.meals[0].strMeal);
      for (let index = 0; index < data.meals.length; index++) {
        let m1 = "";
        if (data.meals[index].strIngredient1 != "") {
          m1 = `              ${
            data.meals[index].strIngredient1 +
            " ~ " +
            data.meals[index].strMeasure1
          }`;
        }
        let m2 = "";
        if (data.meals[index].strIngredient2 != "") {
          m2 = `              ${
            ", " +
            data.meals[index].strIngredient2 +
            " ~ " +
            data.meals[index].strMeasure2
          }`;
        }
        let m3 = "";
        if (data.meals[index].strIngredient3 != "") {
          m3 = `              ${
            ", " +
            data.meals[index].strIngredient3 +
            " ~ " +
            data.meals[index].strMeasure3
          }`;
        }
        let m4 = "";
        if (data.meals[index].strIngredient4 != "") {
          m4 = `              ${
            ", " +
            data.meals[index].strIngredient4 +
            " ~ " +
            data.meals[index].strMeasure4
          }`;
        }
        let m5 = "";
        if (data.meals[index].strIngredient5 != "") {
          m5 = `              ${
            ", " +
            data.meals[index].strIngredient5 +
            " ~ " +
            data.meals[index].strMeasure5
          }`;
        }
        let m6 = "";
        if (data.meals[index].strIngredient6 != "") {
          m6 = `              ${
            ", " +
            data.meals[index].strIngredient6 +
            " ~ " +
            data.meals[index].strMeasure6
          }`;
        }
        let m7 = "";
        if (data.meals[index].strIngredient7 != "") {
          m7 = `              ${
            ", " +
            data.meals[index].strIngredient7 +
            " ~ " +
            data.meals[index].strMeasure7
          }`;
        }
        let m8 = "";
        if (data.meals[index].strIngredient8 != "") {
          m8 = `              ${
            ", " +
            data.meals[index].strIngredient8 +
            " ~ " +
            data.meals[index].strMeasure8
          }`;
        }
        let m9 = "";
        if (data.meals[index].strIngredient9 != "") {
          m9 = `              ${
            ", " +
            data.meals[index].strIngredient9 +
            " ~ " +
            data.meals[index].strMeasure9
          }`;
        }
        let m10 = "";
        if (data.meals[index].strIngredient10 != "") {
          m10 = `              ${
            ", " +
            data.meals[index].strIngredient10 +
            " ~ " +
            data.meals[index].strMeasure10
          }`;
        }
        let m11 = "";
        if (data.meals[index].strIngredient11 != "") {
          m11 = `              ${
            ", " +
            data.meals[index].strIngredient11 +
            " ~ " +
            data.meals[index].strMeasure11
          }`;
        }
        let m12 = "";
        if (data.meals[index].strIngredient12 != "") {
          m12 = `              ${
            ", " +
            data.meals[index].strIngredient12 +
            " ~ " +
            data.meals[index].strMeasure12
          }`;
        }
        let m13 = "";
        if (data.meals[index].strIngredient13 != "") {
          m13 = `              ${
            ", " +
            data.meals[index].strIngredient13 +
            " ~ " +
            data.meals[index].strMeasure13
          }`;
        }
        let m14 = "";
        if (data.meals[index].strIngredient14 != "") {
          m14 = `              ${
            ", " +
            data.meals[index].strIngredient14 +
            " ~ " +
            data.meals[index].strMeasure14
          }`;
        }
        let m15 = "";
        if (data.meals[index].strIngredient15 != "") {
          m15 = `              ${
            ", " +
            data.meals[index].strIngredient15 +
            " ~ " +
            data.meals[index].strMeasure15
          }`;
        }
        let m16 = "";
        if (data.meals[index].strIngredient16 != "") {
          m16 = `              ${
            ", " +
            data.meals[index].strIngredient16 +
            " ~ " +
            data.meals[index].strMeasure16
          }`;
        }
        let m17 = "";
        if (data.meals[index].strIngredient17 != "") {
          m17 = `              ${
            ", " +
            data.meals[index].strIngredient17 +
            " ~ " +
            data.meals[index].strMeasure17
          }`;
        }
        let m18 = "";
        if (data.meals[index].strIngredient18 != "") {
          m18 = `              ${
            ", " +
            data.meals[index].strIngredient18 +
            " ~ " +
            data.meals[index].strMeasure18
          }`;
        }
        let m19 = "";
        if (data.meals[index].strIngredient19 != "") {
          m19 = `              ${
            ", " +
            data.meals[index].strIngredient19 +
            " ~ " +
            data.meals[index].strMeasure19
          }`;
        }
        let m20 = "";
        if (data.meals[index].strIngredient20 != "") {
          m20 = `              ${
            ", " +
            data.meals[index].strIngredient20 +
            " ~ " +
            data.meals[index].strMeasure20
          }`;
        }
        modal.innerHTML = "";
        modal.innerHTML = `
      <div class="modal-content">


      <div class="flex justify-center items-center w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h4 class="text-2xl font-bold dark:text-white">
          ${data.meals[0].strMeal}
            </h4>
            <button type="button" onclick="Close()"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span i class="sr-only">&times;</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <h5 class="text-xl font-bold dark:text-white">Instructions</h5>
           
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            ${data.meals[0].strInstructions}
            </p>
            <h5 class="text-xl font-bold dark:text-white">Ingredients</h5>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           
            ${m1} 
            ${m2}
            ${m3} 
            ${m4}
            ${m5}
            ${m6}
            ${m7}
            ${m8}
            ${m9}
            ${m10}
            ${m11}
            ${m12}
            ${m13}
            ${m14}
            ${m15}
            ${m16}
            ${m17}
            ${m18}
            ${m19}
            ${m20}
          </ol>
            </p>
          </div>
          <div class="flex justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <a href=" ${data.meals[0].strYoutube}"class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Open Video</a>
          <a href=" ${data.meals[0].strSource}"class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Open Source</a>
        </div>
        </div>
      </div>


    </div>
      
      
      `;
        modal.style.display = "block";
      }
    }
  );
}
// When the user clicks on (x), close the modal
function Close() {
  // console.log("Closing modal");
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
