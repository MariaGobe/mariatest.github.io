function myFunction(imgs) {
  var expandida = document.getElementById("grande");
  expandida.src = imgs.src;
  expandida.style.display = 'inline';
}

function cerrar(){
 document.getElementById("grande").style.display = 'none';
}