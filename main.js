var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit',addItem);


// delete event
itemList.addEventListener('click',removeItem);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // add text node with input
    li.appendChild(document.createTextNode(newItem));

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