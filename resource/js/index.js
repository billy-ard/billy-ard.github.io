let about = document.getElementById("about");
let project = document.getElementById("project");
let contact = document.getElementById("contact");
let nav_home  = document.getElementById("nav-home");
let nav_about  = document.getElementById("nav-about");
let nav_project = document.getElementById("nav-project");
let nav_contact = document.getElementById("nav-contact");
let current_display = document.getElementById("about");

function switchDisplay (evt){
    let target = evt.currentTarget.myParam;
    
    //assign class no-display if current_display element not null
    if(current_display !== null){
        current_display.style.display = 'none'
    }

    current_display = target;
    current_display.style.display = 'flex';
}

nav_about.addEventListener('click',switchDisplay)
nav_about.myParam = about;

nav_project.addEventListener('click',switchDisplay)
nav_project.myParam = project;

nav_contact.addEventListener('click',switchDisplay)
nav_contact.myParam = contact;