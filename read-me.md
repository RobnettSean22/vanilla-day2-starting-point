# Objectives

## Events

- Students can handle events using HTML attributes, Javascript properties, and addEventListener.
- Students can discuess the benefits and drawbacks of each approach.
- Students can define event bubbling.
- Students can use stopPropagation and preventDefault in event handlers.

## DOM

- Students can use querySelector and querySelectorAll to select elements in Javascript.
- Students can use createElement, append, parentNode and remove to dynamically update the DOM.
- Students can use getAttribute and setAttribute to update element properties.

## Compatability and Security

- Students can describe XSS.
- Students can describe polyfills and their importance.


##function set as attributer**
-easy to read and follow
-easy to write
-no speration of concerns
-only one function per argument
 
function set as properties

-easy to write
provide
less obvious events
only one function per event



 ```html
<button id ="mybutton">text
click
<button>
```
```js
document.getElementById('mybutton').onclick= function(event){
   event.stopPropagation();
    alert('youve been alerted');
```

functions as eventListeners
easy to write
provide separartion of concers
events are less obvious 
alloe for multiple functions arracher to a single event
```html
<button id ="mybutton">text</button>
```
```js
function listenrAlert(){
    alert('you were clicked with the addEventListener method')
}

document.getElementById('mybutton').addEventListener('click', listenrAlert) 
```


```html
<div></div>
<div class = "elements"></div>
<div id = 'element'></div>
```

```js
document.getElementByTagName('div')
document.getElementByClsas('element')
document.getElementById('element')
```

//intro to jquery

```js
$('div')
$('.element')
$('#element')
```

2013 browser catch up


```js
document.querySelector('div')
document.querySelector('.element')
document.querySelector('#element')
```