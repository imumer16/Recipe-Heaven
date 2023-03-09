let Food = {
  getData: function () {
    // var x = document.getElementById("food").value;
    var x = document.querySelector(".form__field").value;
    if (x.length == 0) {
      document.querySelector(".form__field").value = "Invalid Ingredient Name";
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
      .then((response) => response.json())
      .then((data) => {
        // console.table(data);

        const d1 = document.getElementById("container");
        d1.innerHTML = "";
        for (let index = 0; index < data.meals.length; index++) {
          let m1 = "";
          if (data.meals[index].strIngredient1 != "") {
            m1 = `              <li>${
              data.meals[index].strIngredient1 +
              " ~ " +
              data.meals[index].strMeasure1
            }</li>`;
          }
          let m2 = "";
          if (data.meals[index].strIngredient2 != "") {
            m2 = `              <li>${
              data.meals[index].strIngredient2 +
              " ~ " +
              data.meals[index].strMeasure2
            }</li>`;
          }
          let m3 = "";
          if (data.meals[index].strIngredient3 != "") {
            m3 = `              <li>${
              data.meals[index].strIngredient3 +
              " ~ " +
              data.meals[index].strMeasure3
            }</li>`;
          }
          let m4 = "";
          if (data.meals[index].strIngredient4 != "") {
            m4 = `              <li>${
              data.meals[index].strIngredient4 +
              " ~ " +
              data.meals[index].strMeasure4
            }</li>`;
          }
          let m5 = "";
          if (data.meals[index].strIngredient5 != "") {
            m5 = `              <li>${
              data.meals[index].strIngredient5 +
              " ~ " +
              data.meals[index].strMeasure5
            }</li>`;
          }
          let m6 = "";
          if (data.meals[index].strIngredient6 != "") {
            m6 = `              <li>${
              data.meals[index].strIngredient6 +
              " ~ " +
              data.meals[index].strMeasure6
            }</li>`;
          }
          let m7 = "";
          if (data.meals[index].strIngredient7 != "") {
            m7 = `              <li>${
              data.meals[index].strIngredient7 +
              " ~ " +
              data.meals[index].strMeasure7
            }</li>`;
          }
          let m8 = "";
          if (data.meals[index].strIngredient8 != "") {
            m8 = `              <li>${
              data.meals[index].strIngredient8 +
              " ~ " +
              data.meals[index].strMeasure8
            }</li>`;
          }
          let m9 = "";
          if (data.meals[index].strIngredient9 != "") {
            m9 = `              <li>${
              data.meals[index].strIngredient9 +
              " ~ " +
              data.meals[index].strMeasure9
            }</li>`;
          }
          let m10 = "";
          if (data.meals[index].strIngredient10 != "") {
            m10 = `              <li>${
              data.meals[index].strIngredient10 +
              " ~ " +
              data.meals[index].strMeasure10
            }</li>`;
          }
          let m11 = "";
          if (data.meals[index].strIngredient11 != "") {
            m11 = `              <li>${
              data.meals[index].strIngredient11 +
              " ~ " +
              data.meals[index].strMeasure11
            }</li>`;
          }
          let m12 = "";
          if (data.meals[index].strIngredient12 != "") {
            m12 = `              <li>${
              data.meals[index].strIngredient12 +
              " ~ " +
              data.meals[index].strMeasure12
            }</li>`;
          }
          let m13 = "";
          if (data.meals[index].strIngredient13 != "") {
            m13 = `              <li>${
              data.meals[index].strIngredient13 +
              " ~ " +
              data.meals[index].strMeasure13
            }</li>`;
          }
          let m14 = "";
          if (data.meals[index].strIngredient14 != "") {
            m14 = `              <li>${
              data.meals[index].strIngredient14 +
              " ~ " +
              data.meals[index].strMeasure14
            }</li>`;
          }
          let m15 = "";
          if (data.meals[index].strIngredient15 != "") {
            m15 = `              <li>${
              data.meals[index].strIngredient15 +
              " ~ " +
              data.meals[index].strMeasure15
            }</li>`;
          }
          let m16 = "";
          if (data.meals[index].strIngredient16 != "") {
            m16 = `              <li>${
              data.meals[index].strIngredient16 +
              " ~ " +
              data.meals[index].strMeasure16
            }</li>`;
          }
          let m17 = "";
          if (data.meals[index].strIngredient17 != "") {
            m17 = `              <li>${
              data.meals[index].strIngredient17 +
              " ~ " +
              data.meals[index].strMeasure17
            }</li>`;
          }
          let m18 = "";
          if (data.meals[index].strIngredient18 != "") {
            m18 = `              <li>${
              data.meals[index].strIngredient18 +
              " ~ " +
              data.meals[index].strMeasure18
            }</li>`;
          }
          let m19 = "";
          if (data.meals[index].strIngredient19 != "") {
            m19 = `              <li>${
              data.meals[index].strIngredient19 +
              " ~ " +
              data.meals[index].strMeasure19
            }</li>`;
          }
          let m20 = "";
          if (data.meals[index].strIngredient20 != "") {
            m20 = `              <li>${
              data.meals[index].strIngredient20 +
              " ~ " +
              data.meals[index].strMeasure20
            }</li>`;
          }

          const para = document.createElement("p");
          para.className = "element";

          para.innerHTML = `
          <img src=${data.meals[index].strMealThumb} alt=${
            data.meals[index].strMeal
          } width=400px ;height=400px; >
          <h3>${data.meals[index].strMeal}</h3>
          <h4> Category: ${data.meals[index].strCategory}</h4>
          <h4> Area: ${data.meals[index].strArea}</h4>
            <ol>
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

            <div class="Instructions">
              ${data.meals[index].strInstructions}
            </div>            

            <h3>
              <a href="${data.meals[index].strSource}">Source</a>
                
            </h3>

            <iframe width="95%" height="300px" src="${data.meals[
              index
            ].strYoutube.replace("watch?v=", "embed/")}" title="${
            data.meals[index].strMeal
          }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

     


 


           `;

          d1.appendChild(para);
        }
      })
      .catch((error) => {
        document.querySelector(".form__field").value =
          "Invalid Ingredient Name";
        document.querySelector(".form__field").style.color = "red";

        setTimeout(function () {
          location.reload();
        }, 3000);
      });
  },
};

//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Food.getData();
  }
});

//Event "Enter key"
document.querySelector(".form__field").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Food.getData();
  }
});
