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


var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.backgroundColor = 'green'

var items = document.querySelectorAll('.list-group-item');

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}

