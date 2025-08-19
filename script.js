// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Data arrays to store loaded JSON data
let projectsData = [];
let internshipsData = [];
let researchData = [];

// Function to load JSON data
async function loadData() {
    try {
        const [projectsResponse, internshipsResponse, researchResponse] = await Promise.all([
            fetch('data/projects.json'),
            fetch('data/internships.json'),
            fetch('data/research.json')
        ]);

        projectsData = await projectsResponse.json();
        internshipsData = await internshipsResponse.json();
        researchData = await researchResponse.json();

        // Render all sections after data is loaded
        renderSections();
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to sample data if JSON files can't be loaded
        loadSampleData();
    }
}

// Fallback sample data
function loadSampleData() {
    projectsData = [
        {
            "name": "E-commerce Platform",
            "description": "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
            "link": "https://github.com/username/ecommerce-platform",
            "image": "https://via.placeholder.com/400x200/3498db/ffffff?text=E-commerce+Platform"
        },
        {
            "name": "Weather App",
            "description": "A responsive weather application that displays current weather and forecasts using OpenWeatherMap API.",
            "link": "https://github.com/username/weather-app",
            "image": "https://via.placeholder.com/400x200/2ecc71/ffffff?text=Weather+App"
        },
        {
            "name": "Task Manager",
            "description": "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
            "link": "https://github.com/username/task-manager",
            "image": "https://via.placeholder.com/400x200/e74c3c/ffffff?text=Task+Manager"
        }
    ];

    internshipsData = [
        {
            "company": "Tech Corp",
            "role": "Software Engineering Intern",
            "description": "Developed and maintained web applications using React and Python. Collaborated with cross-functional teams to implement new features and improve user experience.",
            "link": "https://techcorp.com"
        },
        {
            "company": "StartupXYZ",
            "role": "Frontend Developer Intern",
            "description": "Built responsive user interfaces and optimized application performance. Worked on mobile-first design principles and accessibility improvements.",
            "link": "https://startupxyz.com"
        },
        {
            "company": "Data Solutions Inc",
            "role": "Data Science Intern",
            "description": "Analyzed large datasets using Python and SQL. Created predictive models and data visualizations to support business decisions.",
            "link": "https://datasolutions.com"
        }
    ];

    researchData = [
        {
            "title": "Machine Learning in Healthcare",
            "summary": "Research on implementing machine learning algorithms for early disease detection and patient outcome prediction in healthcare systems.",
            "link": "https://arxiv.org/abs/example123",
            "image": "https://via.placeholder.com/400x200/9b59b6/ffffff?text=ML+Healthcare"
        },
        {
            "title": "Blockchain for Supply Chain",
            "summary": "Investigation of blockchain technology applications in supply chain management for improved transparency and traceability.",
            "link": "https://ieeexplore.ieee.org/document/example456",
            "image": "https://via.placeholder.com/400x200/f39c12/ffffff?text=Blockchain+SC"
        },
        {
            "title": "Renewable Energy Optimization",
            "summary": "Study on optimization algorithms for renewable energy grid integration and energy storage systems.",
            "link": "https://www.sciencedirect.com/science/article/example789",
            "image": "https://via.placeholder.com/400x200/1abc9c/ffffff?text=Renewable+Energy"
        }
    ];

    renderSections();
}

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="card" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">
                    ${project.image ? `<img src="${project.image}" alt="${project.name}" class="card-image">` : ''}
                    <h3>${project.name}</h3>
                </div>
                <div class="card-back">
                    <p>${project.description}</p>
                    ${project.link ? `<a href="${project.link}" class="card-link" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">View Project →</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Company logo mapping - using local images or placeholders
const companyLogos = {
    'Mirror (W25)': 'data/images/mirror-logo.png',
    'BillionToOne': 'data/images/bto-logo.png',
    'AIMS Team': 'data/images/aims-logo.png',
};

// Function to get company logo
function getCompanyLogo(companyName) {
    return companyLogos[companyName] || 'https://via.placeholder.com/200x200/e9ecef/6c757d?text=' + encodeURIComponent(companyName);
}

// Function to create internship cards
function createInternshipCard(internship) {
    const logoUrl = getCompanyLogo(internship.company);
    return `
        <div class="card" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">
                    <div class="company-logo">
                        <img src="${logoUrl}" alt="${internship.company} logo" class="logo-image" onerror="this.src='https://via.placeholder.com/200x200/e9ecef/6c757d?text=${encodeURIComponent(internship.company)}'">
                    </div>
                    <div class="card-text-content">
                        <h3>${internship.role}</h3>
                        <p><strong>${internship.company}</strong></p>
                    </div>
                </div>
                <div class="card-back">
                    <p>${internship.description}</p>
                    ${internship.link ? `<a href="${internship.link}" class="card-link" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Visit Company →</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to create research cards
function createResearchCard(research) {
    return `
        <div class="card" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">
                    ${research.image ? `<img src="${research.image}" alt="${research.title}" class="card-image">` : ''}
                    <h3>${research.title}</h3>
                </div>
                <div class="card-back">
                    <p>${research.summary}</p>
                    ${research.link ? `<a href="${research.link}" class="card-link" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Read Paper →</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to render all sections
function renderSections() {
    // Load projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projectsData.map(createProjectCard).join('');

    // Load internships
    const internshipsGrid = document.getElementById('internships-grid');
    internshipsGrid.innerHTML = internshipsData.map(createInternshipCard).join('');

    // Load research
    const researchGrid = document.getElementById('research-grid');
    researchGrid.innerHTML = researchData.map(createResearchCard).join('');
}

// Load and render data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 70; // Height of the fixed navigation bar
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}); 