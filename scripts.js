// Modal Registration Logic
const registerBtn = document.getElementById('registerBtn');
const registerNowBtn = document.getElementById('registerNow');
const modal = document.getElementById('registrationModal');
const closeBtn = document.querySelector('.close-btn');

// Open the modal
registerBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

registerNowBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
