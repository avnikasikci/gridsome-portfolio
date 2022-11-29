<template>
    <div>
        <!-- <nav class="navbar navbar-expand-lg "> -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
            style="    background-color: #0c1727 !important;">


            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{ siteName }}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
<!-- 
        <nav class="nav__StyledNav-ghklvd-1 kFCHyX">
            <div class="logo fade-enter-done" tabindex="-1"><a href="/" aria-label="home"><svg id="logo"
                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
                        <title>Logo</title>
                        <g transform="translate(-8.000000, -2.000000)">
                            <g transform="translate(11.000000, 5.000000)">
                                <path
                                    d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                                    fill="currentColor"></path>
                                <polygon id="Shape" stroke="currentColor" stroke-width="5" stroke-linecap="round"
                                    stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
                            </g>
                        </g>
                    </svg></a></div>
            <div class="nav__StyledLinks-ghklvd-2 buZqzj">
                <ol>
                    <li class="fadedown-enter-done" style="transition-delay: 0ms;"><a href="/#about">About</a></li>
                    <li class="fadedown-enter-done" style="transition-delay: 100ms;"><a href="/#jobs">Experience</a>
                    </li>
                    <li class="fadedown-enter-done" style="transition-delay: 200ms;"><a href="/#projects">Work</a></li>
                    <li class="fadedown-enter-done" style="transition-delay: 300ms;"><a href="/#contact">Contact</a>
                    </li>
                </ol>
                <div class="fadedown-enter-done" style="transition-delay: 400ms;"><a class="resume-button"
                        href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
            </div>
            <div class="menu__StyledMenu-sdn9y6-0 dAwNpJ fade-enter-done">
                <div><button aria-label="Menu" class="menu__StyledHamburgerButton-sdn9y6-1 eCxtrN">
                        <div class="ham-box">
                            <div class="ham-box-inner"></div>
                        </div>
                    </button>
                    <aside aria-hidden="true" tabindex="-1" class="menu__StyledSidebar-sdn9y6-2 dKogfI">
                        <nav>
                            <ol>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#jobs">Experience</a></li>
                                <li><a href="/#projects">Work</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ol><a href="/resume.pdf" class="resume-link">Resume</a>
                        </nav>
                    </aside>
                </div>
            </div>
        </nav> -->


    </div>
</template>
<style>
.kFCHyX {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
}
</style>
<script>
export default {
    props: ['siteName'],
}
</script>