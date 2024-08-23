const home = document.getElementById("home");
const project = document.getElementById("projects");
const contact = document.getElementById("contact");

function hideAllSections() {
    // Hide all sections
    document.getElementById("projectdiv").style.display = 'none';
    document.getElementById("info1").style.display = 'none';
}

home.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    hideAllSections(); // Hide all sections
});

project.addEventListener("click", function(event){
    event.preventDefault(); // Prevents the default behavior of the link

    const projectSection = document.getElementById("projectdiv");
    if (projectSection) {
        projectSection.style.display = 'flex';
        document.getElementById("info1").style.display = 'none';

        console.log('Project clicked: Project section displayed.');
    } else {
        console.error('Project section not found.');
    }
});

contact.addEventListener("click", function(event) {
    event.preventDefault();

    const infoSection = document.getElementById("info1");
    if (infoSection) {
        infoSection.style.display = 'flex';
        document.getElementById("projectdiv").style.display = 'none';

        console.log('Info clicked: Info section displayed.');
    } else {
        console.error('Info section not found.');
    }
});