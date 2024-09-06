// Example: Simple alert when the page loads
// window.onload = function() {
//    alert("Welcome to My GitHub Page!");
// };

// Example: Basic functionality (expandable sections)
document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});
