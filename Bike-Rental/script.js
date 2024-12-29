document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
  });


// Select the buttons
const rentNowButtons = document.querySelectorAll('.rent-now-button');
const buyNowButtons = document.querySelectorAll('.buy-now-button');

// Add event listeners to Rent Now buttons
rentNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('You have clicked Rent Now for ' + this.parentElement.querySelector('.bike-name').textContent);
        // You can also redirect to a rental page
        // window.location.href = 'rental-page-url.html';
    });
});

// Add event listeners to Buy Now buttons
buyNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('You have clicked Buy Now for ' + this.parentElement.querySelector('.bike-name').textContent);
        // You can also redirect to a purchase page
        // window.location.href = 'purchase-page-url.html';
    });
});

// Example of loading bike data dynamically
const bikeData = [
    {
        name: "Ducati Panigale V4 S",
        cost: "₹24.8 lakhs",
        image: "images/panigala-removebg-preview.png"
    },
    {
        name: "Kawasaki Ninja H2R",
        cost: "₹38.9 lakhs",
        image: "images/h2r.JPG"
    }
    // Add more bike data as needed
];

// Function to create bike cards
function createBikeCards() {
    const bikeContainer = document.querySelector('.bikes-row'); // Assuming you have a container for bike cards
    bikeData.forEach(bike => {
        const bikeCard = document.createElement('div');
        bikeCard.className = 'bike-card';
        bikeCard.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}" class="bike-image">
            <div class="bike-info">
                <div class="bike-name">${bike.name}</div>
                <div class="bike-cost">${bike.cost}</div>
                <button class="rent-now-button">Rent Now</button>
                <button class="buy-now-button">Buy Now</button>
            </div>
        `;
        bikeContainer.appendChild(bikeCard);
    });
}

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    }
});

// Function to show modal
function showModal(bikeName) {
    const modal = document.getElementById('modal');
    modal.querySelector('.modal-content').textContent = `More information about ${bikeName}`;
    modal.style.display = 'block'; // Show the modal
}

// Add event listeners to buttons to show modal
rentNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        showModal(this.parentElement.querySelector('.bike-name').textContent);
    });
});