// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const bookingForm = document.getElementById('bookingForm');

  // Add a submit event listener to the form
  bookingForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const hotelName = document.getElementById('hotelName').value;
    const hotelPrice = document.getElementById('hotelPrice').value;
    const hotelLocation = document.getElementById('hotelLocation').value;

    // Log the form data to the console
    console.log('Booking Details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Check-in Date:', checkin);
    console.log('Check-out Date:', checkout);
    console.log('Hotel Name:', hotelName);
    console.log('Hotel Price:', hotelPrice);
    console.log('Hotel Location:', hotelLocation);

    // Store booking details in localStorage
    const bookingDetails = {
      name,
      email,
      checkin,
      checkout,
      hotelName,
      hotelPrice,
      hotelLocation
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    // Redirect to confirmation.html
    window.location.href = 'confirmation.html';
  });
});