const chips = ["patata", "piattos", "nova", "lala", "prawn crackers", "snacku", "moby"]

const fruitveg = ["apple", "orange", "mango", "onion", "garlic", "parsley", "basil", "grape", "tomato"]

const instantnoodles = ["lucky me", "nissin", "cup noodles", "pancit canton", "lomi", "pancit shanghai"]

const cannedgoods = ["argentina", "cdo", "purefoods", "spam", "hunts", "meat loaf", "beef loaf", "corned beef", "century tuna", "sardines", "555", "san marino"]

const medical = ["band aid", "alcohol", "gauze", "ethyl", "isopropyl", "face mask", "plaster", "pregnancy test", "surgical gloves", "cotton", "betadine", "iodine", "scissors"]

const condiments = ["soy sauce", "vinegar", "pepper", "salt", "garlic powder", "vegetable oil", "sesame oil", "canola oil", "olive oil", "fish sauce", "chili oil", "ketchup", "mustard", "mayonnaise"]

const cleaning = ["zonrox", "fasbric conditioner", "tissue", "wet wipes", "detergent powder", "detergent bar", "bleackh", "laundry detergent", "all purpose cleaner"]

const hygiene = ["bar soap", "hand soap", "shampoo", "conditioner", "lotion", "deodorant", "cotton buds", "cotton swabs", "moisturizer", "toner"]

const drinks = ["coke", "tang juice drink", "sprite", "royal", "dr pepper", "root beer", "c2", "tang", "beer", "soju", "wine"]

const frozen = ["hotdog", "tocino", "chicken", "beef", "fish", "pampanga's best", "tender juicy", "ulam burger", "young pork", "pork sisig", "tapa", "chicken nuggets", "siopao", "dumplings", "siomai", "dimsum", "shark's fin"]



function findpath(){
    // Get the content of the text area
    var textareaContent = document.getElementById("userentry").value;

    // Split the content into rows
    var rows = textareaContent.split('\n');
    // Initialize an array to store the items
    var itemsArray = [];

    var aisles = [];

    // Iterate through each row
    for (var i = 0; i < rows.length; i++) {
        // Split each row into items using commas
        var rowItems = rows[i].split(',');

        // Trim each item to remove leading/trailing spaces
        rowItems = rowItems.map(item => item.trim());

        // Add the rowItems array to the main itemsArray
        itemsArray.push(rowItems);
        
    }


    for(var i=0; i<itemsArray[0].length; i++){
        if(chips.includes(itemsArray[0][i])){
            aisles.push("chips");
        }else if(fruitveg.includes(itemsArray[0][i])){
            aisles.push("fruitveg");
        }else if(instantnoodles.includes(itemsArray[0][i])){
            aisles.push("instantnoodles");
        }else if(cannedgoods.includes(itemsArray[0][i])){
            aisles.push("cannedgoods");
        }else if(medical.includes(itemsArray[0][i])){
            aisles.push("medical");
        }else if(condiments.includes(itemsArray[0][i])){
            aisles.push("condiments");
        }else if(cleaning.includes(itemsArray[0][i])){
            aisles.push("cleaning");
        }else if(hygiene.includes(itemsArray[0][i])){
            aisles.push("hygiene");
        }else if(drinks.includes(itemsArray[0][i])){
            aisles.push("drinks");
        }else if(frozen.includes(itemsArray[0][i])){
            aisles.push("frozen");
        }
    }

  const uniqueaisle = new Set(aisles);
  
}
