// ============================================
// OFERTAS COMPLETAS: ABARROTES + MARISCOS + ELECTRODOMÉSTICOS
// ============================================

const realOffers = [
    // ========================
    // ABARROTES (15 ofertas)
    // ========================
    {
        id: 1,
        title: "Coca-Cola 2.5L",
        icon: "🥤",
        currentPrice: "$32.90",
        originalPrice: "$38.50",
        discount: "15%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/bebidas/gaseosas/coca-cola-2-5-l/p",
        category: "bebidas",
        subcategory: "refrescos",
        popular: true
    },
    {
        id: 2,
        title: "Pechuga de Pollo San Juan 1kg",
        icon: "🍗",
        currentPrice: "$89.90",
        originalPrice: "$112.00",
        discount: "20%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/pechuga-de-pollo-san-juan-1-kg/p",
        category: "carnes",
        subcategory: "pollo",
        popular: true
    },
    {
        id: 3,
        title: "Leche Lala 100% Deslactosada 1L",
        icon: "🥛",
        currentPrice: "$25.50",
        originalPrice: "$29.90",
        discount: "15%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/leche-lala-100-deslactosada-1l/p",
        category: "lácteos",
        subcategory: "leche"
    },
    {
        id: 4,
        title: "Aceite Cristal 1L",
        icon: "🫒",
        currentPrice: "$34.90",
        originalPrice: "$42.50",
        discount: "18%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/despensa/aceites-y-vinagres/aceite-cristal-1l/p",
        category: "despensa",
        subcategory: "aceites"
    },
    {
        id: 5,
        title: "Huevo Blanco 18 piezas",
        icon: "🥚",
        currentPrice: "$62.90",
        originalPrice: "$75.00",
        discount: "16%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/huevos/huevo-blanco-18pz/p",
        category: "despensa",
        subcategory: "huevos",
        popular: true
    },
    {
        id: 6,
        title: "Arroz SOS 1kg",
        icon: "🍚",
        currentPrice: "$27.80",
        originalPrice: "$33.50",
        discount: "17%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/despensa/arroz/arroz-sos-1kg/p",
        category: "despensa",
        subcategory: "granos"
    },
    {
        id: 7,
        title: "Pan Bimbo Blanco Grande",
        icon: "🍞",
        currentPrice: "$45.90",
        originalPrice: "$52.00",
        discount: "12%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/pan-bimbo-blanco-grande-680g/p",
        category: "pan",
        subcategory: "pan de caja"
    },
    {
        id: 8,
        title: "Atún Dolores en Agua 140g",
        icon: "🐟",
        currentPrice: "$22.50",
        originalPrice: "$26.90",
        discount: "16%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/despensa/atun-y-sardinas/atun-dolores-en-agua-140g/p",
        category: "pescados",
        subcategory: "enlatados"
    },
    {
        id: 9,
        title: "Jabón Zote 400g",
        icon: "🧼",
        currentPrice: "$18.90",
        originalPrice: "$23.50",
        discount: "20%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/limpieza/jabones/jabon-zote-400g/p",
        category: "limpieza",
        subcategory: "jabones"
    },
    {
        id: 10,
        title: "Jugo Del Valle 100% Naranja 1L",
        icon: "🧃",
        currentPrice: "$28.90",
        originalPrice: "$34.50",
        discount: "16%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/bebidas/jugos/jugo-del-valle-naranja-1l/p",
        category: "bebidas",
        subcategory: "jugos"
    },
    {
        id: 11,
        title: "Papel Higiénico Regio 12 rollos",
        icon: "🧻",
        currentPrice: "$129.90",
        originalPrice: "$155.00",
        discount: "16%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/papel-higienico-regio-12-rollos/p",
        category: "hogar",
        subcategory: "papel",
        popular: true
    },
    {
        id: 12,
        title: "Café Nescafé Clásico 170g",
        icon: "☕",
        currentPrice: "$95.90",
        originalPrice: "$112.00",
        discount: "14%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/bebidas/cafe/nescafe-clasico-170g/p",
        category: "café",
        subcategory: "café instantáneo"
    },
    {
        id: 13,
        title: "Queso Philadelphia 190g",
        icon: "🧀",
        currentPrice: "$42.50",
        originalPrice: "$49.90",
        discount: "15%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/lacteos/quesos/queso-philadelphia-190g/p",
        category: "lácteos",
        subcategory: "quesos"
    },
    {
        id: 14,
        title: "Fabuloso Lavanda 945ml",
        icon: "🌿",
        currentPrice: "$24.90",
        originalPrice: "$29.50",
        discount: "16%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/limpieza/desinfectantes/fabuloso-lavanda-945ml/p",
        category: "limpieza",
        subcategory: "desinfectantes"
    },
    {
        id: 15,
        title: "Servilletas Elite 200 hojas",
        icon: "🍽️",
        currentPrice: "$34.90",
        originalPrice: "$41.00",
        discount: "15%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/hogar/servilletas/servilletas-elite-200hojas/p",
        category: "hogar",
        subcategory: "servilletas"
    },

    // ========================
    // MARISCOS (5 ofertas)
    // ========================
    {
        id: 16,
        title: "Camarón Gigante 1kg",
        icon: "🦐",
        currentPrice: "$189.90",
        originalPrice: "$225.00",
        discount: "16%",
        store: "chedraui",
        storeName: "Chedraui Selecto",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/congelados/mariscos/camaron-gigante-1kg/p",
        category: "mariscos",
        subcategory: "camarón",
        premium: true
    },
    {
        id: 17,
        title: "Filete de Salmón 500g",
        icon: "🐠",
        currentPrice: "$149.50",
        originalPrice: "$179.90",
        discount: "17%",
        store: "superama",
        storeName: "Superama",
        validUntil: "2025-12-07",
        link: "https://www.superama.com.mx/pescados-y-mariscos/salmon/filete-de-salmon-500g/p",
        category: "pescados",
        subcategory: "salmón",
        premium: true
    },
    {
        id: 18,
        title: "Mezcla de Mariscos 800g",
        icon: "🦞",
        currentPrice: "$129.90",
        originalPrice: "$155.00",
        discount: "16%",
        store: "walmart",
        storeName: "Walmart",
        validUntil: "2025-12-09",
        link: "https://www.walmart.com.mx/congelados/mariscos/mezcla-de-mariscos-800g/p",
        category: "mariscos",
        subcategory: "mezcla",
        premium: true
    },
    {
        id: 19,
        title: "Atún Fresco 1kg",
        icon: "🐟",
        currentPrice: "$99.90",
        originalPrice: "$119.90",
        discount: "17%",
        store: "soriana",
        storeName: "Soriana",
        validUntil: "2025-12-08",
        link: "https://www.soriana.com/pescados/atun-fresco-1-kg/p",
        category: "pescados",
        subcategory: "atún",
        premium: true
    },
    {
        id: 20,
        title: "Ceviche Mixto 500g",
        icon: "🥗",
        currentPrice: "$89.90",
        originalPrice: "$109.90",
        discount: "18%",
        store: "chedraui",
        storeName: "Chedraui",
        validUntil: "2025-12-10",
        link: "https://www.chedraui.com.mx/congelados/mariscos/ceviche-mixto-500g/p",
        category: "mariscos",
        subcategory: "preparados",
        premium: true
    },

    // ========================
    // ELECTRODOMÉSTICOS (5 ofertas)
    // ========================
    {
        id: 21,
        title: "Licuadora Oster 8 Velocidades",
        icon: "🔌",
        currentPrice: "$899.00",
        originalPrice: "$1,199.00",
        discount: "25%",
        store: "liverpool",
        storeName: "Liverpool",
        validUntil: "2025-12-15",
        link: "https://www.liverpool.com.mx/electrodomesticos/licuadoras/licuadora-oster-8-velocidades/p",
        category: "electrodomésticos",
        subcategory: "licuadoras",
        premium: true
    },
    {
        id: 22,
        title: "Microondas Mabe 1.1 pies³",
        icon: "🍲",
        currentPrice: "$1,499.00",
        originalPrice: "$1,999.00",
        discount: "25%",
        store: "coppel",
        storeName: "Coppel",
        validUntil: "2025-12-20",
        link: "https://www.coppel.com/electrodomesticos/microondas/microondas-mabe-1.1-pies3/p",
        category: "electrodomésticos",
        subcategory: "microondas",
        premium: true
    },
    {
        id: 23,
        title: "Cafetera Nespresso Essenza Mini",
        icon: "☕",
        currentPrice: "$1,799.00",
        originalPrice: "$2,399.00",
        discount: "25%",
        store: "amazon",
        storeName: "Amazon",
        validUntil: "2025-12-12",
        link: "https://www.amazon.com.mx/Nespresso-Essenza-Mini-cafetera-el%C3%A9ctrica/dp/B07B4Q6S2F",
        category: "electrodomésticos",
        subcategory: "cafeteras",
        premium: true
    },
    {
        id: 24,
        title: "Ventilador de Torre Honeywell",
        icon: "🌀",
        currentPrice: "$699.00",
        originalPrice: "$899.00",
        discount: "22%",
        store: "elektra",
        storeName: "Elektra",
        validUntil: "2025-12-18",
        link: "https://www.elektra.com.mx/climatizacion/ventiladores/ventilador-de-torre-honeywell/p",
        category: "electrodomésticos",
        subcategory: "ventiladores",
        premium: true
    },
    {
        id: 25,
        title: "Refrigerador Samsung 2 Puertas",
        icon: "❄️",
        currentPrice: "$8,999.00",
        originalPrice: "$11,999.00",
        discount: "25%",
        store: "liverpool",
        storeName: "Liverpool",
        validUntil: "2025-12-25",
        link: "https://www.liverpool.com.mx/electrodomesticos/refrigeradores/refrigerador-samsung-2-puertas/p",
        category: "refrigeración",
        subcategory: "refrigeradores",
        premium: true
    }
];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Renderizar ofertas
function renderOffers(offers = realOffers) {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    offers.forEach(offer => {
        const daysLeft = Math.ceil((new Date(offer.validUntil) - new Date()) / (1000 * 60 * 60 * 24));
        const isPremium = offer.premium || false;
        
        const offerElement = document.createElement('div');
        offerElement.className = `offer-card ${isPremium ? 'premium' : ''}`;
        offerElement.dataset.store = offer.store;
        offerElement.dataset.category = offer.category;
        offerElement.dataset.subcategory = offer.subcategory;
        
        offerElement.innerHTML = `
            ${isPremium ? '<div class="premium-badge">⭐ PREMIUM</div>' : ''}
            
            <div class="offer-image">
                ${offer.discount ? `<div class="badge-discount">-${offer.discount}</div>` : ''}
                <div class="svg-icon-container icon-${offer.category}">
                    <div class="svg-icon">${offer.icon}</div>
                </div>
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
                
                <div class="category-badge badge-${offer.category}">
                    ${offer.category}
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

// Configurar filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryButtons = document.querySelectorAll('.category-filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    // Filtros por tienda
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            let filteredOffers = realOffers;
            if (filter !== 'all') {
                filteredOffers = realOffers.filter(offer => offer.store === filter);
            }
            
            applySorting(filteredOffers, sortSelect.value);
        });
    });
    
    // Filtros por categoría
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                let filteredOffers = realOffers;
                if (category !== 'all') {
                    filteredOffers = realOffers.filter(offer => offer.category === category);
                }
                
                applySorting(filteredOffers, sortSelect.value);
            });
        });
    }
    
    // Ordenamiento
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

// Aplicar ordenamiento
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
            
        case 'category':
            sortedOffers.sort((a, b) => {
                return a.category.localeCompare(b.category);
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
    createCategoryFilters();
});

// Actualizar conteos en filtros
function updateOfferCounts() {
    const stores = ['walmart', 'soriana', 'chedraui', 'superama', 'liverpool', 'coppel', 'amazon', 'elektra'];
    
    stores.forEach(store => {
        const count = realOffers.filter(o => o.store === store).length;
        const btn = document.querySelector(`[data-filter="${store}"]`);
        if (btn && count > 0) {
            btn.textContent = `${store.charAt(0).toUpperCase() + store.slice(1)} (${count})`;
        }
    });
}

// Crear filtros de categoría dinámicamente
function createCategoryFilters() {
    const categoriesContainer = document.getElementById('categoryFilters');
    if (!categoriesContainer) return;
    
    // Obtener categorías únicas
    const categories = [...new Set(realOffers.map(offer => offer.category))];
    
    // Crear HTML de filtros
    let filtersHTML = `
        <button class="category-filter-btn active" data-category="all">
            <span>🏷️</span> Todas (${realOffers.length})
        </button>
    `;
    
    categories.forEach(category => {
        const count = realOffers.filter(o => o.category === category).length;
        const icon = realOffers.find(o => o.category === category)?.icon || '🏷️';
        
        filtersHTML += `
            <button class="category-filter-btn" data-category="${category}">
                <span>${icon}</span> ${category.charAt(0).toUpperCase() + category.slice(1)} (${count})
            </button>
        `;
    });
    
    categoriesContainer.innerHTML = filtersHTML;
    
    // Agregar event listeners
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            let filteredOffers = realOffers;
            if (category !== 'all') {
                filteredOffers = realOffers.filter(offer => offer.category === category);
            }
            
            applySorting(filteredOffers, document.getElementById('sortSelect').value);
        });
    });
        }
