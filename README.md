# Personal Portfolio Website

A clean, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features three main sections: Projects, Internships, and Research.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Clean Navigation**: Simple navigation bar with smooth scrolling
- **Dynamic Content**: Content loaded from JSON files for easy customization
- **Modern UI**: Clean, professional design with hover effects
- **Optional Images**: Support for project and research images
- **Clickable Links**: Direct links to projects, companies, and research papers

## File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── data/
│   ├── projects.json   # Projects data
│   ├── internships.json # Internships data
│   └── research.json   # Research data
└── README.md           # This file
```

## Customization

### Adding Your Projects

Edit `data/projects.json` to add your projects:

```json
[
    {
        "name": "Your Project Name",
        "description": "A brief description of your project",
        "link": "https://github.com/username/project",
        "image": "https://example.com/image.jpg"
    }
]
```

### Adding Your Internships

Edit `data/internships.json` to add your internships:

```json
[
    {
        "company": "Company Name",
        "role": "Your Role/Position",
        "description": "Description of your responsibilities and achievements",
        "link": "https://company-website.com"
    }
]
```

### Adding Your Research

Edit `data/research.json` to add your research:

```json
[
    {
        "title": "Research Paper Title",
        "summary": "Brief summary of your research",
        "link": "https://arxiv.org/abs/paper-id",
        "image": "https://example.com/research-image.jpg"
    }
]
```

## JSON Field Descriptions

### Projects
- `name`: Project name
- `description`: Short description of the project
- `link`: Optional link to project (GitHub, live demo, etc.)
- `image`: Optional image URL for the project

### Internships
- `company`: Company name
- `role`: Your role/position
- `description`: Description of responsibilities and achievements
- `link`: Optional link to company website

### Research
- `title`: Research paper or project title
- `summary`: Short summary of the research
- `link`: Optional link to paper or presentation
- `image`: Optional image URL for the research

## Running the Website

1. Simply open `index.html` in a web browser
2. For local development, you can use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- Images are optional - if not provided, the card will display without an image
- Links are optional - if not provided, no link button will be shown
- The website uses placeholder images by default - replace with your actual images
- All external links open in new tabs for better user experience 