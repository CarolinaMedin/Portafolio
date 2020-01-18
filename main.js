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
	  delay: anime.stagger(50, {start: 500}), 
	  translateX: [-10, 30],
	  // direction: 'alternate',
	  // loop: truez
	}); 





	// Get the modal
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	setTimeout(function(){
		modal.style.display = "none";
	},4000);


	

	// Chequeamos el tamaño inicial del navegador, para disminuir el tamaño de las letras en función del largo de la pantalla
	var width = window.innerWidth;
	  console.log("width: "+ width);
	  if (width < 770 && width > 400){
	    // alert('Your screen is too small');
	    // document.getElementsByClassName("Bienvenida").style.fontSize = 200%;

	    var elements = document.getElementsByClassName('Bienvenida');

		for (var i = 0; i < elements.length; i++) {
		  var element = elements[i];
		  element.style.fontSize = "200%";//1200%;
		}

	  }else if (width <= 400){
	    // alert('Your screen is too small');
	    // document.getElementsByClassName("Bienvenida").style.fontSize = 200%;

	    var elements = document.getElementsByClassName('Bienvenida');

		for (var i = 0; i < elements.length; i++) {
		  var element = elements[i];
		  element.style.fontSize = "100%";//1200%;
		}

	  }

}


document.addEventListener("DOMContentLoaded", main);



// Chequeamos el tamaño inicial del navegador, para disminuir o aumentar el tamaño de las letras en función del largo de la pantalla
window.addEventListener('resize', function(event){
  var width = window.innerWidth;
  // console.log("width: "+ width);
  if (width < 770 && width > 400){
    // alert('Your screen is too small');
    // document.getElementsByClassName("Bienvenida").style.fontSize = 200%;

    var elements = document.getElementsByClassName('Bienvenida');

	for (var i = 0; i < elements.length; i++) {
	  var element = elements[i];
	  element.style.fontSize = "200%";//1200%;
	}

  }else if (width <= 400){
    // alert('Your screen is too small');
    // document.getElementsByClassName("Bienvenida").style.fontSize = 200%;

    var elements = document.getElementsByClassName('Bienvenida');

	for (var i = 0; i < elements.length; i++) {
	  var element = elements[i];
	  element.style.fontSize = "100%";//1200%;
	}

  }else{

    var elements = document.getElementsByClassName('Bienvenida');

	for (var i = 0; i < elements.length; i++) {
	  var element = elements[i];
	  element.style.fontSize = "300%";//1200%;
	}

  }

});