const products = [
    { name: "Bud Light", price: 300, image: "images/budlight.jpg" },
    { name: "Black Label", price: 110, image: "images/blacklabel.jpg" },
    { name: "Heineken", price: 150, image: "images/heineken.jpg" },
    { name: "Red Label", price: 115, image: "images/redlabel.jpg" },    
    { name: "San Mig Light", price: 300, image: "images/sanmig.jpg" },
    { name: "Ginebra San Miguel", price: 110, image: "images/gin.jpg" },
    { name: "Red Horse", price: 150, image: "images/redhorse.jpg" },
    { name: "Soju", price: 115, image: "images/soju.jpg" },
    { name: "Custom Glass", price: 200, image: "images/glass1.jpg" },
    { name: "Wine Glass", price: 250, image: "images/glass2.jpg" },
    { name: "Shot Glass", price: 100, image: "images/glass3.jpg" },
    { name: "Beer Mug", price: 180, image: "images/glass4.jpg" }
];

let page = 0;
const quantities = {};
const cart = [];

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    sidebar.classList.toggle('active');
    burger.style.display = sidebar.classList.contains('active') ? 'none' : 'inline-block';
}

// Function to render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    const start = page * 6; // Change to 6 items per page
    const end = start + 6; // Change to 6 items per page
    const currentProducts = products.slice(start, end);

    currentProducts.forEach((product, i) => {
        const globalIndex = start + i;
        const qty = quantities[globalIndex] || 0;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">₱ ${product.price.toFixed(2)}</p>
            <div class="quantity">
                <button onclick="updateQuantity(${globalIndex}, -1)">-</button>
                <span id="qty-${globalIndex}">${qty}</span>
                <button onclick="updateQuantity(${globalIndex}, 1)">+</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Function to update quantity
function updateQuantity(index, change) {
    quantities[index] = Math.max(0, (quantities[index] || 0) + change);
    document.getElementById(`qty-${index}`).textContent = quantities[index]; // Fixed line
}

// Function to go to the next slide
function nextSlide() {
    page = (page + 1) % Math.ceil(products.length / 6); // Change to 6 items per page
    renderProducts();
}

// Function to go to the previous slide
function prevSlide() {
    page = (page - 1 + Math.ceil(products.length / 6)) % Math.ceil(products.length / 6); // Change to 6 items per page
    renderProducts();
}

// Function to add items to the cart
function addToCart() {
    cart.length = 0;
    Object.keys(quantities).forEach(index => {
        const qty = quantities[index];
        if (qty > 0) {
            const product = products[index];
            cart.push({
                name: product.name,
                price: product.price,
                quantity: qty
            });
        }
    });

    if (cart.length === 0) {
        alert("Please select items before adding to cart.");
    } else {
        alert("Items successfully added to cart.");
        console.log("Cart:", cart);
    }
}

// Render products on window load
window.onload = renderProducts;