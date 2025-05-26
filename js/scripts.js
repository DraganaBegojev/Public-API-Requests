// Fetch Data from Random User API 

fetch('https://randomuser.me/api/?results=12&nat=us,gb,ca')
  .then(response => response.json())
  .then(data => displayEmployees(data.results))
  .catch(error => console.error(error));

function displayEmployees(employees) {
    const gallery = document.querySelector('.gallery');

    employees.forEach(employee => {
        gallery.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                <img class="card-img" src="${employee.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                <p class="card-text">${employee.email}</p>
                <p class="card-text cap">${employee.location.city}</p>
                </div>
            </div>
        `);
    });
}