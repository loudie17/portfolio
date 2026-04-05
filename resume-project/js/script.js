// PERSONALIZED GREETING
let user = prompt("Enter your name:") || "Guest";
document.getElementById("welcome").textContent = "Hello, " + user + "!";

// TOGGLE SKILLS
let btn = document.getElementById("toggleSkills");
btn.onclick = function () {
    let skills = document.getElementById("skillList");
    if (skills.style.display === "none") {
        skills.style.display = "block";
        btn.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        btn.textContent = "Show Skills";
    }
};

// FORM VALIDATION
let form = document.getElementById("contactForm");
form.onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        document.getElementById("formMessage").textContent = "Please fill all fields!";
    } else {
        document.getElementById("formMessage").textContent = "Message sent! ✅";
        form.reset();
    }
};

// JQUERY
$(document).ready(function () {
    // Collapsible Projects
    $("#projects h2").on("click", function () {
        $("#projectList").slideToggle();
    });

    // Live Project Search
    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#projectList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().includes(value));
        });
    });
});