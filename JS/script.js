// script.js
// Mostrar u ocultar los botones según el desplazamiento debe cambiar el fondo
window.onscroll = function() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const scrollDownBtn = document.getElementById("scrollDownBtn");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
      scrollDownBtn.style.display = "none";
    } else {
      scrollDownBtn.style.display = "block";
    }
  };
  
  // Función para desplazarse hacia arriba
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Función para desplazarse hacia abajo
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }