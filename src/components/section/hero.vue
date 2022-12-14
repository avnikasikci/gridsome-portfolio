<template>
    <div>
        <section id="section-hero" class="section-hero">

            <h1>Hi, my name is</h1>
            <h2 class="big-heading">Brittany Chiang.</h2>
            <h3 class="big-heading">I build things for the web.</h3>
            <p>
                I’m a software engineer specializing in building (and occasionally designing) exceptional
                digital experiences. Currently, I’m focused on building accessible, human-centered products
                at
                <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
                    Upstatement
                </a>
                .
            </p>
            <a class="email-link" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank"
                rel="noreferrer">
                Check out my course!
            </a>

        </section>

    </div>
</template>
<script>
</script>
<style>
.section-hero {
    /* ${({ theme }) => theme.mixins.flexCenter}; */
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }
}

h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
        margin: 0 0 20px 2px;
    }
}

h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
}

p {
    margin: 20px 0 0;
    max-width: 540px;
}

.email-link {
    /* ${({ theme }) => theme.mixins.bigButton}; */
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
}
</style>