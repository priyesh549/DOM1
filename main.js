var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);


// delete event
itemList.addEventListener('click',removeItem);


// filter item
filter.addEventListener('keyup',filterItems);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;
    var descItem = document.getElementById('detail').value;

    // console.log(descItem)

    // create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // add text node with input
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(` ${descItem}`))

    // create a delete button element
    var deleteBtn = document.createElement('button')

    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'))


    li.appendChild(deleteBtn)




    itemList.appendChild(li);

    // console.log(li);
    // console.log(1);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// filter items
function filterItems(e){
    // convert to lowertext
    var text = e.target.value.toLowerCase();

    // get list
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName1 = item.childNodes[0].textContent;
        var itemName2 = item.childNodes[1].textContent;
        var itemName;
        if(itemName2 !== 'X'){
           itemName = itemName1 + itemName2;
        }
        else{
            itemName = itemName1;
        }
        console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}