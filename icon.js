 
 function menuShow(){
  let menuMobile=document.querySelector('.nav-mobile');
  
  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    menuMobile.classList.remove('dark-mode');
  }
  else{
    menuMobile.classList.add('open');
    menuMobile.classList.add('dark-mode');
  }
}
