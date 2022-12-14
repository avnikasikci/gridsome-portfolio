<template>
    <header class="nav-header">
        <nav class="nav">

            <div class="logo" tabIndex="-1">
                <a href="/" aria-label="home">
                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
                        <title>Logo</title>
                        <g transform="translate(-8.000000, -2.000000)">
                            <g transform="translate(11.000000, 5.000000)">
                                <path
                                    d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                                    fill="currentColor" />
                                <polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                                    strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23" />
                            </g>
                        </g>
                    </svg>
                </a>

            </div>
            <div class="nav-content">
                <ol>
                    <li v-for="(value, key, i) in configNav">
                        <!-- {{ value.name }} {{ value.url }}
        <a href="{{value.url}}">{{ value.name }}</a>
        <a bind-href="'/job/'r.id"> {{ r.job_title }} </a> -->
                        <a :href="value.url">{{ value.name }}</a>

                    </li>

                </ol>


                <div class="fadedown-enter-done" style="transition-delay: 400ms;"><a class="resume-button"
                        href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
            </div>
            <div class="menu"></div>



        </nav>
    </header>



</template>
<script>
import config from '../config.js'
export default {
    data: function () {
        return {
            params: [],
            configNav: [],
        }
    },
    components: {

    },
    created() {

        // props are exposed on `this`
        this.configNav = config.navLinks;
        console.log("creait", this.configNav)
    }
}
</script>


<style>
*,
::before,
::after {
    box-sizing: inherit;
}

.nav-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;

    
/* 
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(10, 25, 47, 0.85);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition); */
}

.nav-content {

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    align-items: center;

    /* @media (max-width: 768px) {
        display: none;
    } */

}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}
a:hover, a:focus {
    color: var(--green);
}

.nav-content ol li a {
    padding: 10px;
}

.nav-content ol li {
    margin: 0px 5px;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fz-xs);
}

.nav-content ol {
    /* display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fz-xs); */

    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
}

.nav .logo {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

.nav .logo a {
    color: var(--green);
    width: 42px;
    height: 42px;
}

.nav {




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
.nav-content .resume-button:hover, .buZqzj .resume-button:focus, .buZqzj .resume-button:active {
    background-color: var(--green-tint);
    outline: none;
}
.nav-content .resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-left: 15px;
    font-size: var(--fz-xs);
}


.resume-button {
    /* ${({ theme }) => theme.mixins.smallButton}; */
    margin-left: 15px;
    font-size: var(--fz-xs);
}
</style>