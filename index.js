// script.js

// Function to update the total price
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Function to change quantity
function changeQuantity(event, change) {
    const quantityElement = event.target.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change); // Ensure quantity is at least 1
    quantityElement.textContent = quantity;
    updateTotal();
}

// Function to remove an item
function removeItem(event) {
    const item = event.target.closest('.cart-item');
    item.remove();
    updateTotal();
}

// Function to toggle like
function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('liked');
}

// Initialize total price
updateTotal();
