const dscc = require('@google/dscc'); // Librería para recibir datos de Looker Studio

function drawViz(data) {
  // Selecciona o crea un contenedor para tu gráfico.
  const container = document.getElementById('chart-container');
  container.innerHTML = '<h1>¡Hola! Estoy listo para dibujar un Radar</h1>';
  // Después reemplazaremos esto con código que pinte un radar con Chart.js
}

// El subscribeToData escucha cambios de datos/config y llama a drawViz
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
