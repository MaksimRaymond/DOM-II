// Your code goes here
let navBar = document.querySelector("nav");
let h1 = document.querySelector('h1');
let body = document.querySelector('body');
let p =document.querySelector('p');
const input = document.querySelector('input');
const password = document.querySelector('input[type="password"]');





navBar.addEventListener("mouseover", function( event ) {   

    event.target.style.color = "orange";


setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);



navBar.addEventListener('dblclick', function (event) {
alert('double click is popping off');
});





h1.addEventListener('click', function (event) {
    alert('one click is popping off');
    });





    body.addEventListener("keydown", event => {
       alert('key was pressed')
      });





      window.addEventListener('scroll', function(e) {
       alert('im annoying')
      });





p.addEventListener('copy', (event) => {
   alert('you cant copy this')
});




window.addEventListener('paste', function(e) {
       alert('dont paste this')
      });



     
      

      password.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';    
      });
      
      password.addEventListener('blur', (event) => {
        event.target.style.background = '';    
      });




      input.addEventListener('select', function(e) {
        alert('You have select this')
       });
       