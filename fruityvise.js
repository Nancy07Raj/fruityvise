let fruitList = document.getElementById("fruitList");
let fruitText = document.getElementById("fruit-text");
let searchbtn = document.getElementById("searchbtn");
let result = document.getElementById("result");


searchbtn.addEventListener("click",searchFruit);
function searchFruit()
{
    result.innerHTML = "";
    const category = fruitText.value.trim();
    if(category == "")
    {
    alert("Enter Fruit Name");
    }
    else
    {
        fetchfun();
    }
}

async function fetchfun(){

        let fet = await fetch("./fruityvise.json");
        let res = await  fet.json();
        insertValues(res);
        console.log(res)
        }
function insertValues(data)

{
    let category = fruitText.value;
    let jsonlength = data.length;
    let flag = "false";
    try{
    for(i=0; i<=jsonlength;i++)
    {
        if (category.toLowerCase() == data[i].name.toLowerCase())
        {
        result.innerHTML = `
        <h1> ${data[i].name}</h1>
        <p> carbohydrates : ${data[i].nutritions.carbohydrates}
        <p> protein : ${data[i].nutritions.protein}
        <p> Fat : ${data[i].nutritions.fat}
        <p> calories : ${data[i].nutritions.calories}
        <p> Sugar : ${data[i].nutritions.sugar}
         `;
         flag = "true";
         console.log(data);
         fruitText.value ="";
        }
    }
}
    finally {
    if(flag == "false")
    alert("Fruit you entered not found");
    fruitText.value ="";

    }
}
