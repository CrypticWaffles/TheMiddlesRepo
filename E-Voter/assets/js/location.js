/**
    * Fetches location data from the server for the given ZIP code and populates
    * the state and city spans with the data.
    *
    * @returns a set of location data (state and city)
    */
async function fetchLocation() {
  let zip = document.getElementById('zipCode').value;
  let locationDiv = document.getElementById('locationResult');
  let stateSpan = document.getElementById('state');
  let citySpan = document.getElementById('city');

  // Hide the result section initially
  locationDiv.style.display = 'none';

  if (!zip) {
    alert('Please enter a ZIP code');
    return;
  }

  try {
    let response = await fetch(`/api/location?zip=${zip}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();

    // Update the state and city spans
    stateSpan.innerText = data.state || 'N/A';
    citySpan.innerText = data.city || 'N/A';

    // Show the location result section
    locationDiv.style.display = 'block';
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Error fetching location data.');
  }
}
