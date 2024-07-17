// script.js

// Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});

// Smooth Scrolling
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Project Filtering
const projects = document.querySelectorAll('.project');
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const filterValue = filter.getAttribute('data-filter');
    projects.forEach(project => {
      if (project.getAttribute('data-category') === filterValue) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name && email && message) {
    // Send email using API or email service
    console.log('Form submitted successfully!');
  } else {
    alert('Please fill in all fields!');
  }
});