// Fetch Data from Random User API 

fetch('https://randomuser.me/api/?results=12&nat=us,gb,ca')
  .then(response => response.json())
  .then(data => displayEmployees(data.results))
  .catch(error => console.error(error));

