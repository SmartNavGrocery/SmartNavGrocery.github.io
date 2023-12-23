const chips = ["chips", "patata", "piattos", "nova", "lala", "prawn crackers", "snacku", "moby", "cheezy", "fishda"]

const fruitveg = ["fruits", "vegetables", "apple", "orange", "mango", "onion", "garlic", "parsley", "basil", "grape", "tomato"]

const instantnoodles = ["instant noodles", "lucky me", "nissin", "cup noodles", "pancit canton", "lomi", "pancit shanghai"]

const cannedgoods = ["canned goods", "argentina", "cdo", "purefoods", "spam", "hunts", "meat loaf", "beef loaf", "corned beef", "century tuna", "sardines", "555", "san marino"]

const medical = ["medical", "band aid", "alcohol", "gauze", "ethyl", "isopropyl", "face mask", "plaster", "pregnancy test", "surgical gloves", "cotton", "betadine", "iodine", "scissors", "betadine"]

const condiments = ["condiments", "soy sauce", "vinegar", "pepper", "salt", "garlic powder", "vegetable oil", "sesame oil", "canola oil", "olive oil", "fish sauce", "chili oil", "ketchup", "mustard", "mayonnaise". "heinz", "datu puti", "silver swan", "kikkoman", "mama sita", "oyster sauce"]

const cleaning = ["cleaning", "zonrox", "fabric conditioner", "tissue", "wet wipes", "detergent powder", "detergent bar", "bleach", "laundry detergent", "all purpose cleaner", "downey", "tide", "breeze", "surf", "ariel", "joy", "dishwashing liquid"]

const hygiene = ["hygiene", "bar soap", "hand soap", "shampoo", "conditioner", "lotion", "deodorant", "cotton buds", "cotton swabs", "moisturizer", "toner", "palmolive", "cream silk", "sun silk", "dove", "head n shoulders", "pantene"]

const drinks = ["drinks", "coke", "tang juice drink", "sprite", "royal", "dr pepper", "root beer", "c2", "tang", "beer", "soju", "wine"]

const frozen = ["frozen", "hotdog", "tocino", "chicken", "beef", "fish", "pampanga's best", "tender juicy", "ulam burger", "young pork", "pork sisig", "tapa", "chicken nuggets", "siopao", "dumplings", "siomai", "dimsum", "shark's fin"]





var drinksaisle = document.getElementsByClassName("drinksaisle")[0];
var frozenaisle = document.getElementsByClassName("frozenaisle")[0];
var fruitvegaisle = document.getElementsByClassName("fruitvegaisle")[0];
var cannedgoodsaisle = document.getElementsByClassName("cannedgoodsaisle")[0];
var medicalaisle = document.getElementsByClassName("medicalaisle")[0];
var cleaningaisle = document.getElementsByClassName("cleaningaisle")[0];
var hygieneaisle = document.getElementsByClassName("hygieneaisle")[0];
var condimentsaisle = document.getElementsByClassName("condimentsaisle")[0];
var instantnoodlesaisle = document.getElementsByClassName("instantnoodlesaisle")[0];
var chipsaisle = document.getElementsByClassName("chipsaisle")[0];
var entrance = document.getElementsByClassName("entrance")[0];
var conleftaisle = document.getElementsByClassName("conleftaisle")[0];
var insleftaisle = document.getElementsByClassName("insleftaisle")[0];
var chileftaisle = document.getElementsByClassName("chileftaisle")[0];
var centeraisle = document.getElementsByClassName("centeraisle")[0];
var medconaisle = document.getElementsByClassName("medconaisle")[0];
var fruchiaisle = document.getElementsByClassName("fruchiaisle")[0];
var caninsaisle = document.getElementsByClassName("caninsaisle")[0];




function findpath(){

    resetpath();
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


    const allaisle = Array.from(uniqueaisle)

    changecolor(entrance);

    const aislecount = allaisle.length;

    
    if(aislecount==1){
        if(allaisle.includes("frozen") || allaisle.includes("drinks")){
            changecolor(hygieneaisle);
            changecolor(centeraisle);
            changecolor(cleaningaisle);
            changecolor(frozenaisle);
            if(allaisle.includes("drinks")){
                changecolor(drinksaisle);
            }
        }else if(allaisle.includes("chips") || allaisle.includes("instantnoodles") || allaisle.includes("condiments") || allaisle.includes("hygiene")){
            
            if(allaisle[0]=="chips"){
                changecolor(conleftaisle);
                changecolor(insleftaisle);
                changecolor(chileftaisle);
                changecolor(chipsaisle);
            }else if(allaisle[0]=="instantnoodles"){
                changecolor(conleftaisle);
                changecolor(insleftaisle);
                changecolor(instantnoodlesaisle)
            }else if(allaisle[0]=="condiments"){
                changecolor(conleftaisle);
                changecolor(condimentsaisle);
            }else{
                changecolor(hygieneaisle);
            }

        }else{
            changecolor(hygieneaisle);
            changecolor(centeraisle);
            if(allaisle[0]=="cleaning"){
                changecolor(cleaningaisle);
            }else if(allaisle[0]=="medical"){
                changecolor(medconaisle);
                changecolor(medicalaisle);
            }else if(allaisle[0]=="cannedgoods"){
                changecolor(medconaisle);
                changecolor(caninsaisle);
                changecolor(cannedgoodsaisle);
            }else if(allaisle[0]=="fruitveg"){
                changecolor(medconaisle);
                changecolor(caninsaisle)
                changecolor(fruchiaisle);
                changecolor(fruitvegaisle);
            }
        }

    }

    if((!allaisle.includes("fruitveg") && !allaisle.includes("cannedgoods") && !allaisle.includes("medical") && !allaisle.includes("cleaning")) && (allaisle.includes("chips") || allaisle.includes("instantnoodles") || allaisle.includes("condiments") || allaisle.includes("hygiene")) && (!allaisle.includes("drinks") && !allaisle.includes("frozen"))){
        console.log("1st row only")
        console.log(allaisle.includes("fruitveg"));
        for(var i=0; i<aislecount; i++){
            switch(allaisle[i]){
                
                case "chips":
                    changecolor(conleftaisle);
                    changecolor(insleftaisle);
                    changecolor(chileftaisle);
                    changecolor(chipsaisle);
                    break;
                
                case "instantnoodles":
                    changecolor(conleftaisle);
                    changecolor(insleftaisle);
                    changecolor(instantnoodlesaisle);
                    break;

                case "condiments":
                    changecolor(conleftaisle);
                    changecolor(condimentsaisle);
                    break;

                case "hygiene":
                    changecolor(hygieneaisle);
                    break;
                default:
                    break;
            }
        }
    }else if((allaisle.includes("fruitveg") || allaisle.includes("cannedgoods") || allaisle.includes("medical") || allaisle.includes("cleaning")) && (!allaisle.includes("chips") && !allaisle.includes("instantnoodles") && !allaisle.includes("condiments") && !allaisle.includes("hygiene")) && (!allaisle.includes("drinks") && !allaisle.includes("frozen"))){
        changecolor(hygieneaisle);
        changecolor(centeraisle);
        console.log("2nd row only")
        for(var i = 0; i<aislecount; i++ ){
            switch(allaisle[i]){

                case "fruitveg":
                    changecolor(medconaisle);
                    changecolor(caninsaisle)
                    changecolor(fruchiaisle);
                    changecolor(fruitvegaisle);
                    break;
                
                case "cannedgoods":
                    changecolor(medconaisle);
                    changecolor(caninsaisle);
                    changecolor(cannedgoodsaisle);
                    break;

                case "medical":
                    changecolor(medconaisle);
                    changecolor(medicalaisle);
                    break;

                case "cleaning":
                    changecolor(cleaningaisle);
                    break;

                default:
                    break;

            }
        }


        
    }else if((allaisle.includes("fruitveg") || allaisle.includes("cannedgoods") || allaisle.includes("medical") || allaisle.includes("cleaning")) || (allaisle.includes("chips") || allaisle.includes("instantnoodles") || allaisle.includes("condiments") || allaisle.includes("hygiene")) || (allaisle.includes("drinks") || allaisle.includes("frozen"))){
        console.log("all")
        changecolor(hygieneaisle);
        changecolor(centeraisle);

        for(var i = 0; i<aislecount; i++ ){
            switch(allaisle[i]){
                case "hygiene":
                    changecolor(hygieneaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                
                case "cleaning":
                    changecolor(cleaningaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;

                case "medical":
                    changecolor(medconaisle);
                    changecolor(medicalaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;

                case "condiments":
                    changecolor(medconaisle);
                    changecolor(condimentsaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;

                case "cannedgoods":
                    changecolor(medconaisle);
                    changecolor(caninsaisle);
                    changecolor(cannedgoodsaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;

                case "instantnoodles":
                    changecolor(medconaisle);
                    changecolor(caninsaisle);
                    changecolor(instantnoodlesaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;

                case "fruitveg":
                    changecolor(medconaisle);
                    changecolor(caninsaisle);
                    changecolor(fruchiaisle);
                    changecolor(fruitvegaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    
                    break;

                case "chips":
                    changecolor(medconaisle);
                    changecolor(caninsaisle);
                    changecolor(fruchiaisle);
                    changecolor(chipsaisle);
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;
                
                case "frozen":
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;
                    
                case "drinks":
                    checkfrozendrinks(allaisle[i],allaisle);
                    break;
                
                default:
                    break;

            }


        }
        
    }
    

}


function checkfrozendrinks(currentaisle,arraisle){
    console.log(currentaisle);
    console.log("testt")
    if(arraisle.includes("drinks") && (currentaisle=="fruitveg" || currentaisle == "cannedgoods") && (!arraisle.includes("medical") && !arraisle.includes("cleaning"))){
        console.log("1st")
        
        changecolor(drinksaisle);
        if(arraisle.includes("frozen")){
            changecolor(frozenaisle);
        }

    }else if((arraisle.includes("frozen") || arraisle.includes("drinks")) && (!arraisle.includes("cleaning") && !arraisle.includes("medical") && !arraisle.includes("cannedgoods") && !arraisle.includes("fruitveg") && !arraisle.includes("hygiene") && !arraisle.includes("condiments") && !arraisle.includes("instantnoodles") && !arraisle.includes("chips"))){
        changecolor(centeraisle);
        changecolor(cleaningaisle);
        changecolor(frozenaisle);
        if(arraisle.includes("drinks")){
            changecolor(drinksaisle);
        }
    
    }else if((currentaisle=="cleaning" || currentaisle == "medical") && arraisle.includes("frozen")){
        console.log("2nd")
        changecolor(frozenaisle);
        if(arraisle.includes("drinks")){
            changecolor(drinksaisle);
        }
    }else if(arraisle.includes("frozen") && (!arraisle.includes("cleaning") && !arraisle.includes("medical")) && (arraisle.includes("cannedgoods") || arraisle.includes("fruitveg"))){
        console.log("3rd")
        changecolor(drinksaisle);
        changecolor(frozenaisle);
    }else if(arraisle.includes("drinks") && (!arraisle.includes("cleaning") && !arraisle.includes("medical") && !arraisle.includes("cannedgoods") && !arraisle.includes("fruitveg"))){
        console.log("4th")
        if(arraisle.includes("chips")){
            changecolor(fruchiaisle);
            changecolor(fruitvegaisle);
            changecolor(drinksaisle);
        }else if(arraisle.includes("instantnoodles")){
            changecolor(caninsaisle);
            changecolor(cannedgoodsaisle);
            changecolor(drinksaisle);
        }else if(arraisle.includes("condiments")){
            changecolor(medconaisle);
            changecolor(medicalaisle);
            changecolor(frozenaisle);
            changecolor(drinksaisle);
        }else if(arraisle.includes("hygiene")){
            changecolor(centeraisle);
            changecolor(cleaningaisle);
            changecolor(frozenaisle);
            changecolor(drinksaisle);
        }
    }else if(arraisle.includes("frozen") && (!arraisle.includes("cleaning") && !arraisle.includes("medical") && !arraisle.includes("cannedgoods") && !arraisle.includes("fruitveg"))){
        console.log("5th")
        if(arraisle.includes("hygiene")){
            changecolor(centeraisle);
            changecolor(cleaningaisle);
            changecolor(frozenaisle);

        }else if(arraisle.includes("condiments")){
            changecolor(medconaisle);
            changecolor(medicalaisle);
            changecolor(frozenaisle);
        }else if(arraisle.includes("instantnoodles")){
            changecolor(caninsaisle);
            changecolor(cannedgoodsaisle);
            changecolor(drinksaisle);
            changecolor(frozenaisle);
        }else if(arraisle.includes("chips")){
            changecolor(fruchiaisle);
            changecolor(fruitvegaisle);
            changecolor(drinksaisle);
            changecolor(frozenaisle);
        }
    }else if(arraisle.includes("drinks") && (!arraisle.includes("cannedgoods") && !arraisle.includes("fruitveg"))){
        console.log("6th")
        changecolor(drinksaisle);
        changecolor(frozenaisle);
    }

}



function changecolor(classaisle){
    classaisle.style.backgroundColor  = 'red';
    console.log(classaisle);
    if(classaisle == conleftaisle || classaisle == insleftaisle || classaisle == chileftaisle || classaisle == medconaisle || classaisle == caninsaisle || classaisle == fruchiaisle || classaisle == frozenaisle || classaisle == drinksaisle){
        //classaisle.style.backgroundImage =  "linear-gradient(180deg, transparent, transparent 50%, #fff 50%, #fff 100%), linear-gradient(90deg, #c48686, #c48686, #c48686, #c48686, #c48686)"

    }else{
        //classaisle.style.backgroundImage =  "linear-gradient(90deg, transparent, transparent 50%, #fff 50%, #fff 100%), linear-gradient(90deg, #c48686, #c48686, #c48686, #c48686, #c48686)"
    }
    classaisle.classList.add('breathing');


}

function resetcolor(classaisle){
    classaisle.style.backgroundColor  = '';
    classaisle.style.backgroundImage =  ""
    classaisle.classList.add('nobreathing');
    classaisle.classList.remove('breathing');
    classaisle.classList.remove('nobreathing');
}




function resetpath(){
    resetcolor(drinksaisle);
    resetcolor(frozenaisle);
    resetcolor(fruitvegaisle);
    resetcolor(cannedgoodsaisle);
    resetcolor(medicalaisle);
    resetcolor(cleaningaisle); 
    resetcolor(hygieneaisle);
    resetcolor(condimentsaisle); 
    resetcolor(instantnoodlesaisle); 
    resetcolor(chipsaisle); 
    resetcolor(entrance);
    resetcolor(conleftaisle);
    resetcolor(insleftaisle);
    resetcolor(chileftaisle);
    resetcolor(centeraisle);
    resetcolor(medconaisle);
    resetcolor(fruchiaisle);
    resetcolor(caninsaisle);
}
