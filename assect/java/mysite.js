

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



AOS.init();