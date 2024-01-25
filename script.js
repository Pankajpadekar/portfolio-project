function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleMode() {
    let body = document.body;
    let modeIcon = document.getElementById('mode-icon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeIcon.innerHTML = '&#9789;';
    } else {
        modeIcon.innerHTML = '&#9728;';
    }
}