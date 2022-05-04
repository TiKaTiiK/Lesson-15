// let newPElement = document.createElement('p');
// newPElement.setAttribute('class', 'text')
// newPElement.textContent = 'Hello World'
// newPElement.style.color = 'blue'


// // console.log(newDivElement);
// // document.body.appendChild(newDivElement)
// document.getElementById('test').appendChild(newPElement)



// let newDivElement = document.createElement('div');
// // newDivElement.setAttribute('class', 'wraper');
// newDivElement.classList.add('wraper_div', 'active');
// newDivElement.classList.remove('active');
// newDivElement.classList.replace('wraper_div', 'text')



// let newAElement = document.createElement('a');
//     newAElement.setAttribute('href', 'https://google.com');
//     newAElement.setAttribute('target', '_blank');
//     newAElement.textContent = 'HELLO';

// newDivElement.appendChild(newAElement);

// document.getElementById('test').appendChild(newDivElement)



// document.querySelectorAll('.container').forEach(function(item){
//     let newAElement = document.createElement('a');
//     newAElement.setAttribute('href', 'https://google.com');
//     newAElement.setAttribute('target', '_blank');
//     newAElement.textContent = 'HELLO';

//     item.appendChild(newAElement)
// })


// document.querySelector('.block')  მხოლოდ პირველ შემხვედრ block-კლასს დაასელექთებს


// document.querySelector('.block').innerHTML = '<p>good morning</p>';

// innertext-ით ვამატებ ან ვცვლი ტექტს ხოლო innerHTML-ით ვამატებ HTML ელემენტს/ტექსტს (ჩვენთან p)



//events

// document.getElementById('click').addEventListener('click', function() {
//     alert('hello')
// })



// let buttons = document.querySelectorAll('.submit');

// buttons.forEach(item => {
//     item.addEventListener('click', function() {
//         alert('hello')
//     })
// })



// let buttons = document.querySelectorAll('#submit');

// function onclickbutton() {
//     alert('hello');
// }


// buttons.forEach(item => {
//     item.addEventListener('click', onclickbutton) 
// })

// function onclickbutton() {
//     buttons.forEach(item => {
//         item.addEventListener('click', function() {
            
//             document.body.classList.add(active)
//         })
//     })

// document.querySelectorAll('.submit').forEach(function(element) {
//     element.addEventListener('click', function() {
//         document.body.classList.toggle('active');
//     console.log("yes");
//     })});


// document.getElementById('submit').addEventListener('click', function(){
//     document.body.classList.toggle('active')
// })


// document.getElementById('username').addEventListener('keydown', function(event){
//     if(event.which == 13 ) {
//         alert('Pressed')
//     } else {
//         console.log('Hello');
//     }
// })

// document.getElementById('username').addEventListener('keydown', function(x) {
//     console.log(x.target.classList.add('active1'));
// })


// document.getElementById('link').addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('google is clicked');
// })


// document.getElementById('username').addEventListener('input', function(x) {
//     x.target.value = x.target.value.toUpperCase();
// })


// let ulelement = document.querySelector('.ul_list');

// let li = document.createElement('li');
// li.textContent = 'Javascript';

// let li2 = document.createElement('li');
// li2.textContent = 'html';

// ulelement.appendChild(li);
// ulelement.appendChild(li2);


let input = document.querySelector('.input-form');
let button = document.querySelector('.button');
let ul = document.querySelector ('.ul_list');


button.addEventListener ('click', function() {
    // 1. get input value
    let value = input.value;
    // 2. add input value in li ul
    let li = document.createElement('li');
    li.classList.add('li-element');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete item';

    deleteButton.addEventListener('click', function(){
        li.remove();
    })
    li.textContent = value;
    li.appendChild(deleteButton);
    ul.appendChild(li);
    // 3. clear input
    input.value = ' ';
});


