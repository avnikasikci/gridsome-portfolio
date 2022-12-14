<template>
    <div class="side-content-left">
        <ul class="social-list fade-enter-done">
            <li v-for="(value, key, i) in configSocial">

                <a :href="value.url" :aria-label="value.name" target="_blank" rel="noreferrer">
                    <!-- {{ value.name }} -->
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-github">
                        <title>GitHub</title>
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                </a>

            </li>
        </ul>
    </div>
</template>
<script>
import config from '../config.js'
import Side from './side.vue'
export default {
    data: function () {
        return {
            params: [],
            configNav: [],
            configSocial: []
        }
    },
    components: {
        Side
    },
    created() {

        // props are exposed on `this`
        this.configNav = config.navLinks;
        this.configSocial = config.socialMedia;
    }
}
</script>
<style>
/* *,
::before,
::after {
    box-sizing: inherit;
} */

/* a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
} */
svg.feather {
    fill: none;
}

.social-list li a svg {
    width: 20px;
    height: 20px;
}

.social-list li:last-of-type {
    margin-bottom: 20px;
}

/*.social-list ::after {*/
.social-list li:last-of-type {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
}

/* li {
    display: list-item;
    text-align: -webkit-match-parent;
}
ul {
    list-style-type: disc;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
} */

.social-list li a {
    padding: 10px;
}

.social-list {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
}

.side-content-left {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
}
</style>