<template>
    <div class="side-content-right">
        <div class="email fade-enter-done">
            <a href="mailto:brittany.chiang@gmail.com">brittany.chiang@gmail.com</a>
        </div>
  
    </div>
</template>
<script>
import config from '../config.js'
import Side from './side.vue'
export default {
    data: function () {
        return {
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
.email {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.email::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
}

.email a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
}

.side-content-right {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
    z-index: 10;
    color: var(--light-slate);
}

</style>