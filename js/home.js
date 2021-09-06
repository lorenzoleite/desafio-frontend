var now = new Date();

var time = now.getHours() + ":" + now.getMinutes();

document.getElementById('current-time').innerHTML = time;

function clearUsers() {
  localStorage.clear();
  alert("Clientes removidos!");
}