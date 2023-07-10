/*Toggle search button*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    myCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

/*Toggle cart button*/
let myCart = document.querySelector('.my-cart');

document.querySelector('#cart-btn').onclick = () => {
    myCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

/*Toggle login button*/
let loginForm = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    myCart.classList.remove('active');
    navBar.classList.remove('active');
}

/*Toggle menu button*/
let navBar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    myCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    myCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}