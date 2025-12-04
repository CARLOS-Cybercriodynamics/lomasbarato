const realOffers = [
    {
        id: 1,
        title: "Coca-Cola 2.5L",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$32.90",
        originalPrice: "$38.50",
        discount: "15%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/bebidas/gaseosas/coca-cola-2-5-l/p",
        category: "bebidas",
        popular: true
    },
    {
        id: 2,
        title: "Pechuga de Pollo San Juan 1kg",
        image: "https://images.unsplash.com/photo-1604503468506-9f7f5e6c42c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$89.90",
        originalPrice: "$112.00",
        discount: "20%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/pechuga-de-pollo-san-juan-1-kg/p",
        category: "carnes",
        popular: true
    },
    {
        id: 3,
        title: "Leche Lala 100% Deslactosada 1L",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$25.50",
        originalPrice: "$29.90",
        discount: "15%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/leche-lala-100-deslactosada-1l/p",
        category: "lácteos"
    },
    {
        id: 4,
        title: "Aceite Cristal 1L",
        image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$34.90",
        originalPrice: "$42.50",
        discount: "18%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/despensa/aceites-y-vinagres/aceite-cristal-1l/p",
        category: "despensa"
    },
    {
        id: 5,
        title: "Huevo Blanco 18 piezas",
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$62.90",
        originalPrice: "$75.00",
        discount: "16%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/huevos/huevo-blanco-18pz/p",
        category: "huevos",
        popular: true
    },
    {
        id: 6,
        title: "Arroz SOS 1kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$27.80",
        originalPrice: "$33.50",
        discount: "17%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/despensa/arroz/arroz-sos-1kg/p",
        category: "despensa"
    },
    {
        id: 7,
        title: "Pan Bimbo Blanco Grande",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$45.90",
        originalPrice: "$52.00",
        discount: "12%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/pan-bimbo-blanco-grande-680g/p",
        category: "pan"
    },
    {
        id: 8,
        title: "Atún Dolores en Agua 140g",
        image: "https://images.unsplash.com/photo-1551314587-1c4d0d4dab5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$22.50",
        originalPrice: "$26.90",
        discount: "16%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/despensa/atun-y-sardinas/atun-dolores-en-agua-140g/p",
        category: "enlatados"
    },
    {
        id: 9,
        title: "Jabón Zote 400g",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$18.90",
        originalPrice: "$23.50",
        discount: "20%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/limpieza/jabones/jabon-zote-400g/p",
        category: "limpieza"
    },
    {
        id: 10,
        title: "Jugo Del Valle 100% Naranja 1L",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$28.90",
        originalPrice: "$34.50",
        discount: "16%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/bebidas/jugos/jugo-del-valle-naranja-1l/p",
        category: "bebidas"
    },
    {
        id: 11,
        title: "Papel Higiénico Regio 12 rollos",
        image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$129.90",
        originalPrice: "$155.00",
        discount: "16%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/papel-higienico-regio-12-rollos/p",
        category: "hogar",
        popular: true
    },
    {
        id: 12,
        title: "Café Nescafé Clásico 170g",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$95.90",
        originalPrice: "$112.00",
        discount: "14%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/bebidas/cafe/nescafe-clasico-170g/p",
        category: "café"
    },
    {
        id: 13,
        title: "Queso Philadelphia 190g",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$42.50",
        originalPrice: "$49.90",
        discount: "15%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/lacteos/quesos/queso-philadelphia-190g/p",
        category: "lácteos"
    },
    {
        id: 14,
        title: "Fabuloso Lavanda 945ml",
        image: "https://images.unsplash.com/photo-1585776245865-b92dfe9b5d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$24.90",
        originalPrice: "$29.50",
        discount: "16%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/limpieza/desinfectantes/fabuloso-lavanda-945ml/p",
        category: "limpieza"
    },
    {
        id: 15,
        title: "Servilletas Elite 200 hojas",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        currentPrice: "$34.90",
        originalPrice: "$41.00",
        discount: "15%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/hogar/servilletas/servilletas-elite-200hojas/p",
        category: "hogar"
    }
];

// Renderizar ofertas
function renderOffers(offers = realOffers) {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    offers.forEach(offer => {
        const offerElement = document.createElement('div');
        offerElement.className = 'offer-card';
        offerElement.dataset.store = offer.store;
        offerElement.dataset.category = offer.category;
        
        const daysLeft = Math.ceil((new Date(offer.validUntil) - new Date()) / (1000 * 60 * 60 * 24));
        
        offerElement.innerHTML = `
            <div class="offer-image">
                ${offer.discount ? `<div class="badge-discount">-${offer.discount}</div>` : ''}
                <img src="${offer.image}" alt="${offer.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7b2ZmZXIudGl0bGV9PC90ZXh0Pjwvc3ZnPg=='">
            </div>
            <div class="offer-content">
                <h3 class="offer-title">${offer.title}</h3>
                
                <div class="offer-price">
                    <span class="current-price">${offer.currentPrice}</span>
                    <span class="original-price">${offer.originalPrice}</span>
                </div>
                
                <div class="offer-meta">
                    <span class="store-badge-small ${offer.store}">${offer.storeName}</span>
                    <span class="offer-validity">
                        <span>⏰</span>
                        ${daysLeft > 0 ? `Válido por ${daysLeft} día${daysLeft !== 1 ? 's' : ''}` : 'Último día'}
                    </span>
                </div>
                
                <div class="offer-actions">
                    <a href="${offer.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        Ver en ${offer.storeName}
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(offerElement);
    });
}

// Filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Actualizar botones activos
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrar ofertas
            let filteredOffers = realOffers;
            if (filter !== 'all') {
                filteredOffers = realOffers.filter(offer => offer.store === filter);
            }
            
            // Aplicar ordenamiento
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

// Ordenamiento
function applySorting(offers, sortBy) {
    let sortedOffers = [...offers];
    
    switch(sortBy) {
        case 'discount':
            sortedOffers.sort((a, b) => {
                const discountA = parseInt(a.discount) || 0;
                const discountB = parseInt(b.discount) || 0;
                return discountB - discountA;
            });
            break;
            
        case 'price':
            sortedOffers.sort((a, b) => {
                const priceA = parseFloat(a.currentPrice.replace('$', '').replace(',', ''));
                const priceB = parseFloat(b.currentPrice.replace('$', '').replace(',', ''));
                return priceA - priceB;
            });
            break;
            
        case 'expiry':
            sortedOffers.sort((a, b) => {
                const dateA = new Date(a.validUntil);
                const dateB = new Date(b.validUntil);
                return dateA - dateB;
            });
            break;
    }
    
    renderOffers(sortedOffers);
}

// Newsletter form
function setupNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Aquí iría la conexión con tu backend
            alert(`¡Gracias! Te has suscrito con: ${email}\nTe enviaremos las ofertas cada lunes.`);
            form.reset();
        });
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar loading, mostrar contenido
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    
    renderOffers();
    setupFilters();
    setupNewsletter();
    
    // Mostrar conteo de ofertas
    updateOfferCounts();
});

// Actualizar conteos en filtros
function updateOfferCounts() {
    const stores = ['walmart', 'soriana', 'chedraui', 'superama'];
    
    stores.forEach(store => {
        const count = realOffers.filter(o => o.store === store).length;
        const btn = document.querySelector(`[data-filter="${store}"]`);
        if (btn) {
            btn.textContent = `${store.charAt(0).toUpperCase() + store.slice(1)} (${count})`;
        }
    });
}
