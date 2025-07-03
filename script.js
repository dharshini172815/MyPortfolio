
// Toggle mobile menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('show');
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form submission
// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const formData = new FormData(contactForm);
//   const formDataObj = Object.fromEntries(formData.entries());
  
//   // In a real application, you would send this data to your server
//   console.log('Form Data:', formDataObj);
  
//   // Show a success message
//   alert('Thank you for your message! I will get back to you soon.');
  
//   // Reset the form
//   contactForm.reset();
// });
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(contactForm);

  fetch("https://formsubmit.co/ajax/dharshini172815@gmail.com", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert("✅ Your message sent successfully!");
        contactForm.reset();
      } else {
        alert("❌ Failed to send. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    });
});



// Add animation to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.education-card, .experience-card, .project-card, .contact-card, .skill-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Apply initial styles
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.education-card, .experience-card, .project-card, .contact-card, .skill-card');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger animation on initial load
  animateOnScroll();
});

// Listen for scroll events to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
