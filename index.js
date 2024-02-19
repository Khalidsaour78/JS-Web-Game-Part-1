// Creating the newImage function

function newImage(src, positionLeft, positionBottom){
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = positionLeft;
    image.style.bottom = positionBottom;
    document.body.append(image);
    return image;
}

newImage('assets/green-character.gif', '100px', '100px');// Creating  the green character
newImage('assets/pine-tree.png', '450px', '200px');// Creating the pine tree
newImage('assets/tree.png','200px', '300px');//Creating a tree
newImage('assets/pillar.png', '350px', '100px');//Creating a pillar
newImage('assets/crate.png', '150px', '200px');//Creating a crate
newImage('assets/well.png', '500px', '425px');//Creating a well

//Function for creating new item with double click removal

function newItem(src, positionLeft, positionBottom){
    let item = newImage(src, positionLeft, positionBottom);
    item.addEventListener('dblclick', function(){
    item.remove();
})

}
//Creating the items
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');