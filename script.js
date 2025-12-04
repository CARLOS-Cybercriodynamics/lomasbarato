const realOffers = [
    { id: 1, title: "Coca-Cola 2.5L", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-01", currentPrice: "$32.90", originalPrice: "$38.50", discount: "15%", store: "walmart", storeName: "Walmart", validUntil: "2025-12-09", link: "https://www.walmart.com.mx/bebidas/gaseosas/coca-cola-2-5-l/p", category: "bebidas", popular: true },
    { id: 2, title: "Pechuga de Pollo San Juan 1kg", image: "https://cdn.shopify.com/s/files/1/0272/7073/8199/products/POLLO_SAN_JUAN_PECHUGA_1KG_540x.jpg", currentPrice: "$89.90", originalPrice: "$112.00", discount: "20%", store: "soriana", storeName: "Soriana", validUntil: "2025-12-08", link: "https://www.soriana.com/pechuga-de-pollo-san-juan-1-kg/p", category: "carnes", popular: true },
    { id: 3, title: "Leche Lala 100% Deslactosada 1L", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-02", currentPrice: "$25.50", originalPrice: "$29.90", discount: "15%", store: "chedraui", storeName: "Chedraui", validUntil: "2025-12-10", link: "https://www.chedraui.com.mx/leche-lala-100-deslactosada-1l/p", category: "lacteos" },
    { id: 4, title: "Aceite Cristal 1L", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-03", currentPrice: "$34.90", originalPrice: "$42.50", discount: "18%", store: "superama", storeName: "Superama", validUntil: "2025-12-07", link: "https://www.superama.com.mx/despensa/aceites-y-vinagres/aceite-cristal-1l/p", category: "despensa" },
    { id: 5, title: "Huevo Blanco 18 piezas", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-04", currentPrice: "$62.90", originalPrice: "$75.00", discount: "16%", store: "walmart", storeName: "Walmart", validUntil: "2025-12-09", link: "https://www.walmart.com.mx/huevos/huevo-blanco-18pz/p", category: "huevos", popular: true },
    { id: 6, title: "Arroz SOS 1kg", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-05", currentPrice: "$27.80", originalPrice: "$33.50", discount: "17%", store: "chedraui", storeName: "Chedraui", validUntil: "2025-12-10", link: "https://www.chedraui.com.mx/despensa/arroz/arroz-sos-1kg/p", category: "despensa" },
    { id: 7, title: "Pan Bimbo Blanco Grande", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-06", currentPrice: "$45.90", originalPrice: "$52.00", discount: "12%", store: "soriana", storeName: "Soriana", validUntil: "2025-12-08", link: "https://www.soriana.com/pan-bimbo-blanco-grande-680g/p", category: "pan" },
    { id: 8, title: "Atún Dolores en Agua 140g", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-07", currentPrice: "$22.50", originalPrice: "$26.90", discount: "16%", store: "superama", storeName: "Superama", validUntil: "2025-12-07", link: "https://www.superama.com.mx/despensa/atun-y-sardinas/atun-dolores-en-agua-140g/p", category: "enlatados" },
    { id: 9, title: "Jabón Zote 400g", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-08", currentPrice: "$18.90", originalPrice: "$23.50", discount: "20%", store: "walmart", storeName: "Walmart", validUntil: "2025-12-09", link: "https://www.walmart.com.mx/limpieza/jabones/jabon-zote-400g/p", category: "limpieza" },
    { id: 10, title: "Jugo Del Valle 100% Naranja 1L", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-09", currentPrice: "$28.90", originalPrice: "$34.50", discount: "16%", store: "chedraui", storeName: "Chedraui", validUntil: "2025-12-10", link: "https://www.chedraui.com.mx/bebidas/jugos/jugo-del-valle-naranja-1l/p", category: "bebidas" },
    { id: 11, title: "Papel Higiénico Regio 12 rollos", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-10", currentPrice: "$129.90", originalPrice: "$155.00", discount: "16%", store: "soriana", storeName: "Soriana", validUntil: "2025-12-08", link: "https://www.soriana.com/papel-higienico-regio-12-rollos/p", category: "hogar", popular: true },
    { id: 12, title: "Café Nescafé Clásico 170g", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-11", currentPrice: "$95.90", originalPrice: "$112.00", discount: "14%", store: "walmart", storeName: "Walmart", validUntil: "2025-12-09", link: "https://www.walmart.com.mx/bebidas/cafe/nescafe-clasico-170g/p", category: "cafe" },
    { id: 13, title: "Queso Philadelphia 190g", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-12", currentPrice: "$42.50", originalPrice: "$49.90", discount: "15%", store: "superama", storeName: "Superama", validUntil: "2025-12-07", link: "https://www.superama.com.mx/lacteos/quesos/queso-philadelphia-190g/p", category: "lacteos" },
    { id: 14, title: "Fabuloso Lavanda 945ml", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-13", currentPrice: "$24.90", originalPrice: "$29.50", discount: "16%", store: "chedraui", storeName: "Chedraui", validUntil: "2025-12-10", link: "https://www.chedraui.com.mx/limpieza/desinfectantes/fabuloso-lavanda-945ml/p", category: "limpieza" },
    { id: 15, title: "Servilletas Elite 200 hojas", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_300,q_auto,w_300/c_pad,h_300,w_300/R1993049-14", currentPrice: "$34.90", originalPrice: "$41.00", discount: "15%", store: "walmart", storeName: "Walmart", validUntil: "2025-12-09", link: "https://www.walmart.com.mx/hogar/servilletas/servilletas-elite-200hojas/p", category: "hogar" }
];

function renderOffers(offers = realOffers) {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;
    grid.innerHTML = '';
    offers.forEach(offer => {
        const daysLeft = Math.ceil((new Date(offer.validUntil) - new Date()) / (86400000));
        const offerElement = document.createElement('div');
        offerElement.className = 'offer-card';
        offerElement.innerHTML = `
            <div class="offer-image">
                ${offer.discount ? `<div class="badge-discount">-${offer.discount}</div>` : ''}
                <img src="${offer.image}" alt="${offer.title}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7b2ZmZXIudGl0bGV9PC90ZXh0Pjwvc3ZnPg=='">
            </div>
            <div class="offer-content">
                <h3 class="offer-title">${offer.title}</h3>
                <div class="offer-price">
                    <span class="current-price">${offer.currentPrice}</span>
                    <span class="original-price">${offer.originalPrice}</span>
                </div>
                <div class="offer-meta">
                    <span class="store-badge-small ${offer.store}">${offer.storeName}</span>
                    <span class="offer-validity">⏰ ${daysLeft > 0 ? `Válido por ${daysLeft} día${daysLeft !== 1 ? 's' : ''}` : 'Último día'}</span>
                </div>
                <div class="offer-actions">
                    <a href="${offer.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Ver en ${offer.storeName}</a>
                </div>
            </div>
        `;
        grid.appendChild(offerElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            let filteredOffers = realOffers;
            if (btn.dataset.filter !== 'all') {
                filteredOffers = realOffers.filter(offer => offer.store === btn.dataset.filter);
            }
            applySorting(filteredOffers, sortSelect.value);
        });
    });
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active');
            const filter = activeFilter ? activeFilter.dataset.filter : 'all';
            let filteredOffers = realOffers;
            if (filter !== 'all') {
                filteredOffers = realOffers.filter(offer => offer.store === filter);
            }
            applySorting(filteredOffers, e.target.value);
        });
    }
}

function applySorting(offers, sortBy) {
    let sortedOffers = [...offers];
    switch(sortBy) {
        case 'discount':
            sortedOffers.sort((a, b) => (parseInt(b.discount) || 0) - (parseInt(a.discount) || 0));
            break;
        case 'price':
            sortedOffers.sort((a, b) => parseFloat(a.currentPrice.replace('$', '').replace(',', '')) - parseFloat(b.currentPrice.replace('$', '').replace(',', '')));
            break;
        case 'expiry':
            sortedOffers.sort((a, b) => new Date(a.validUntil) - new Date(b.validUntil));
            break;
    }
    renderOffers(sortedOffers);
}

function setupNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert(`¡Gracias! Te has suscrito con: ${email}\nTe enviaremos las ofertas cada lunes.`);
            form.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    renderOffers();
    setupFilters();
    setupNewsletter();
    const stores = ['walmart', 'soriana', 'chedraui', 'superama'];
    stores.forEach(store => {
        const count = realOffers.filter(o => o.store === store).length;
        const btn = document.querySelector(`[data-filter="${store}"]`);
        if (btn) btn.textContent = `${store.charAt(0).toUpperCase() + store.slice(1)} (${count})`;
    });
});
