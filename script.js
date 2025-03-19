// Dynamic Hotel Data
const hotels = [
  {
    name: 'Hotel 1',
    location: 'Mumbai, India',
    price: 150,
    rating: 4,
    image: 'hotel8.avif',
    amenities: 'Free Wi-Fi, Pool, Gym'
  },
  {
    name: 'Hotel 2',
    location: 'Banglore, Karnataka',
    price: 300,
    rating: 5,
    image: 'hotel2.avif',
    amenities: 'Free Wi-Fi, Spa, Restaurant'
  },
  {
    name: 'Hotel 3',
    location: 'London, UK',
    price: 250,
    rating: 3,
    image: 'hotel3.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  {
    name: 'Hotel 4',
    location: 'Gurgaon, Delhi',
    price: 300,
    rating: 5,
    image: 'hotel4.avif',
    amenities: 'Free Wi-Fi, Spa, Restaurant'
  },
  {
    name: 'Hotel 5',
    location: 'Lucknow, UP',
    price: 250,
    rating: 5,
    image: 'hotel5.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  {
    name: 'Hotel 6',
    location: 'Varanasi, UP',
    price: 270,
    rating: 5,
    image: 'hotel7.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  {
    name: 'Hotel 7',
    location: 'Varanasi, UP',
    price: 220,
    rating: 4,
    image: 'hotel1.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  {
    name: 'Hotel 8',
    location: 'Mumbai, India',
    price: 280,
    rating: 5,
    image: 'hotel15.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  {
    name: 'Hotel 9',
    location: 'Delhi, India',
    price: 280,
    rating: 4,
    image: 'hotel16.avif',
    amenities: 'Free Wi-Fi, Gym Parking area'
  },
  {
    name: 'Hotel 10',
    location: 'Banglore, India',
    price: 250,
    rating: 5,
    image: 'hotel17.avif',
    amenities: 'Free Wi-Fi, Gym, Parking area'
  },
  {
    name: 'Hotel 11',
    location: 'Delhi, India',
    price: 250,
    rating: 5,
    image: 'hotel18.avif',
    amenities: 'Free Wi-Fi, Gym'
  },
  // Add more hotels
];

const hotelContainer = document.getElementById('hotelContainer');

function renderHotels(hotels) {
  hotelContainer.innerHTML = '';
  hotels.forEach(hotel => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${hotel.image}" class="card-img-top" alt="${hotel.name}">
          <div class="card-body">
            <h5 class="card-title" id="hotelName">${hotel.name}</h5>
            <p class="card-text" id="hotelLocation">Location: ${hotel.location}</p>
            <p class="card-text" id="hotelPrice">Price: $${hotel.price}/night</p>
            <p class="card-text">Rating: ${'⭐'.repeat(hotel.rating)}</p>
            <a href="booking.html"  class="btn btn-primary">Book Now</a>
            <button class="btn btn-secondary view-details">View Details</button>
          </div>
        </div>
      </div>
    `;
    hotelContainer.innerHTML += card;
  });

  // Add event listeners for "View Details" buttons
  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      const hotel = hotels.find(h => h.name === card.querySelector('.card-title').textContent);
      document.getElementById('modalLocation').textContent = hotel.location;
      document.getElementById('modalPrice').textContent = `$${hotel.price}/night`;
      document.getElementById('modalRating').textContent = '⭐'.repeat(hotel.rating);
      document.getElementById('modalAmenities').textContent = hotel.amenities;
      new bootstrap.Modal(document.getElementById('hotelDetailsModal')).show();
    });
  });
}

// Initial render
renderHotels(hotels);

// Search by Location
document.getElementById('searchLocation').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase().includes(searchTerm));
  renderHotels(filteredHotels);
});

// Filters
document.getElementById('priceRange').addEventListener('change', filterHotels);
document.getElementById('ratingFilter').addEventListener('change', filterHotels);

function filterHotels() {
  const priceRange = document.getElementById('priceRange').value;
  const ratingFilter = document.getElementById('ratingFilter').value;
  let filteredHotels = hotels;

  // Price Range Filter
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filteredHotels = filteredHotels.filter(hotel => hotel.price >= min && hotel.price <= max);
  }

  // Rating Filter
  if (ratingFilter !== 'all') {
    filteredHotels = filteredHotels.filter(hotel => hotel.rating >= parseInt(ratingFilter));
  }

  // Render the filtered hotels
  renderHotels(filteredHotels);
}

// Sort Hotels
document.getElementById('sortBy').addEventListener('change', function () {
  const sortBy = this.value;
  let sortedHotels = [...hotels];

  if (sortBy === 'priceLowToHigh') {
    sortedHotels.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHighToLow') {
    sortedHotels.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'ratingHighToLow') {
    sortedHotels.sort((a, b) => b.rating - a.rating);
  }

  renderHotels(sortedHotels);
});


