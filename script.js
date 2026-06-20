
    // ===== EDIT YOUR DATA HERE =====
    const skills = [
      { name: "HTML", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 70 },
    ];

    const projects = [
      { title: "E-Commerce Dashboard", description: "A full-featured admin dashboard with analytics and order management.", tech: ["React", "TypeScript", "Tailwind"], link: "https://github.com/johndoe/ecommerce-dashboard" },
      { title: "Weather App", description: "A sleek weather app with location-based forecasts and interactive maps.", tech: ["React", "API", "CSS"], link: "https://github.com/johndoe/weather-app" },
      { title: "Task Manager", description: "A productivity tool with drag-and-drop tasks and team collaboration.", tech: ["Node.js", "MongoDB", "React"], link: "https://github.com/johndoe/task-manager" },
      { title: "Portfolio Website", description: "This portfolio — a responsive, dark-themed personal site.", tech: ["HTML", "CSS", "JS"], link: "https://github.com/johndoe/portfolio" },
    ];
    // ================================

    // Render skills
    const skillsHTML = skills.map(s => `
      <div class="skill-item">
        <label><span>${s.name}</span><span>${s.level}%</span></label>
        <div class="skill-bar"><div class="skill-fill" style="width:${s.level}%"></div></div>
      </div>
    `).join('');
    document.getElementById('skillsGrid').innerHTML = skillsHTML;

    // Render projects
    const projectsHTML = projects.map(p => `
      <a href="${p.link}" target="_blank" class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      </a>
    `).join('');
    document.getElementById('projectsGrid').innerHTML = projectsHTML;

    // Mobile menu
    document.querySelector('.hamburger').addEventListener('click', function() {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
    document.querySelectorAll('.mobile-menu a').forEach(a => {
      a.addEventListener('click', () => { document.querySelector('.mobile-menu').style.display = 'none'; });
    });
  