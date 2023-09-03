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


// Selectors
// GET ELEMENT BY ID
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(headerTitle)
// headerTitle.textContent = "Hello"
// headerTitle.innerText = "Good Bye"
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3>Hello</h3>'

// header.style.border = 'solid 3px #000'

var title = document.getElementsByClassName('title')
// console.log(title[0])
title[0].style.fontWeight = 'bold'
title[0].style.color = 'green'