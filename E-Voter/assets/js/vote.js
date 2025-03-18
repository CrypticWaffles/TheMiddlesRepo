async function vote(choice) {
// Make a POST request to the server
  let response = await fetch('/vote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      VideoID: 1, choice, zipId: 'Zip'
    })
  });

  // Handle the response
  if (response.ok) {
    console.log('Vote submitted successfully');
    window.location.href = '/feedback';
  } else {
    console.error('Failed to submit vote');
    alert('Failed to submit vote');
  }
}
