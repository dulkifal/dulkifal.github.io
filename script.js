$("#submit-form").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbweIFSA6Z2u9F9n4eWKVWSIBj2TgUc9IMQ5JGS-UXiL54NtiFKh0uhH3a_6mZVW2K6O/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function () {
            alert("Form submitted successfully");
            window.location.reload();
            // window.location.href="https://google.com"
        },
        error: function () {
            alert("Error ");
        }
    });
});

window.addEventListener('scroll', function () {
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});

const scrollBtn = document.querySelector('.scrollToTop-btn'); // Ensure the selector is correct
if (scrollBtn) {
    window.addEventListener('scroll', function () {
        scrollBtn.classList.toggle('active', this.window.scrollY > 500);
    });

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

// Lazy-load project images (improves LCP)
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work .card .card-img img').forEach(img => {
    img.loading = 'lazy';
  });
});

// Simple form validation before AJAX
const form = document.querySelector('#submit-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const email = form.querySelector('input[name="email"]').value.trim();
    const name = form.querySelector('input[name="name"]').value.trim();
    if (!name || !email || !email.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid name and email.');
      return false;
    }
    // proceed — existing AJAX will run
  });
}

// Case study modal open/close (basic)
document.querySelectorAll('.view-case').forEach(btn => {
  btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    const id = btn.getAttribute('data-case');
    // For now show a lightweight modal with placeholder content
    let modal = document.querySelector('.case-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'case-modal';
      modal.innerHTML = '<div class="panel"><button class="close-case">Close</button><div class="case-content"></div></div>';
      document.body.appendChild(modal);
      modal.querySelector('.close-case').addEventListener('click', () => modal.style.display = 'none');
    }
    modal.style.display = 'flex';
    modal.querySelector('.case-content').innerHTML = `<h3>Case Study: ${id}</h3><p>Problem → Solution → Impact (metrics, links to repo & demo, architecture diagram)</p>`;
  });
});

console.log("It syllabus");
console.log("https://drive.google.com/drive/folders/17TZSULsm0csrgQdHQJw7i4dPN8Nc0rhM?usp=sharing")

