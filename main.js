console.log("main")


// /*Mensaje de Bienvenida*/
// const svgPath = document.querySelectorAll('.path');

// // Creamos la animación del Mensaje de Bienvenida
// let Animacion_de_Bienvenida = anime({		// Objeto que contiene los detalles de la animación
//   targets: svgPath,						// Referencia a los elementos que se queiren animar
//   loop: true,
//   direction: 'alternate',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 700,
//   delay: (el, i) => { return i * 500 }
// });


var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});