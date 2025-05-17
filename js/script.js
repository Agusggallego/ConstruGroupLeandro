let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');
/*Contador */
let allvalues = document.querySelectorAll(".value");


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

const btn = document.getElementById('button');
const form = document.getElementById('form');

function setFieldState(input, errorSpan, isValid, message = "") {
  if (isValid) {
    input.classList.remove('error');
    input.classList.add('success');
    errorSpan.textContent = "";
  } else {
    input.classList.remove('success');
    input.classList.add('error');
    errorSpan.textContent = message;
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const empresaInput = document.getElementById('empresa_id');
  const nombreInput = document.getElementById('name');
  const emailInput = document.getElementById('id_gmail');
  const telefonoInput = document.getElementById('tel_num');
  const mensajeInput = document.getElementById('message');

  const empresa = empresaInput.value.trim();
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const telefonoRegex = /^[0-9]{8,}$/;
  const inputSanitizer = /[<>{}();'"\\]/;

  let valid = true;

  // Error spans
  const empresaError = document.getElementById('empresa_error');
  const nameError = document.getElementById('name_error');
  const emailError = document.getElementById('email_error');
  const telError = document.getElementById('tel_error');
  const msgError = document.getElementById('msg_error');

  // Empresa
  if (!empresa) {
    setFieldState(empresaInput, empresaError, false, "El campo Empresa es obligatorio.");
    valid = false;
  } else if (inputSanitizer.test(empresa)) {
    setFieldState(empresaInput, empresaError, false, "No se permiten caracteres peligrosos.");
    valid = false;
  } else {
    setFieldState(empresaInput, empresaError, true);
  }

  // Nombre
  if (!nombre) {
    setFieldState(nombreInput, nameError, false, "El campo Nombre es obligatorio.");
    valid = false;
  } else if (inputSanitizer.test(nombre)) {
    setFieldState(nombreInput, nameError, false, "No se permiten caracteres peligrosos.");
    valid = false;
  } else {
    setFieldState(nombreInput, nameError, true);
  }

  // Email
  if (!email) {
    setFieldState(emailInput, emailError, false, "El campo Gmail es obligatorio.");
    valid = false;
  } else if (!emailRegex.test(email)) {
    setFieldState(emailInput, emailError, false, "El email debe ser un Gmail válido.");
    valid = false;
  } else {
    setFieldState(emailInput, emailError, true);
  }

  // Teléfono
  if (!telefono) {
    setFieldState(telefonoInput, telError, false, "El campo Teléfono es obligatorio.");
    valid = false;
  } else if (!telefonoRegex.test(telefono)) {
    setFieldState(telefonoInput, telError, false, "Debe contener al menos 8 dígitos numéricos.");
    valid = false;
  } else {
    setFieldState(telefonoInput, telError, true);
  }

  // Mensaje
  if (!mensaje) {
    setFieldState(mensajeInput, msgError, false, "El campo Mensaje es obligatorio.");
    valid = false;
  } else if (mensaje.length < 10) {
    setFieldState(mensajeInput, msgError, false, "El mensaje debe tener al menos 10 caracteres.");
    valid = false;
  } else if (inputSanitizer.test(mensaje)) {
    setFieldState(mensajeInput, msgError, false, "No se permiten caracteres peligrosos.");
    valid = false;
  } else {
    setFieldState(mensajeInput, msgError, true);
  }

  if (!valid) return;

  // Enviar si es válido
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_zghn3y7';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      this.reset();

      // Reset estilos y mensajes
      [empresaInput, nombreInput, emailInput, telefonoInput, mensajeInput].forEach(input => {
        input.classList.remove('success', 'error');
      });
      [empresaError, nameError, emailError, telError, msgError].forEach(span => {
        span.textContent = "";
      });
    }, (err) => {
      btn.value = 'Send Email';
      alert('Ocurrió un error: ' + JSON.stringify(err));
    });
});
