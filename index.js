// console.log(window)
// document.getElementById('mybutton').onclick = function(){
//     alert('youve been alerted');
// }
// document.body.onclick = function(){
//     alert('words');
// }

// document.getElementById('mybutton').onclick= function(event){
//    event.stopPropagation();
//     alert('youve been alerted');
// }
// function listenrAlert(){
//     alert('you were clicked with the addEventListener method')
// }

// document.getElementById('mybutton').addEventListener('click', listenrAlert) 

console.log(document.querySelector('#mybutton'))

document.querySelector('form').onsubmit = function (event){
    event.preventDefault();
    const usernameInput =document.querySelector('#username')
    const passwordInput =document.querySelector('#password')
    document.querySelector('#user-name').innerHTML = usernameInput.value;
    document.querySelector('#user-password').innerHTML = passwordInput.value
    usernameInput.value =''
    passwordInput.value =''
}

function makeSomething(){
    const newElement = document.createElement('a')
    const text = document.createTextNode('let me google that for you')
    newElement.appendChild(text)
    newElement.setAttribute('href','https://lmgtfy.com')
    newElement.setAttribute('class', 'made-link')
    document.body.appendChild(newElement)
}



function removeMadeLink(){
    const elementToRmove = document .querySelector('.made-link')
    const parentNode = elementToRmove.parentNode
    console.log(removeChild)
    parent.removeChild(elementToRmove)
}
document.querySelector('.add-link').onclick = makeSomething;
document.querySelector('.remove-link').onclick = makeSomething;