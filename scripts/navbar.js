// create navbar object to be displayed as html on page

export const navbar = () => {
    let body = document.getElementById("nav")
    body.innerHTML = `
        <nav class="navbar navbar-expand-sm bg-transparent">
            <a class="navbar-brand" href="./index.html"><img src="./assets/images/initials-logo.png"></a>
            <button class="navbar-toggler custom-toggler" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="myNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="./index.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="./projects.html">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="./resume.html">Resume</a></li>
                    <li class="nav-item"><a class="nav-link" href="./contact.html">Contact<a/></li>
                </ul>
            </div>
        </nav>`
};








