// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = "Item List"
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// // console.log(document.all)
// // console.log(document.all[10])
// // document.all[10].textContent = "hello"
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


// // Selectors
// // GET ELEMENT BY ID
// var headerTitle = document.getElementById('header-title')
// // var header = document.getElementById('main-header')
// // console.log(headerTitle)
// // // headerTitle.textContent = "Hello"
// // // headerTitle.innerText = "Good Bye"
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
// // headerTitle.innerHTML = '<h3>Hello</h3>'

// // header.style.border = 'solid 3px #000'

// var title = document.getElementsByClassName('title')
// // console.log(title[0])
// // title[0].style.fontWeight = 'bold'
// // title[0].style.color = 'green'


// GET ELEMENT BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// // error
// // items.style.backgroundColor = '#f4f4f4'

// for(var i = 0; i < items.length ; i++ ){
//     items[i].style.backgroundColor = '#f4f4f4'
// }


// Get element by tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// // error
// // items.style.backgroundColor = '#f4f4f4'

// for(var i = 0; i < li.length ; i++ ){
//     li[i].style.backgroundColor = '#f4f4f4'
// }


// Query Selector
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input')
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'orange'


// Query Selector All
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }


// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.backgroundColor = 'green'

// var items = document.querySelectorAll('.list-group-item');

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold'
// }


// Won't work since no class name is given
// var item = document.getElementsByClassName('list-group-item');
// item[4].style.backgroundColor = '#f4f4f4'

// var item = document.getElementsByTagName('li');
// item[4].style.backgroundColor = '#ccc'


// Query Selector assignment
// var seconditem = document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.backgroundColor = 'green'

// var thirditem = document.querySelector('.list-group-item:nth-child(3)')
// thirditem.style.visibility = 'hidden'

// var Item = document.querySelectorAll('.list-group-item');
// Item[1].style.color = 'green'

// var odd = document.querySelectorAll('li:nth-child(odd)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
// }



// TRAVERSING THE DOM
var itemList = document.querySelector('#items')
// parentNode
// // console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNide);


// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentNode.parentNide);


// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'Yellow'

// firstChild
// console.log(itemList.firstChild)


// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'


// siblings
// next sibling
// console.log(itemList.nextSibling)
// nextelementSibling
// console.log(itemList.nextElementSibling)


// previous sibling
// console.log(itemList.previousSibling);

// prevoius element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'


// Creating DOM ELEMENT
// createElement

// creatr a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'Hello';

// add Id
newDiv.id = 'Hello1'

// add attribute
newDiv.setAttribute('title' , 'Hello Div')

// create text Node
var newDivText =  document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

console.log(newDiv);

// newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1)

var newDiv1 = document.createElement('div');
// add class
newDiv1.className = 'Hello';

// add Id
newDiv1.id = 'Hello1'

// add attribute
newDiv1.setAttribute('title' , 'Hello Div')

// create text Node
var newDivText1 =  document.createTextNode('Hello World');

// add text to div
newDiv1.appendChild(newDivText1)

itemList.insertBefore(newDiv1,itemList.firstElementChild)


