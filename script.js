document.addEventListener('DOMContentLoaded', () => {

    // --- Category Button Highlighting ---
    const categoryButtons = document.querySelectorAll('.tag-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');
        });
    });

});
