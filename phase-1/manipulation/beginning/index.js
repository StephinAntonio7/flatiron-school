/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector ("#today"));
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll ("#p").forEach (pElement => {
    console.log (pElement);
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector ("#today").textContent)

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector ("#today").textContent = "Today!";
document.querySelector ("#today").style.color = "green";
// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector ("#tomorrow").remove();

// ~ Create + Append a node
// -> createElement(), append()
const image = document.createElement("img"); 
image.src = "data:image/jpeg;base64,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";
document.body.append (image);


// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// document.querySelector ("dates")[John, Mike, Will].append([1,2,3])
// console.log (dates)


function displayList (name, array) {
    // Creates a 'h3' header for the list using the title provided
    const listName = document.createElement("h3")
    listName.textContent = name
    document.body.append(listName)

    const list = document.createElement("ul")
    document.body.append (list)

    //Iterates through the array and creates an 'Li' element for each item
    array.forEach (function (item) {
        const unorderedList = document.createElement ("li")
        unorderedList.textContext = item
        document.querySelector("ul").append(unorderedList)
})
}

const title = "Warriors"
const list = ["Curry", "Thompason", "Green", "Wiggins"]
displayList(title,list)




// 2. Replace the <strong> element with a newly created one.



