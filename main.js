function main(){
	// console.log("main")


	// Ejecutamos el objeto anime después de cargar la página
	// Creamos la animación del Mensaje de Bienvenida
	let animation = anime({
	  targets: '.Bienvenida',
	  opacity: 1,
	  translateY: 50, 
	  rotate: {
	    value: 360,
	    duration: 2000,
	    easing: 'easeInExpo'
	  }, 
	  scale: anime.stagger([0.7, 1], {from: 'center'}), 
	  delay: anime.stagger(100, {start: 1000}), 
	  translateX: [-10, 30],
	  direction: 'alternate',
	  loop: true
	}); 

}


document.addEventListener("DOMContentLoaded", main);