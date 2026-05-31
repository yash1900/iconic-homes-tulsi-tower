document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Configuration Injection
  injectConfigValues();

  // Render Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Sticky Header Behavior
  initStickyHeader();

  // 3. Mobile Navigation Menu
  initMobileNav();

  // 4. WhatsApp Widget Behavior
  initWhatsAppWidget();

  // 5. Contact Form Submissions
  initContactForms();

  // 6. Active Nav Highlight
  highlightActiveLink();
});

/**
 * Dynamically injects global configuration values from CONFIG into HTML elements
 */
function injectConfigValues() {
  const config = window.CONFIG;
  if (!config) return;

  // Company Name
  document.querySelectorAll('[data-config="company"]').forEach(el => {
    el.textContent = config.companyName;
  });

  // Taglines
  document.querySelectorAll('[data-config="tagline"]').forEach(el => {
    el.textContent = config.tagline;
  });
  document.querySelectorAll('[data-config="tagline-hindi"]').forEach(el => {
    el.textContent = config.taglineHindi;
  });

  // RERA Badge and numbers
  document.querySelectorAll('[data-config="rera"]').forEach(el => {
    el.textContent = config.reraNumber;
  });
  document.querySelectorAll('[data-config="rera-link"]').forEach(el => {
    el.href = config.reraPortalUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Phone Contact
  document.querySelectorAll('[data-config="phone"]').forEach(el => {
    if (el.tagName === 'A') {
      el.href = `tel:${config.contactPhoneRaw}`;
    }
    el.textContent = config.contactPhone;
  });

  // Email Contact
  document.querySelectorAll('[data-config="email"]').forEach(el => {
    if (el.tagName === 'A') {
      el.href = `mailto:${config.contactEmail}`;
    }
    el.textContent = config.contactEmail;
  });

  // WhatsApp Links
  document.querySelectorAll('[data-config="whatsapp"]').forEach(el => {
    const encodedMsg = encodeURIComponent(config.whatsappDefaultMessage);
    el.href = `https://wa.me/${config.whatsappNumber}?text=${encodedMsg}`;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Office Address & Hours
  document.querySelectorAll('[data-config="address"]').forEach(el => {
    el.textContent = config.officeAddress;
  });
  document.querySelectorAll('[data-config="hours"]').forEach(el => {
    el.textContent = config.officeHours;
  });

  // Google Maps Frame
  document.querySelectorAll('[data-config="map-iframe"]').forEach(el => {
    el.src = config.officeMapEmbedUrl;
  });

  // Core Stats
  document.querySelectorAll('[data-config="stat-years"]').forEach(el => {
    el.textContent = config.stats.yearsInBusiness;
  });
  document.querySelectorAll('[data-config="stat-homes"]').forEach(el => {
    el.textContent = config.stats.homesDelivered;
  });
  document.querySelectorAll('[data-config="stat-active"]').forEach(el => {
    el.textContent = config.stats.activeProjects;
  });
  document.querySelectorAll('[data-config="stat-happy"]').forEach(el => {
    el.textContent = config.stats.happyFamilies;
  });
  
  // Possession Date
  document.querySelectorAll('[data-config="possession"]').forEach(el => {
    el.textContent = config.projectPossessionDate;
  });
}

/**
 * Configures the header to change styles on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const isTransparent = header.classList.contains('header-transparent');
  if (!isTransparent) {
    header.classList.add('scrolled');
    return;
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      // Don't remove scrolled class if mobile menu is open
      const menu = document.querySelector('.nav-menu');
      if (menu && !menu.classList.contains('open')) {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once initially to set the right state
  handleScroll();
}

/**
 * Controls the mobile slide-out navigation overlay
 */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  const header = document.querySelector('.site-header');

  if (!toggle || !menu) return;

  const isTransparent = header.classList.contains('header-transparent');

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    
    // Ensure header is solid/scrolled style when menu is open
    if (isOpen) {
      header.classList.add('scrolled');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
      if (isTransparent && window.scrollY <= 50) {
        header.classList.remove('scrolled');
      }
    }
  });

  // Close mobile menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
      if (isTransparent && window.scrollY <= 50) {
        header.classList.remove('scrolled');
      }
    });
  });
}

/**
 * Manages the floating WhatsApp widget tooltip animations
 */
function initWhatsAppWidget() {
  const tooltip = document.querySelector('.whatsapp-tooltip');
  if (!tooltip) return;

  // Auto-show tooltip 2 seconds after loading
  setTimeout(() => {
    tooltip.classList.add('visible');
    
    // Auto-hide tooltip after 5 more seconds
    setTimeout(() => {
      tooltip.classList.remove('visible');
    }, 5000);
  }, 2000);
}

/**
 * Handles form validation and submission
 */
function initContactForms() {
  const forms = document.querySelectorAll('.lead-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const emailInput = form.querySelector('[name="email"]');
      const messageInput = form.querySelector('[name="message"]');
      
      // Clear previous error states
      form.querySelectorAll('.form-error').forEach(err => err.style.display = 'none');
      form.querySelectorAll('.form-control').forEach(ctrl => ctrl.style.borderColor = '');

      // Validate Name
      if (nameInput && nameInput.value.trim().length < 2) {
        showError(nameInput, "Please enter your name (minimum 2 characters)");
        isValid = false;
      }

      // Validate Phone (Indian mobile numbers: 10 digits, optionally starting with country code)
      if (phoneInput) {
        const phoneRegex = /^[6-9]\d{9}$/;
        const val = phoneInput.value.replace(/\s+/g, '').replace(/^\+91/, '');
        if (!phoneRegex.test(val)) {
          showError(phoneInput, "Please enter a valid 10-digit mobile number");
          isValid = false;
        }
      }

      // Validate Email (Optional, but if entered must be valid)
      if (emailInput && emailInput.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          showError(emailInput, "Please enter a valid email address");
          isValid = false;
        }
      }

      if (isValid) {
        // Collect form data
        const formData = {
          name: nameInput ? nameInput.value.trim() : '',
          phone: phoneInput ? phoneInput.value.trim() : '',
          email: emailInput ? emailInput.value.trim() : '',
          message: messageInput ? messageInput.value.trim() : '',
          sourceUrl: window.location.href,
          timestamp: new Date().toISOString()
        };

        // Form submission animation/feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending Details...";

        // Simulate API network request
        setTimeout(() => {
          console.log("Form successfully submitted:", formData);
          
          // Clear inputs
          form.reset();
          
          // Show custom success message
          submitBtn.textContent = "Enquiry Submitted!";
          submitBtn.style.backgroundColor = "var(--color-success-border)";
          
          // Display alert
          alert(`Thank you, ${formData.name}! Your enquiry has been received. Our site manager will contact you at ${formData.phone} shortly.`);
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = "";
          }, 3000);
        }, 1200);
      }
    });
  });
}

function showError(inputEl, msg) {
  inputEl.style.borderColor = '#C0392B';
  const group = inputEl.closest('.form-group');
  if (group) {
    const errorEl = group.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
    }
  }
}

/**
 * Automatically sets the active state on the current page nav link
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  // Clean page name and link paths to prevent mismatch on Vercel (.html extension stripping)
  const cleanPath = pageName.replace('.html', '').toLowerCase();
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const cleanHref = href.replace('.html', '').toLowerCase();
    
    if (cleanHref === cleanPath || (cleanHref === 'index' && cleanPath === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
