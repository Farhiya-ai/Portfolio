<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farhiya's Portfolio</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- CSS Styles -->
    <style>
       body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #1F2937;  /* dark gray text */
    margin: 0;
    padding: 0;
    background-color: #FDF6E3; /* soft page background */
}

nav {
    background-color: #4B6CB7; /* primary blue-purple */
    padding: 10px 20px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

nav a:hover {
    color: #FBCB0A;  /* gold accent on hover */
    text-decoration: underline;
}

.section {
    padding: 40px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
}

#about {
    background-color: #E0E7FF; /* soft light blue */
    text-align: center;
}

#skills {
    background-color: #F0F4F8; /* light gray-blue */
}

#projects {
    background-color: #E0E7FF;
}

#contact {
    background-color: #F0F4F8;
}

h1, h2 {
    color: #4B6CB7;  /* primary color for headings */
    margin-top: 0;
}

ul {
    padding-left: 20px;
}

/* Project cards */
.project-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    flex: 1 1 250px;
    text-decoration: none;
    color: #1F2937;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.card h3 {
    margin-top: 0;
    color: #4B6CB7;
}

#projects a {
    text-decoration: none;
    color: inherit;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #4B6CB7;
    color: white;
}

footer a {
    color: #FBCB0A;
    text-decoration: none;
    font-weight: 600;
    margin: 0 5px;
}

footer a:hover {
    text-decoration: underline;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

    </style>
</head>
<body>

    <!-- Navbar -->
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- About Section -->
    <section id="about" class="section">
        <h1>Hello 👋, I'm Farhiya</h1>
        <p>Just building skills and projects, one step at a time!</p>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
        <h2>Skills</h2>
        <ul>
            <li>Cloud Computing: AWS (Solutions Architect, Gen AI, ML)</li>
            <li>Programming: Python</li>
            <li>Machine Learning & AI projects</li>
            <li>Serverless development (Lambda, API Gateway)</li>
        </ul>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="project-cards">
            <a href="https://singlepageapplication1.s3.us-east-2.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer" class="card">
                <h3>End-to-End AWS LLM Setup</h3>
                <p>This site demonstrates a full serverless AI workflow on AWS.</p>
            </a>
            <a href="https://github.com/your-username/serverless-api-demo" target="_blank" rel="noopener noreferrer" class="card">
                <h3>Serverless API Demo</h3>
                <p>A demo showing serverless API integration with AI services.</p>
            </a>
            <div class="card">
                <h3>Upcoming AI/ML Projects</h3>
                <p>Exciting projects coming soon!</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:farhiya.solutions@gmail.com">farhiya.solutions@gmail.com</a></p>
    </section>

    <!-- Footer -->
    <footer>
        <p>Find me online: 
            <a href="https://github.com/farhiya-ai" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a> | 
            <a href="https://www.linkedin.com/in/farhiyafarah" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </p>
    </footer>

</body>
</html>
