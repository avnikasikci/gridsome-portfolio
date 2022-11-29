<template>
    <!-- <div id="right">
        <ul>
            <li>tets1</li>
        </ul>
    </div> -->

    <div  id="right" orientation="right" class="side__StyledSideElement-sc-1duznzb-0 jSIwrL">
        <div class="email__StyledLinkWrapper-sc-2epoq-0 jJFfEJ fade-enter-done"><a
                href="mailto:brittany.chiang@gmail.com">brittany.chiang@gmail.com</a></div>
    </div>
</template>
<style>
.jJFfEJ{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.jSIwrL {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: -7px;
    z-index: 10;
    color: var(--light-slate);
}
.jJFfEJ a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
}
</style>
<script>
export default {
    props: ['siteName'],
}
</script>