function searchProduct(){

let input =
document.getElementById("search")
.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

let name =
card.querySelector("h2")
.textContent.toLowerCase();

if(name.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}
