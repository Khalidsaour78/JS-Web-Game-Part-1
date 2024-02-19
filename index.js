// Define the newImage function at the top of index.js

function newImage(src, positionLeft, positionBottom){
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = positionLeft;
    image.style.bottom = positionBottom;
    document.body.append(image);
    return image;
}
// Creating  the green character
newImage('assets/green-character.gif', '100px', '100px');

// Creating the pine tree
newImage('assets/pine-tree.png', '450px', '200px');

//Creating a tree
newImage('assets/tree.png','200px', '300px');

//Creating a pillar
newImage('assets/pillar.png', '350px', '100px');

//Creating a crate
newImage('assets/crate.png', '150px', '200px');

//Creating a well
newImage('assets/well.png', '500px', '425px');

function newItem(src, positionLeft, positionBottom){
    let item = newImage(src, positionLeft, positionBottom);
    item.addEventListener('dblclick', function(){
    item.remove();
})

}
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');