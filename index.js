// Define the newImage function at the top of index.js

function newImage(src, positionLeft, positionBottom){
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = positionLeft;
    image.style.bottom = positionBottom;
    document.body.append(image);
}
// Creating  the green character
newImage('assets/green-character.gif', '100px', '100px');

// Creating the pine tree
newImage('assets/pine-tree.png', '450px', '200px');
