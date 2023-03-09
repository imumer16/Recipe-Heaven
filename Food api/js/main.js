let quote_of_the_day = {
  get_quote: function () {
    var x = document.getElementById("food").value;
    if (x.length == 0) {
      alert("Please enter a quote");
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        const d1 = document.getElementById("container");
        d1.innerHTML = "";
        for (let index = 0; index < data.meals.length; index++) {
          const d = `          <h1>${data.meals[0].strMeal}</h1>
          <img src=${data.meals[0].strMealThumb} alt=${data.meals[0].strMeal} >
          <ul>
            <li>${
              data.meals[0].strIngredient1 + " ~ " + data.meals[0].strMeasure1
            }</li>
            <li>${
              data.meals[0].strIngredient2 + " ~ " + data.meals[0].strMeasure2
            }</li>
            <li>${
              data.meals[0].strIngredient3 + " ~ " + data.meals[0].strMeasure3
            }</li>
            <li>${
              data.meals[0].strIngredient4 + " ~ " + data.meals[0].strMeasure4
            }</li>
            <li>${
              data.meals[0].strIngredient5 + " ~ " + data.meals[0].strMeasure5
            }</li>
            <li>${
              data.meals[0].strIngredient6 + " ~ " + data.meals[0].strMeasure6
            }</li>
            <li>${
              data.meals[0].strIngredient7 + " ~ " + data.meals[0].strMeasure7
            }</li>
            <li>${
              data.meals[0].strIngredient8 + " ~ " + data.meals[0].strMeasure8
            }</li>
            <li>${
              data.meals[0].strIngredient9 + " ~ " + data.meals[0].strMeasure9
            }</li>
            <li>${
              data.meals[0].strIngredient10 + " ~ " + data.meals[0].strMeasure10
            }</li>
            <li>${
              data.meals[0].strIngredient11 + " ~ " + data.meals[0].strMeasure11
            }</li>
            <li>${
              data.meals[0].strIngredient12 + " ~ " + data.meals[0].strMeasure12
            }</li>
            <li>${
              data.meals[0].strIngredient13 + " ~ " + data.meals[0].strMeasure13
            }</li>
            <li>${
              data.meals[0].strIngredient14 + " ~ " + data.meals[0].strMeasure14
            }</li>
            <li>${
              data.meals[0].strIngredient15 + " ~ " + data.meals[0].strMeasure15
            }</li>
            <li>${
              data.meals[0].strIngredient16 + " ~ " + data.meals[0].strMeasure16
            }</li>
            <li>${
              data.meals[0].strIngredient17 + " ~ " + data.meals[0].strMeasure17
            }</li>
            <li>${
              data.meals[0].strIngredient18 + " ~ " + data.meals[0].strMeasure18
            }</li>
            <li>${
              data.meals[0].strIngredient19 + " ~ " + data.meals[0].strMeasure19
            }</li>
            <li>${
              data.meals[0].strIngredient20 + " ~ " + data.meals[0].strMeasure20
            }</li>

          </ul>`;

          console.log(d);
          const para = document.createElement("p");
          para.className = "element";

          para.innerHTML = `
            <img src=${data.meals[index].strMealThumb} alt=${data.meals[index].strMeal} width=300px;height=300px; >
            <h3>${data.meals[index].strMeal}</h3>
            <h4> Origin: ${data.meals[index].strArea}</h4>
          

            <button id="my">Open</button>

            <!-- The Modal -->
            <div id="myModal" class="modal">
            
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close">&times;</span>
                <p>${d}</p>
              </div>
            
            </div>
            


           `;

          d1.appendChild(para);
        }

        // var myWindow = window.open("", "MsgWindow");

        // myWindow.document.write(`
        // <h1>${data.meals[0].strMeal}</h1>
        // <img src=${data.meals[0].strMealThumb} alt=${data.meals[0].strMeal} >
        // <ul>
        //   <li>${
        //     data.meals[0].strIngredient1 + " ~ " + data.meals[0].strMeasure1
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient2 + " ~ " + data.meals[0].strMeasure2
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient3 + " ~ " + data.meals[0].strMeasure3
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient4 + " ~ " + data.meals[0].strMeasure4
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient5 + " ~ " + data.meals[0].strMeasure5
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient6 + " ~ " + data.meals[0].strMeasure6
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient7 + " ~ " + data.meals[0].strMeasure7
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient8 + " ~ " + data.meals[0].strMeasure8
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient9 + " ~ " + data.meals[0].strMeasure9
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient10 + " ~ " + data.meals[0].strMeasure10
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient11 + " ~ " + data.meals[0].strMeasure11
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient12 + " ~ " + data.meals[0].strMeasure12
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient13 + " ~ " + data.meals[0].strMeasure13
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient14 + " ~ " + data.meals[0].strMeasure14
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient15 + " ~ " + data.meals[0].strMeasure15
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient16 + " ~ " + data.meals[0].strMeasure16
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient17 + " ~ " + data.meals[0].strMeasure17
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient18 + " ~ " + data.meals[0].strMeasure18
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient19 + " ~ " + data.meals[0].strMeasure19
        //   }</li>
        //   <li>${
        //     data.meals[0].strIngredient20 + " ~ " + data.meals[0].strMeasure20
        //   }</li>

        // </ul>

        // `);
      })
      .catch((error) => {
        alert("101");
      });
  },
};

//Event "Click Search button"
document
  .getElementById("myBtn")
  .addEventListener("click", quote_of_the_day.get_quote());

//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    quote_of_the_day.get_quote();
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("my");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
