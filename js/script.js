let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');
/*Contador */
let allvalues = document.querySelectorAll(".value");
/*GMAIL*/
const btn = document.getElementById('button');


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
}

/*Contador */

allvalues.forEach((singlevalue) => {
   let startValue = 0;
   let endValue = parseInt(singlevalue.getAttribute("data-value"));
   let duration = Math.floor(3000 / endValue); // más rápido que 20000

   let counter = setInterval(() => {
      startValue += 1;
      singlevalue.textContent = startValue;
      if (startValue === endValue) {
         clearInterval(counter);
      }
   }, duration);
});

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});



document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zghn3y7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});