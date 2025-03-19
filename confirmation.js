// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve booking details from localStorage
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

  // Get the booking details container
  const bookingDetailsDiv = document.getElementById('bookingDetails');

  // Check if booking details exist
  if (bookingDetails) {
    // Display booking details
    bookingDetailsDiv.innerHTML = `
      <p><strong>Name:</strong> ${bookingDetails.name}</p>
      <p><strong>Email:</strong> ${bookingDetails.email}</p>
      <p><strong>Check-in Date:</strong> ${bookingDetails.checkin}</p>
      <p><strong>Check-out Date:</strong> ${bookingDetails.checkout}</p>
      <p><strong>Hotel Name:</strong> ${bookingDetails.hotelName}</p>
      <p><strong>Price:</strong> $${bookingDetails.hotelPrice}/night</p>
      <p><strong>Location:</strong> ${bookingDetails.hotelLocation}</p>
    `;
  } else {
    // Display a message if no booking details are found
    bookingDetailsDiv.innerHTML = '<p>No booking details found.</p>';
  }
});