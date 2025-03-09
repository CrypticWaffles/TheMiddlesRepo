/**
    * Fetches location data from the server for the given ZIP code and populates
    * the state and city spans with the data.
    *
    * @returns a set of location data (state and city)
    */
async function fetchLocation() {
  let zip = document.getElementById('zipCode').value;

  // Ensure a ZIP code was entered
  if (!zip) {
    document.getElementById('state').innerText = '';
    document.getElementById('city').innerText = '';
    alert('Please enter a ZIP code');
    return;
  }

  // Fetch location data
  try {
    let response = await fetch(`/api/location?zip=${zip}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();

    document.getElementById('state').innerText = data.state || 'N/A';
    document.getElementById('city').innerText = data.city || 'N/A';
  } catch (error) {
    document.getElementById('state').innerText = '';
    document.getElementById('city').innerText = '';
    console.error('Fetch error:', error);
    alert('Error fetching location data.');
  }
}
