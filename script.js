const affiliateTag = "lomasbarato-20"; // Temporal hasta que tengas Amazon

fetch('prices.json')
  .then(r => r.json())
  .then(data => {
    window.productos = data;
    mostrarTodos();
  })
  .catch(() => {
    document.getElementById('results').innerHTML = '<p class="text-center">Cargando precios... (próximamente data real)</p>';
  });

document.getElementById('search').addEventListener('input', e => {
  const query = e.target.value.toLowerCase().trim();
  if (query === "") { mostrarTodos(); return; }
  const filtrados = window.productos?.filter(p => 
    p.producto.toLowerCase().includes(query) || 
    p.categoria.toLowerCase().includes(query)
  ) || [];
  mostrarResultados(filtrados);
});

function mostrarTodos() {
  mostrarResultados(window.productos || []);
}

function mostrarResultados(array) {
  const contenedor = document.getElementById('results');
  const noResults = document.getElementById('no-results');
  contenedor.innerHTML = '';

  if (array.length === 0) {
    noResults.classList.remove('d-none');
    return;
  }
  noResults.classList.add('d-none');

  array.forEach(p => {
    const card = `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${p.producto}</h5>
            <p class="price-min">$$  {p.min.precio} ← ${p.min.tienda}</p>
            <p class="price-max">  $${p.max.precio} → ${p.max.tienda}</p>
            <hr>
            <small class="text-success">Amazon: $${p.amazon} <a href="$$ {p.link}?tag= $${affiliateTag}" target="_blank" class="text-decoration-none">🛒 Comprar</a></small>
            <br><small class="text-muted">${p.ultima_actualizacion}</small>
          </div>
        </div>
      </div>`;
    contenedor.innerHTML += card;
  });
}
