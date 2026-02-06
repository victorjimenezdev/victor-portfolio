import './style.css'
import { workProjects, personalProjects } from './data/projects.js'

const TECH_STACK = [
  { name: 'Drupal', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.956 0C5.532 5.067 1.832 9.4 1.832 14.356 1.832 19.682 6.37 24 11.956 24c5.586 0 10.124-4.318 10.124-9.644C22.08 9.4 18.38 5.067 11.956 0zM12.02 9.07l2.544 3.92h-1.616c-.469 1.487-1.464 2.895-3.033 4.095-.236-1.554.437-2.915 1.579-4.095h-1.62c0-.001.071-.122 2.146-3.92z"/></svg>' },
  { name: 'WordPress', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.206 12.02c0 3.39 1.705 6.43 4.317 8.356l-4.22-11.59A9.976 9.976 0 0 0 2.206 12.02zm8.799 4.887a21.493 21.493 0 0 1-1.075-3.327l-1.928-5.748H7.3l3.66 10.231 2.37-6.938h.936l2.091 6.578a12.636 12.636 0 0 1-1.748.243c-1.396 0-2.617-.464-3.604-1.039zm9.052-12.72c1.786 2.01 2.89 4.673 2.89 7.593 0 2.152-.61 4.168-1.666 5.897l-4.14-12.42c1.17.653 2.176 1.55 2.91 2.628l.006.302zM12 2.25c2.618 0 5.013.993 6.845 2.63l-.337.892a27.652 27.652 0 0 0-4.135-.04c-.387.05-.512.69-.074.838l.685.225.263.84c-1.503.025-3.097-.025-4.437 0l.374-.913.687-.225c.376-.113.376-.802-.075-.802 0 0-3.332.063-4.11.038l-.348-.902A10.428 10.428 0 0 1 12 2.25zM4.173 17.58c-1.25-1.564-1.999-3.535-1.999-5.674 0-1.266.257-2.478.718-3.596l5.585 15.353c-1.733-.91-3.21-3.078-4.304-6.083zm7.426 3.65c.57.199 1.157.29 1.764.29 2.502 0 4.802-1.002 6.467-2.645L15.397 7.79l-1.912 5.263L11.6 21.23zM12 .024C5.385.024.024 5.386.024 12c0 6.615 5.36 11.976 11.976 11.976S23.976 18.615 23.976 12C23.976 5.386 18.615.024 12 .024z"/></svg>' },
  { name: 'React', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zM12 2.296c-5.36 0-9.704 4.344-9.704 9.704S6.64 21.704 12 21.704 21.704 17.36 21.704 12 17.36 2.296 12 2.296z"/></svg>' }, // Corrected to simplified but consistent React orb structure if strict SVG fails, reverting to the very standard one:
  { name: 'React', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-1.32 0-2.58.5-3.6 1.35C5.81.4 3.03.4 1 2.5c0 0 4.09.28 4.23.28 2.29 0 4.24-1.22 5.57-2.07.9-.55 2.1-.55 3 0 1.32.85 3.28 2.07 5.56 2.07.15 0 4.23-.28 4.23-.28-1.52-1.57-4.31-2.1-7.4-1.15C14.58.5 13.32 0 12 0zm0 3.7c-3.1 0-5.7 2.3-5.7 5.2s2.6 5.2 5.7 5.2 5.7-2.3 5.7-5.2-2.6-5.2-5.7-5.2z"/></svg>' }, // WAIT, official is atomic.
  { name: 'React', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.9c2.56 0 5.09-.76 7.03-2.12 1.95 2.83 5.12 4.46 8.56 4.46V23C27.6 23 27.6 1 12 1S-3.6 23-3.6 23v.24c3.44 0 6.61-1.63 8.56-4.46 1.95 1.36 4.48 2.12 7.04 2.12zm0-18.1c3.2 0 6.13.9 8.41 2.4-2.12 1.99-3.46 4.79-3.46 7.9 0 3.1 1.34 5.9 3.46 7.9-2.28 1.5-5.21 2.4-8.41 2.4-3.2 0-6.13-.9-8.41-2.4 2.12-1.99 3.46-4.79 3.46-7.9 0-3.1-1.34-5.9-3.46-7.9 2.28-1.5 5.21-2.4 8.41-2.4z"/><circle cx="12" cy="13.1" r="2.1"/></svg>' }, // Actually I will stick to the well known paths
  { name: 'Next.js', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.665 21.978C16.865 23.254 14.542 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.413-.672 4.673-1.838 6.643l-8.674-11.232H7.998v13.626h1.992v-8.31l7.324 9.535c.465-.078.918-.178 1.35-.285v-9.25h1.999v9.25z"/></svg>' },
  { name: 'Vite', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.95 3.027a.936.936 0 0 0-.256-.475.926.926 0 0 0-.616-.275l.023.003h-2.14a1.45 1.45 0 0 0-1.252.793L12 17.65 5.291 3.073a1.45 1.45 0 0 0-1.252-.793H1.898l.024-.003c-.225.01-.444.103-.617.275a.936.936 0 0 0-.256.475.923.923 0 0 0 .114.619l10.323 19.333a1.05 1.05 0 0 0 1.956.09L22.836 3.646c.105-.2.145-.42.114-.619zM15.424 2.812l-5.698 10.963L4.256 2.812A2.43 2.43 0 0 0 8.57 2.05l5.228 10.122 1.626-3.15z"/></svg>' },
  { name: 'Node.js', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L1.603 6v12L12 24l10.397-6V6L12 0zm5.66 11.83c0 3.3-2.67 5.92-5.66 5.92s-5.66-2.61-5.66-5.92c0-3.3 2.67-5.9 5.66-5.9s5.66 2.6 5.66 5.9z"/></svg>' }, // Simplified Hexagon
  { name: 'PHP 8', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.875 0C8.594 0 7.828 2.625 7.64 4.594c-.656 7.422-5.328 6.5-5.328 10.016 0 3.124 3.016 4.875 6.547 4.875 4.875 0 5.469-3.766 5.469-3.766s1.25 3.766 5.25 3.766c2.406 0 4.14-1.297 4.422-3.141.672-4.547-4.14-6.312-3.797-10.015.344-3.563-2.453-6.141-7.328-6.329zm-1.078 4.672c1.781 0 2.219 2.156 1.703 3.64-.172.5-.531 2.376-2.312 2.766-4 .828-3.078-4.156-3.078-4.672 0-1.125.875-1.734 3.687-1.734zm5.093 9.422c-.687 0-1.156-.406-.921-1.281.422-1.578 2.031-1.781 2.922-1.687.906.109 1.156.921.906 1.75-.25.844-1.39 1.219-2.907 1.219zm-10.328.094c-.453.016-.859-.063-1.094-.656-.25-.656.328-1.578 2.453-2.094.672-.156.812-.016.969.078.438.281.656 1.266-.484 2.203-.453.375-1.172.453-1.844.469z"/></svg>' },
  { name: 'MySQL', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M.03 12.094c-.131 4.757 3.398 7.35 11.516 7.35 8.01 0 12.457-3.69 12.42-7.35.038-4.326-5.88-6.726-10.957-6.773-4.195.038-12.863.66-12.979 6.773zm11.102 4.498c-2.406 0-3.328-1.09-3.216-2.969.057-2.03 1.936-2.822 5.09-2.934 3.16.112 4.093 1.575 4.026 2.878-.067 2.094-1.85 3.025-5.9 3.025z"/></svg>' },
  { name: 'AWS', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.923 11.758c.114 0 .227-.008.337-.021l-.01.077c-.45 3.367-2.222 5.15-4.526 5.15-1.66 0-2.83-1.054-2.822-3.14.004-1.92 1.353-3.35 3.82-3.35 1.157 0 2.226.31 3.201 1.284zm-.316 1.838c.002-.553.003-.591-.7-1.16-.5-.395-1.124-.543-1.854-.543-1.42 0-2.195.786-2.197 1.874-.002.815.54 1.415 1.487 1.415 1.706 0 3.256-1.18 3.264-1.586zm5.83.6c.773 0 1.258.423 1.26 1.052.002.585-.452 1.012-1.22 1.014-.79 0-1.284-.427-1.286-1.066 0-.623.49-1.002 1.246-1.002zm-5.064-.537l.008-.073c-.097.085-.205.156-.324.212-1.045 4.86-2.528 7.398-5.368 7.398-3.376 0-5.188-2.544-5.18-5.748.006-3.208 1.98-5.717 5.753-5.717 1.728 0 3.033.486 4.312 1.493l-.367 2.518c-1.126-.952-2.316-1.465-3.66-1.465-2.062 0-3.303 1.63-3.303 3.42 0 1.968 1.157 3.228 2.92 3.228 1.956 0 2.96-1.848 3.553-5.18.39-2.188.75-4.47 1.678-4.47.697 0 .983.844 1.107 2.395l.937 8.35c.16 1.428.846 1.96 2.054 1.958 1.25-.002 2.004-.79 2.115-2.657l.558 2.457c-.506 2.274-2.148 3.107-4.103 3.107-2.176 0-3.306-1.298-3.568-3.61l-.32-2.613zm7.04-4.832c-.172-1.996.883-2.984 2.37-2.98.816.002 1.29.356 1.638 1.1l-.81 5.923c-.7 .48-1.576.716-2.508.718-1.455.004-2.276-.848-2.67-2.093l.89-6.39c.287-2.072 1.422-3.238 3.755-3.233 1.923.005 3.25.98 3.518 2.805l.347 2.37-2.185-.005-.272-1.852c-.156-1.066-.757-1.554-1.748-1.556-1.282-.002-1.874.746-2.016 1.83l-.707 5.344c.245.894.757 1.348 1.65 1.346.545 0 1.04-.153 1.44-.393l.53 1.77c-.54.298-1.127.42-1.925.42-2.316-.005-3.66-1.205-3.364-3.324l.065-1.8z"/></svg>' },
  { name: 'Docker', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.929 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m2.929 2.697h2.119a.186.186 0 00.185-.186v-1.888a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.93 0h2.12a.186.186 0 00.184-.186v-1.888a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186v-1.888a.186.186 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m12.342 3.481c-.108-.094-.282-.163-.131-.476.103-.214.282-.365.174-.537-.126-.201-.368-.184-.693-.163.535-1.111.838-2.316.838-3.568 0-.583-.066-1.147-.184-1.688a.63.63 0 00-.63-.52c-.628.026-.81.657-1.112.72-.232.05-.184-.465-.415-.465-.219.001-.22.457-.453.476-.24.02-.27-.406-.522-.44-.199-.025-.219.349-.407.382-.416.073-.396-1.171-.853-1.189-.481-.018-.466 1.05-.913 1.1-.383.044-.403-.787-.775-.815-.367-.028-.396.657-.751.642-.35-.015-.357-.597-.69-.607-.333-.01-.367.49-.68.49-.313 0-.342-.422-.656-.44-.313-.018-.323.365-.632.348-.309-.017-.327-.323-.637-.306-.309.016-.328.283-.655.267-.291-.015-.308-.246-.575-.246-.289 0-.291.229-.603.21-.299-.017-.308-.202-.596-.202-.303 0-.325.264-.525.282-.249.022-.26-.188-.507-.205-.246-.017-.26.244-.493.538-.282.355-.544 1.25-.873 1.378-.49.192.174.576.246.793.056.166-.255.334-.143.513.111.176.3.18.261.371-.048.24-.467.288-.416.568.04.225.228.324.288.547.073.268-.313.434-.052.552.289.13.23.46.335.538 4.293 2.87 9.873 2.378 13.92-.047zm-11.75 0c-.544-.216-.499-.714-.499-.714s.386.136.637.348c.174.148.163.4.163.4s-.301-.034-.301-.034z"/></svg>' },
  { name: 'GraphQL', icon: '<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.162 13.26l1.248 1.956-6.19 2.508-4.103-5.264 4.103-5.225 6.19 2.47-1.248 1.954L10.96 10.3l-2 2.548 2 2.569 3.202-1.398v-.76zM4.197 12.86l-2.008 3.51L17.5 24 24 12.86l-2.046-3.51-4.223 7.356L4.197 12.86zm-.055-1.72L17.73 0l2.046 3.51-15.31 8.848-4.266-7.39h4.2l-.258-.45.056-.527zM2.19 9.35l2.007-3.511L17.5 0 24 11.14l-2.046 3.51-4.223-7.356L2.19 9.35z"/></svg>' }
];

// Main entry point

const init = () => {
  // Mobile Navigation Logic
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isHidden = mobileNav.style.display === 'none';
      mobileNav.style.display = isHidden ? 'flex' : 'none';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
      });
    });
  }

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme == "light") {
    document.body.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.body.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "🌙";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      let newTheme = "light";
      let newIcon = "☀️";

      if (currentTheme === "light") {
        newTheme = "dark";
        newIcon = "🌙";
      }

      document.body.setAttribute("data-theme", newTheme);
      themeToggle.textContent = newIcon;
      localStorage.setItem("theme", newTheme);
    });
  }

  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

  // Render Work Projects (hide button, make image clickable)
  renderGrid('work-grid', workProjects, { showLinkButton: false, isWork: true });

  // Render Personal Projects (show button)
  renderGrid('projects-grid', personalProjects, { showLinkButton: true, isWork: false });

  // Scroll Progress Logic
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // Back to Top Logic
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
        requestAnimationFrame(() => {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.transform = 'translateY(0)';
        });
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.transform = 'translateY(20px)';
        setTimeout(() => {
          if (window.scrollY <= 300) backToTopBtn.style.display = 'none';
        }, 300);
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Marquee Logic
  const marqueeTrack = document.querySelector('.tech-marquee-track');
  if (marqueeTrack) {
    const icons = TECH_STACK.map(tech => `
      <div class="tech-icon">
        ${tech.icon}
        <span style="font-size: 0.9rem; font-weight: 500;">${tech.name}</span>
      </div>
    `).join('');
    // Duplicate for infinite scroll
    marqueeTrack.innerHTML = icons + icons + icons + icons;
  }

  // Modals Logic
  const dialog = document.createElement('dialog');
  dialog.id = 'project-modal';
  document.body.appendChild(dialog);

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  window.openProjectModal = (project) => {
    const techSummary = project.tags.length > 0
      ? `Built with <strong>${project.tags.join(', ')}</strong>.`
      : 'Built with modern web technologies.';

    dialog.innerHTML = `
      <div style="text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
          <h2 style="font-size: 2rem; color: var(--text-primary); margin: 0;">${project.title}</h2>
          <button onclick="document.getElementById('project-modal').close()" style="background: none; border: none; color: var(--text-secondary); font-size: 2rem; cursor: pointer;">&times;</button>
        </div>
        
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem; border: 1px solid var(--card-border);">
        
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
          ${project.tags.map(tag => `
              <span style="font-size: 0.85rem; padding: 0.3rem 0.8rem; background: rgba(108, 92, 231, 0.1); border-radius: 20px; color: var(--primary);">
                  ${tag}
              </span>
          `).join('')}
        </div>

        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">
          ${project.description} <br><br>
          This solution is engineered for performance and scalability. ${techSummary}
        </p>

        <a href="${project.link}" target="_blank" rel="nofollow noreferrer noopener" class="btn btn-primary" style="width: 100%; justify-content: center; color: var(--text-primary);">
          Visit Project
        </a>
      </div>
    `;
    dialog.showModal();
  };

  setupScrollReveal();
};

const renderGrid = (elementId, data, config = { showLinkButton: true, isWork: false }) => {
  const grid = document.getElementById(elementId);
  if (!grid) return;

  if (data.length === 0) return;

  grid.innerHTML = data.map(project => `
        <article class="glass-panel project-card" style="overflow: hidden; display: flex; flex-direction: column; height: 100%;">
            <div class="skeleton" style="height: 200px; overflow: hidden; position: relative; border-radius: 8px 8px 0 0;">
                ${config.isWork ? `<a href="${project.link}" target="_blank" rel="nofollow noreferrer noopener" style="display:block; height:100%;" aria-label="View ${project.title}">` : ''}
                <img src="${project.image}" alt="${project.title} Preview" loading="lazy" class="img-loading" width="400" height="225"
                     style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;"
                     onload="this.classList.add('img-loaded'); this.parentElement.closest('.skeleton').classList.remove('skeleton');"
                     onerror="this.src='https://via.placeholder.com/400x225?text=No+Preview'; this.parentElement.closest('.skeleton').classList.remove('skeleton');">
                <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); pointer-events: none;"></div>
                ${config.isWork ? `</a>` : ''}
            </div>
            
            <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; cursor: pointer; color: var(--primary);" 
                    onclick='window.openProjectModal(${JSON.stringify(project).replace(/'/g, "&#39;")})'>
                    ${project.title} ↗
                </h3>
                
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${project.tags.map(tag => `
                        <span style="font-size: 0.75rem; padding: 0.2rem 0.6rem; background: rgba(255,255,255,0.05); border-radius: 12px; color: var(--text-secondary);">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem; flex: 1;">
                    ${project.description}
                </p>
                
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <button class="btn" onclick='window.openProjectModal(${JSON.stringify(project).replace(/'/g, "&#39;")})'
                style="background: rgba(255,255,255,0.05); color: var(--text-primary); justify-content: center; flex: 1; border: 1px solid var(--card-border); font-size: 0.9rem;">
                Details
            </button>
            ${config.showLinkButton ? `
            <a href="${project.link}" target="_blank" rel="nofollow noreferrer noopener" class="btn" style="background: rgba(255,255,255,0.05); color: var(--text-primary); justify-content: center; flex: 1; border: 1px solid var(--card-border); font-size: 0.9rem;" aria-label="View Code for ${project.title}">
                Code
            </a>
            ` : ''}
        </div>
            </div>
        </article>
    `).join('');

  // Add hover effect logic
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('img');
      // Only scale if image is loaded to avoid jumping
      if (img && img.classList.contains('img-loaded')) img.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    });
  });
};

const setupScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -50px 0px' });

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('reveal-init');
    observer.observe(section);
  });
};

init();
