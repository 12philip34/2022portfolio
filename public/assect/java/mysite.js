
let menu = document.querySelector("#menu-btn");
let header = document.querySelector('.header');

menu.onclick = () =>{
  
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  if(menu.classList.contains('fa-times')) {
    document.querySelector('.header').style.transition = '3s';
    document.querySelector('.header').style.right = '0%';
  }
}


// CLOSING FOR MENU TAG
function herf() {
  // document.getElementById('MyHeader').style.top = '-110%';

  menu.classList.toggle('fa-times');
  header.classList.toggle('active');

  if(menu.classList.contains('fa-times')) {
    document.querySelector('.header').style.transition = '3s';
    document.querySelector('.header').style.right = '0%';
  }

  // if (menu.classList.contains('fa-times')) {
  // menu.classList.remove('fa-times');
  // header.classList.add('active');
  // }
  document.body.classList.remove('active');
}
// else if (condition) {
  




// TOGGLE FOR MENU ICON

let colorToggler = document.querySelector('#color-toggler');
var theme = colorToggler;
theme.onclick = () =>{
  // theme.classList.toggle('fa-sun');
  console.log(theme.classList);
  if ( theme.classList.contains('fa-sun')) {
    theme.classList.remove('fa-sun');
    theme.classList.add('fa-moon');
    document.body.classList.remove('active');

    

  } else if ( theme.classList.contains('fa-moon')) {
    
    
    theme.classList.remove('fa-moon');
    document.body.classList.add('active');
    theme.classList.add('fa-sun');
  }
}
function sendEmail (){
      Email.send({
        Host : "smtp.gmail.com",
        Username : "nssienphilip@gmail.com",
        Password : "kbohwzbtvekmnrbn",
        To : 'nssienphilip@gmail.com',
        From : document.getElementById('yourEmail').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:" + document.getElementById('yourName').value
         + '<br> Email:' + document.getElementById('yourEmail').value
         + '<br> Message:' + document.getElementById('textArea').value

    }).then(
      message => alert('Message Sent Successful!!')
    );
    
}

AOS.init();