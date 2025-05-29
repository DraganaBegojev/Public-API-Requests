// Fetch Data from Random User API 

let employees = [];  // Store fetched employees globally

fetch('https://randomuser.me/api/?results=12&nat=us,gb,ca')
  .then(response => response.json())
  .then(data => displayEmployees(data.results))
  .catch(error => console.error(error));

function displayEmployees(employees) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    employees.forEach((employee, index) => {
        gallery.insertAdjacentHTML('beforeend', `
            <div class="card" data-index="${index}">
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
    // Add event listeners to each card after they are created
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-index');
            showModal(employees[index]);
        });
    });
}

// Function to show modal with employee details
function showModal(employee) {
    const dob = new Date(employee.dob.date);
    const formattedDob = `${dob.getMonth() + 1}/${dob.getDate()}/${dob.getFullYear()}`;

    const modalHTML = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                    <p class="modal-text">${employee.email}</p>
                    <p class="modal-text cap">${employee.location.city}</p>
                    <hr>
                    <p class="modal-text">${employee.cell}</p>
                    <p class="modal-text cap">${employee.location.state}, ${employee.location.country}</p>
                    <p class="modal-text">Birthday: ${formattedDob}</p>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
        </div>
    `;
    // Append modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalContainer = document.querySelector('.modal-container');

    // Close modal on click
    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', () => modalContainer.remove()); 

    // Close modal on outside click
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.remove();
        }
    });
}

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.remove();
        }
    }
});

// Add search functionality
const searchContainer = document.querySelector('.search-container');

const searchFormHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`;
searchContainer.insertAdjacentHTML('beforeend', searchFormHTML);

const searchInput = document.getElementById('search-input');
const searchForm = document.querySelector('form');


searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form reload
    const query = searchInput.value.toLowerCase();

    const employeeCards = document.querySelectorAll('.card');

    employeeCards.forEach(card => {
        const name = card.querySelector('.card-name').textContent.toLowerCase();
        card.style.display = name.includes(query) ? '' : 'none';
    });
});