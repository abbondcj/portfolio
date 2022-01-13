// create navbar object to be displayed as html on page

export const navbar = () => {
    let body = document.getElementById("nav")
    body.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src="./assets/images/initials-logo.png"></a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="myNav">
                <div class="navbar-nav">
                    <a class="nav-link" href="./index.html">Home</a>
                    <a class="nav-link" href="./projects.html">Projects</a>
                    <a class="nav-link" href="./resume.html">Resume</a>
                    <a class="nav-link" href="./about.html">About</a>
                    <a class="nav-link" href="./contact.html">Contact<a/>
                </div>
            </div>
        </nav>`
};