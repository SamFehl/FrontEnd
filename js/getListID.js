document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("dropdown");
    
  
    // Replace this URL with the API endpoint or data source you want to use
    const apiUrl = "https://localhost:5504/api/v1/userID/";
  
    fetch(apiUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }
        })
        .then((data) => {
            // Assuming the fetched data is an array of objects with 'id' and 'value' properties
            data.forEach((item) => {
                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.id;
                dropdown.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
  });
  
  //Event when user chooses drop down
  /*
  dropdown.addEventListener("change", function(event) {
      const selectedValue = event.target.value;
      // Perform your action based on the selected value
      console.log("Selected value:", selectedValue);
    
      //API
      
      fetch("https://localhost:5504/api/v1/userID/" + selectedValue)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      displayCocktail(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));
  
  
    function displayCocktail(data) {
      const cocktail = data[0];
      const cocktailDiv = document.getElementById("cocktail");
      const textfield = document.getElementById("item_code");
      // cocktail name
      const cocktailName = cocktail.productcode;
      const cocktailDesc = cocktail.description;
      const cocktailPrice = cocktail.price;
      const cocktailProdId = cocktail.productid
      //const productcode = coctail.description
      const heading = document.createElement("h1");
      heading.innerHTML = cocktailName;
      
      
  
  
  
      item_code.value = cocktail.productcode;
      description.value = cocktail.description;
      price.value = cocktail.price;
      productid.value = cocktail.productid;
      quantity.value = cocktail.quantity;
  
      //Capture quantity in session variable for later use
      sessionStorage.setItem("qtyoriginal", cocktail.quantity);
      
      //description.value = cocktail.description;
      //cocktailDiv.appendChild(heading);

    }   

    
  });
  */
  