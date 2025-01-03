const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
};

for (let i = 0; i < 100; i++) {
    createConfetti();
}

// Show the modal when the page loads
window.addEventListener('load', () => {
    var myModal = new bootstrap.Modal(document.getElementById('announcementModal'), {
        keyboard: false
    });
    myModal.show();
});

// Redirect when the modal is closed
document.getElementById('announcementModal').addEventListener('hidden.bs.modal', function () {
    window.location.href = "https://www.bidalert.in";  // Redirect to home page
});
document.addEventListener('DOMContentLoaded', function () {
    var popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
    popupModal.show();
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = new bootstrap.Modal(document.getElementById('announcementModal'));
    modal.show();
});
