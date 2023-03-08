document.getElementById('boton1').onclick = function () {
    document.getElementById('datos').style.backgroundColor = 'rgba(156, 142, 128, 0.1)';
    document.getElementById('formacion').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
    document.getElementById('laboral').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
}
document.getElementById('boton2').onclick = function () {
    document.getElementById('formacion').style.backgroundColor = 'rgba(156, 142, 128, 0.1)';
    document.getElementById('datos').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
    document.getElementById('laboral').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
}
document.getElementById('boton3').onclick = function () {
    document.getElementById('laboral').style.backgroundColor = 'rgba(156, 142, 128, 0.1)';
    document.getElementById('formacion').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
    document.getElementById('datos').style.backgroundColor = 'rgba(255, 255, 255, 0.76)';
}