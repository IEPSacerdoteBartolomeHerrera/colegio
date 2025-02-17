// Cargar el nav en el contenedor con id="nav-container"
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-container').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el nav:', error));

// Cargar el footer en el contenedor con id="footer-container"
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el footer:', error));
