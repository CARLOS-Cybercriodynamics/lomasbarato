async function cargarOfertas() {
    const res = await fetch("ofertas-semana.json");
    const data = await res.json();

    const cont = document.getElementById("ofertas");

    data.forEach(oferta => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${oferta.imagen}" alt="${oferta.producto}">
            <h3>${oferta.producto}</h3>
            <p class="precio">$${oferta.precio}</p>
            <p class="tienda">${oferta.tienda}</p>
            <p class="valido">Válido hasta ${oferta.valido_hasta}</p>
        `;
        cont.appendChild(card);
    });
}

function iniciarCountdown() {
    const fechaLimite = new Date("2025-12-09T23:59:59").getTime();

    setInterval(() => {
        const ahora = Date.now();
        const diff = fechaLimite - ahora;

        if (diff <= 0) {
            document.getElementById("countdown").innerText = "Ofertas finalizadas";
            return;
        }

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);

        document.getElementById("countdown").innerText =
            `📅 Estas ofertas expiran en ${dias} días ${horas} horas`;
    }, 1000);
}

cargarOfertas();
iniciarCountdown();
