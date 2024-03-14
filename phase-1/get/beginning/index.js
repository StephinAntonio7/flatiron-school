/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// fetch
// Create= POST
// Read = GET
// Update = PATCH
// Delete = DELETE

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch ("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise , so we'll use .then() to handle its succssful state)
// Here, we'll conery JSON response int unable JS
.then(response => response.json ())
.then(fact => {
    document.querySelector ("#cat").textContent = fact.text;
})
// fetch is a promise , so we'll use .catch to handle its unsuccssful state)
.catch(error => console.log(error))
// A synchronous request to https://anapioficeandfire.com/api/books.
fetch ("https://anapioficeandfire.com/api/books")
.then (response => response.json())
.then(books => {
    const li = document.createElement ("li")
    li.textContent = books [4].name;
    document.querySelector("#got").append(li);
 });


//     books.forEach(book => {
//     const li = document.createElement ("li")
//     li.textContent = book ["name"]
//     document.querySelector("#got").append(li);

// });
 



// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json ();
    document.querySelector("#pokemon").textContent = pokemon.name;
}

getPokemon("ditto")
// ~ Challenge: Make a GET request to an API of your choice!