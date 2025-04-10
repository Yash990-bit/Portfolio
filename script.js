let roleElement = document.getElementById('role');
let roles = ['Frontend Developer', 'Backend Developer'];
let index = 0;
let currentText = '';
let isDeleting = false;
let speed = 150; 
let deleteSpeed = 100; 
let loopDelay = 1000; 

function typeWriter() {
    let targetText = roles[index];

    if (!isDeleting) {
        currentText = targetText.substring(0, currentText.length + 1);
        roleElement.textContent = currentText;

        if (currentText === targetText) {
            isDeleting = true;
            setTimeout(typeWriter, loopDelay);
        } else {
            setTimeout(typeWriter, speed); 
        }
    } else {
        currentText = currentText.substring(0, currentText.length - 1);
        roleElement.textContent = currentText;

        if (currentText === '') {
            isDeleting = false;
            index = (index + 1) % roles.length; 
            setTimeout(typeWriter, loopDelay); 
        } else {
            setTimeout(typeWriter, deleteSpeed); 
        }
    }
}
typeWriter();

document.getElementById("toggle-content").addEventListener("click", function(e) {
    e.preventDefault(); 

    const cityContent = document.querySelector(".city-content");
    const btnText = document.getElementById("toggle-content");

    cityContent.classList.toggle("show-full");
    btnText.textContent = cityContent.classList.contains("show-full") ? "Read less" : "Read more";
    
});

const readMoreButtons = document.querySelectorAll('.services-box .btn');
readMoreButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();  

        const serviceBox = this.closest('.services-box');
        const popupOverlay = serviceBox.querySelector('.popup-overlay');
        const popupContent = popupOverlay.querySelector('.popup-content');

        popupOverlay.classList.add('show');
        popupContent.style.height = popupContent.scrollHeight + "px"; 
    });
});

const closeButtons = document.querySelectorAll('.popup-overlay .close-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const popupOverlay = this.closest('.popup-overlay');
        const popupContent = popupOverlay.querySelector('.popup-content');

        popupContent.style.height = "0"; 
        setTimeout(() => {
            popupOverlay.classList.remove('show');
        }, 500); 
    });
});

const form = document.querySelector('.contact-id');
const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.style.display = 'block';
                form.reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const links = document.querySelectorAll('.navbar a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

