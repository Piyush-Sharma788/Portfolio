'use strict';

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// ================= SIDEBAR =================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// ================= TESTIMONIALS / ACHIEVEMENTS MODAL =================
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {

    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    // Safe handling (fix for your bug)
    if (avatar && modalImg) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }

    if (title) modalTitle.innerHTML = title.innerHTML;
    if (text) modalText.innerHTML = text.innerHTML;

    testimonialsModalFunc();
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// ================= FILTER =================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === filterItems[i].dataset.category
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;

    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// ================= CONTACT FORM =================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// ================= NAVIGATION =================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// ================= THEME TOGGLE =================
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.querySelector('[data-theme-toggle]');
  const themeIcon = document.querySelector('[data-icon-theme]');

  if (!themeToggleBtn || !themeIcon) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      themeIcon.name = 'sunny-outline';
      themeToggleBtn.querySelector('span').textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.name = 'moon-outline';
      themeToggleBtn.querySelector('span').textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  }

  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
    themeIcon.name = 'sunny-outline';
    themeToggleBtn.querySelector('span').textContent = 'Light Mode';
  }

  themeToggleBtn.addEventListener('click', toggleTheme);
});

// ================= CERTIFICATE FILTER =================
const certSelect = document.querySelector("[data-cert-select]");
const certSelectItems = document.querySelectorAll("[data-cert-select-item]");
const certSelectValue = document.querySelector("[data-cert-select-value]");
const certFilterBtns = document.querySelectorAll("[data-cert-filter-btn]");
const certItems = document.querySelectorAll("[data-cert-item]");

if (certSelect) {
  certSelect.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

for (let i = 0; i < certSelectItems.length; i++) {
  certSelectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (certSelectValue) certSelectValue.innerText = this.innerText;
    elementToggleFunc(certSelect);
    certFilterFunc(selectedValue);
  });
}

const certFilterFunc = function (selectedValue) {
  for (let i = 0; i < certItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === certItems[i].dataset.certCategory
    ) {
      certItems[i].classList.add("active");
    } else {
      certItems[i].classList.remove("active");
    }
  }
};

let lastClickedCertBtn = certFilterBtns[0];

for (let i = 0; i < certFilterBtns.length; i++) {
  certFilterBtns[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();

    if (certSelectValue) certSelectValue.innerText = this.innerText;

    certFilterFunc(selectedValue);

    if (lastClickedCertBtn) lastClickedCertBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedCertBtn = this;
  });
}

// ================= CONTACT MAILTO =================
const contactForm = document.querySelector("[data-form]");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    );

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src =
      "mailto:piyushsharma.ugi@gmail.com?subject=" + subject + "&body=" + body;

    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 3000);

    contactForm.reset();
    contactForm.querySelector("[data-form-btn]").setAttribute("disabled", "");

    formStatus.className = "form-status success";
    formStatus.innerHTML =
      "<strong>Thank you, " +
      name +
      "!</strong><br>Your message has been received.";
  });
}