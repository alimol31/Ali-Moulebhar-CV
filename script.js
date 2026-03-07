// ===== EmailJS Configuration =====
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};

(function() {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

// ===== Mobile Menu Toggle =====
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.section-header, .portfolio-card, .tech-card, .experience-card, .info-item, .social-links, .contact-form');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== Hero Title Animation =====
const heroLines = document.querySelectorAll('.hero-title .line');

heroLines.forEach((line, index) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(80px)';
  line.style.transition = `all 0.8s cubic-bezier(0.87, 0, 0.13, 1) ${400 + index * 150}ms`;
});

setTimeout(() => {
  heroLines.forEach(line => {
    line.style.opacity = '1';
    line.style.transform = 'translateY(0)';
  });
}, 100);

// ===== Badge Animation =====
const badge = document.querySelector('.badge');
if (badge) {
  badge.style.opacity = '0';
  badge.style.transform = 'scale(0.8)';
  badge.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s';

  setTimeout(() => {
    badge.style.opacity = '1';
    badge.style.transform = 'scale(1)';
  }, 1000);
}

// ===== About Section Animation =====
const aboutImage = document.querySelector('.about-image');
const aboutName = document.querySelector('.about-name');
const aboutTitle = document.querySelector('.about-title');

if (aboutImage && aboutName) {
  aboutImage.style.opacity = '0';
  aboutImage.style.transform = 'translateY(30px)';
  aboutImage.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';

  aboutName.style.opacity = '0';
  aboutName.style.transform = 'translateY(20px)';
  aboutName.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s';

  if (aboutTitle) {
    aboutTitle.style.opacity = '0';
    aboutTitle.style.transform = 'translateY(20px)';
    aboutTitle.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s';
  }

  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutImage.style.opacity = '1';
        aboutImage.style.transform = 'translateY(0)';
        aboutName.style.opacity = '1';
        aboutName.style.transform = 'translateY(0)';
        if (aboutTitle) {
          aboutTitle.style.opacity = '1';
          aboutTitle.style.transform = 'translateY(0)';
        }
        aboutObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  aboutObserver.observe(document.getElementById('about'));
}

// ===== Portfolio Cards Stagger Animation =====
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 120}ms`;
});

const portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      portfolioCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
      portfolioObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

const portfolioSection = document.getElementById('portfolio');
if (portfolioSection) {
  portfolioObserver.observe(portfolioSection);
}

// ===== Tech Stack Cards Animation =====
const techCards = document.querySelectorAll('.tech-card');

// Animate progress bars on scroll
techCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 150}ms`;

  const progressFill = card.querySelector('.progress-fill');
  if (progressFill) {
    const targetWidth = progressFill.style.width;
    progressFill.style.width = '0%';

    setTimeout(() => {
      progressFill.style.width = targetWidth;
    }, 600 + index * 150);
  }
});

const techObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      techCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
      techObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

const techSection = document.getElementById('tech-stack');
if (techSection) {
  techObserver.observe(techSection);
}

// ===== Skills Tags Animation =====
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
  tag.style.opacity = '0';
  tag.style.transform = 'scale(0.8)';
  tag.style.transition = `all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${800 + index * 80}ms`;
});

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillTags.forEach(tag => {
        tag.style.opacity = '1';
        tag.style.transform = 'scale(1)';
      });
      skillsObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

if (techSection) {
  skillsObserver.observe(techSection);
}

// ===== Experience Cards Animation =====
const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 150}ms`;
});

const experienceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      experienceCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
      experienceObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

const experienceSection = document.getElementById('experience');
if (experienceSection) {
  experienceObserver.observe(experienceSection);
}

// ===== Contact Form Animation =====
const contactForm = document.getElementById('contact-form');
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach((group, index) => {
  group.style.opacity = '0';
  group.style.transform = 'translateY(20px)';
  group.style.transition = `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${500 + index * 80}ms`;
});

const formButton = document.querySelector('.contact-form .btn-primary');
if (formButton) {
  formButton.style.opacity = '0';
  formButton.style.transform = 'translateY(20px)';
  formButton.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 820ms';
}

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      formGroups.forEach(group => {
        group.style.opacity = '1';
        group.style.transform = 'translateY(0)';
      });
      if (formButton) {
        formButton.style.opacity = '1';
        formButton.style.transform = 'translateY(0)';
      }
      contactObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

const contactSection = document.getElementById('contact');
if (contactSection) {
  contactObserver.observe(contactSection);
}

// ===== EmailJS Contact Form Handling =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const btnLoader = document.getElementById('btn-loader');
  const formStatus = document.getElementById('form-status');
  const statusIcon = document.getElementById('status-icon');
  const statusMessage = document.getElementById('status-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const contactNumber = Math.floor(Math.random() * 1000000);
      document.querySelector('input[name="contact_number"]').value = contactNumber;

      if (!contactForm.checkValidity()) {
        showStatus('error', 'Please fill in all required fields correctly.');
        return;
      }

      setLoadingState(true);
      hideStatus();

      emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        contactForm
      )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showStatus('success', 'Thank you! Your message has been sent successfully. I will get back to you soon.');
        contactForm.reset();
        setLoadingState(false);
      }, function(error) {
        console.error('FAILED...', error);
        showStatus('error', 'Sorry, something went wrong. Please try again later or contact me directly via email.');
        setLoadingState(false);
      });
    });
  }

  function showStatus(type, message) {
    if (!formStatus) return;

    formStatus.style.display = 'block';
    formStatus.className = `form-status ${type}`;

    if (type === 'success') {
      statusIcon.innerHTML = '✓';
    } else {
      statusIcon.innerHTML = '✕';
    }

    statusMessage.textContent = message;

    if (type === 'success') {
      setTimeout(() => {
        hideStatus();
      }, 5000);
    }
  }

  function hideStatus() {
    if (formStatus) {
      formStatus.style.display = 'none';
    }
  }

  function setLoadingState(loading) {
    if (loading) {
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      btnIcon.style.display = 'none';
      btnLoader.style.display = 'inline-block';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';
    } else {
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      btnIcon.style.display = 'inline-block';
      btnLoader.style.display = 'none';
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
    }
  }
});

// ===== Footer Animation =====
const footerLine = document.querySelector('.footer-line');
const footerLinks = document.querySelectorAll('.footer-links a');
const footerCopyright = document.querySelector('.footer-copyright');
const footerSocial = document.querySelector('.footer-social a');

if (footerLine) {
  footerLine.style.transform = 'scaleX(0)';
  footerLine.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
}

footerLinks.forEach((link, index) => {
  link.style.opacity = '0';
  link.style.transform = 'translateY(10px)';
  link.style.transition = `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 100}ms`;
});

if (footerCopyright) {
  footerCopyright.style.opacity = '0';
  footerCopyright.style.transition = 'opacity 0.5s ease 500ms';
}

if (footerSocial) {
  footerSocial.style.opacity = '0';
  footerSocial.style.transform = 'scale(0)';
  footerSocial.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 600ms';
}

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (footerLine) {
        footerLine.style.transform = 'scaleX(1)';
      }
      footerLinks.forEach(link => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
      });
      if (footerCopyright) {
        footerCopyright.style.opacity = '1';
      }
      if (footerSocial) {
        footerSocial.style.opacity = '1';
        footerSocial.style.transform = 'scale(1)';
      }
      footerObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const footer = document.querySelector('.footer');
if (footer) {
  footerObserver.observe(footer);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Parallax Effect for Hero Circles =====
const circles = document.querySelectorAll('.circle');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.4;

  circles.forEach((circle, index) => {
    const speed = (index + 1) * 0.1;
    circle.style.transform = `translateY(${parallax * speed}px)`;
  });
}, { passive: true });