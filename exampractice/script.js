document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Display the data
    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = `<h3>Form Data:</h3>
                           <p><strong>Name:</strong> ${name}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Message:</strong> ${message}</p>`;
  });
  