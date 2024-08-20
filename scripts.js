let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('show');
    });
    items[index].classList.add('show');
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

setInterval(nextItem, 5000); // Tempo ajustado para ser mais lento

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);
});
