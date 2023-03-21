"use strict";
function getfakeapi() {
    fetch('https://fakestoreapi.com/products')
        .then(item => item.json())
        .then(item => console.log(item));
}
getfakeapi();
