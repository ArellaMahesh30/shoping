fetch('https://products-api-2ttf.onrender.com/api/products')
.then(response => response.json())
.then(data => {
    const productsContainer = document.getElementById('products-container');

    // Loop through the products and display them
    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        productDiv.appendChild(image);
        productDiv.appendChild(title);
        productsContainer.appendChild(productDiv);
    });
})
.catch(error => console.error('Error fetching data:', error));

// Stop form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission behavior
// Here you can add your search functionality
alert('Search functionality will be implemented soon!');
});