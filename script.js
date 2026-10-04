function toggleAbout(event) {
    event.stopPropagation();

    const aboutshow = document.getElementById("aboutshow");
    aboutshow.classList.toggle("active");
}
window.addEventListener("click", function (event) {
    const aboutshow = this.document.getElementById("aboutshow");
    if (aboutshow && aboutshow.classList.contains("active") && !aboutshow.contains(event.target)) {
        aboutshow.classList.remove("active");
    }
});

function toggleContact(event) {
    if (event) event.stopPropagation();

    const formshow = document.getElementById("formshow");
    if (formshow) {
        formshow.classList.toggle("react");
    }
}

window.addEventListener("click", function (event) {
    const formshow = document.getElementById("formshow");
    if (formshow && formshow.classList.contains("react") && !formshow.contains(event.target)) {
        formshow.classList.remove("react");
    }
});

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("theme-toggle");


    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        if (button) button.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");

    } else {
        if (button) button.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-toggle");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (button) button.innerHTML = "☀️";

    }
});