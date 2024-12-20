document.addEventListener('DOMContentLoaded', function () {
    // Placeholder functionality for the "Take Test" button (could be linked to actual exam logic)
    const takeTestButtons = document.querySelectorAll('.exam-card .btn');

    takeTestButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Redirecting to exam...');
            // You can replace this with actual exam redirection or modal functionality.
        });
    });
});
