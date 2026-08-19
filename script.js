document.addEventListener('DOMContentLoaded', () => {
  // Manejo de eventos / animaciones sutiles para los botones
  const actionButtons = document.querySelectorAll('.btn-action');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Si el enlace está vacío o es un ancla por defecto '#'
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Este enlace se encuentra en actualización.');
      }
    });
  });
});