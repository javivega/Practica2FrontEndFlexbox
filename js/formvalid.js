
var form = document.getElementById('form-contact');
var conocido = document.getElementById('conocido');
var labelConocido = document.querySelector('label[for="conocido"]');


var otrosInput = document.createElement('input');
otrosInput.setAttribute("id", "otros-conocido");
otrosInput.setAttribute("type", "text");
otrosInput.setAttribute("name", "otros-conocido");
otrosInput.setAttribute("placeholder", "Escriba como me conocio");
otrosInput.setAttribute("required","");


conocido.addEventListener('change', function(){
	if(conocido.value === "otros"){
		labelConocido.parentNode.appendChild(otrosInput);
	} else {
		labelConocido.parentNode.removeChild(otrosInput);
	}
})


form.addEventListener('submit', function(){

	var inputNombre = document.getElementById('name');
	var inputEmail = document.getElementById('email');
	var inputPhone = document.getElementById('phone');
	var inputTextArea = document.getElementById('notas');
	var otrosConocido = document.getElementById('otros-conocido');
	var numPalabras;


	if(inputNombre.checkValidity() == false){
		alert("Por favor escriba su nombre");
		inputNombre.focus();
		event.preventDefault();
		return false;
	}

	if(inputEmail.checkValidity() == false){
		alert("Escriba su email");
		inputEmail.focus();
		event.preventDefault();
		return false;
	}

	if(inputPhone.checkValidity() == false){
		alert("Escriba su número de teléfono");
		inputPhone.focus();
		event.preventDefault();
		return false;
	}

	if(otrosConocido){
		if(otrosConocido.checkValidity() == false){
			alert("Introduce como nos has conocido.");
			event.preventDefault();
			otrosConocido.focus();

		}
	}

	checkWords(inputTextArea);

})



var checkWords = function(obj){
	var maxWords =150;
	var words = obj.value.split(/[\s]+/);
	if(words.length > maxWords){
		alert("Has excedido el máximo de palabras que es: " + maxWords);
		event.preventDefault();
		return false;

	}
}




