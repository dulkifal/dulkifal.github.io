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
console.log("It syllabus");
console.log("https://drive.google.com/drive/folders/17TZSULsm0csrgQdHQJw7i4dPN8Nc0rhM?usp=sharing")

