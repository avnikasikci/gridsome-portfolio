<template>
    <Layout>
        <label>Home Page</label>
        <div id="content">
            <main class="fillHeight">
                <section id="hero" class="content-hero">
                    <div class="content-hero" style="transition-delay: 100ms;">
                        <h1>Hi, my name is </h1>
                    </div>
                    <div class="content-hero" style="transition-delay: 200ms;">
                        <h2 class="big-heading">Avni Kasikci.</h2>
                    </div>
                    <div class="content-hero" style="transition-delay: 300ms;">
                        <h3><strong><span style="color: var(--slate);">I build things for the web.</span></strong><br />
                        </h3>
                    </div>
                    <div class="content-hero" style="transition-delay: 400ms;">
                        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional
                            digital experiences. Currently, I’m focused on building accessible, human-centered products
                            at <a href="https://upstatement.com/" target="_blank" rel="noreferrer">Upstatement</a>.</p>
                    </div>
                    <div class="content-hero" style="transition-delay: 500ms;"><a class="email-link"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank"
                            rel="noreferrer">Check out my course!</a></div>
                </section>
                <section id="about" class="about-section content-about" data-sr-id="0"
                    style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;">
                    <h2 class="numbered-heading">About Me</h2>
                    <div class="inner">
                        <div class="about-style-text content-about-text">
                            <div>
                                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My
                                    interest in web development started back in 2012 when I decided to try editing
                                    custom Tumblr themes — turns out hacking together a custom reblog button taught me a
                                    lot about HTML &amp; CSS!</p>
                                <p>Fast-forward to today, and I’ve had the privilege of working at <a
                                        href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an
                                        advertising agency</a>, <a href="https://starry.com/" rel="noopener noreferrer"
                                        target="_blank">a start-up</a>, <a href="https://www.apple.com/"
                                        rel="noopener noreferrer" target="_blank">a huge corporation</a>, and <a
                                        href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer"
                                        target="_blank">a student-led design studio</a>. My main focus these days is
                                    building accessible, inclusive products and digital experiences at <a
                                        href="https://upstatement.com/" rel="noopener noreferrer"
                                        target="_blank">Upstatement</a> for a variety of clients.</p>
                                <p>I also recently <a
                                        href="https://www.newline.co/courses/build-a-spotify-connected-app"
                                        rel="noopener noreferrer" target="_blank">launched a course</a> that covers
                                    everything you need to build a web app with the Spotify API using Node &amp; React.
                                </p>
                                <p>Here are a few technologies I’ve been working with recently:</p>
                            </div>
                            <ul class="skills-list">
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Eleventy</li>
                                <li>Node.js</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                        <div class="about-style-pic content-about-pic">
                            <div class="wrapper">
                                <div data-gatsby-image-wrapper=""
                                    class="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                    <div style="max-width: 500px; display: block;"><img alt="" role="presentation"
                                            aria-hidden="true"
                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                            style="max-width: 100%; display: block; position: static;"></div>
                                    <div aria-hidden="true" data-placeholder-image=""
                                        style="opacity: 0; transition: opacity 500ms linear 0s; background-color: rgb(232, 232, 232); position: absolute; inset: 0px; object-fit: cover;">
                                    </div>
                                    <picture>
                                        <source type="image/avif" srcset="/static/30a645f7db6038f83287d0c6042d3b2b/aebc8/me.avif 125w,
/static/30a645f7db6038f83287d0c6042d3b2b/6b255/me.avif 250w,
/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif 500w" sizes="(min-width: 500px) 500px, 100vw">
                                        <source type="image/webp" srcset="/static/30a645f7db6038f83287d0c6042d3b2b/4155f/me.webp 125w,
/static/30a645f7db6038f83287d0c6042d3b2b/02deb/me.webp 250w,
/static/30a645f7db6038f83287d0c6042d3b2b/1ee78/me.webp 500w" sizes="(min-width: 500px) 500px, 100vw"><img width="500"
                                            height="500" data-main-image="" sizes="(min-width: 500px) 500px, 100vw"
                                            decoding="async" src="/static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg"
                                            srcset="/static/30a645f7db6038f83287d0c6042d3b2b/2dd75/me.jpg 125w,
/static/30a645f7db6038f83287d0c6042d3b2b/754ad/me.jpg 250w,
/static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg 500w" alt="Headshot" style="object-fit: cover; opacity: 1;">
                                    </picture><noscript></noscript>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio" class="portfolio"></section>
            </main>

        </div>
    </Layout>
</template>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
}

*,
::before,
::after {
    box-sizing: inherit;
}

:root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}

div {
    display: block;
}

body {
    margin: 0px;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate) !important;
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
}

::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
}

::-webkit-scrollbar-track {
    background: var(--navy);
}

::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
}

::-webkit-scrollbar {
    width: 12px;
}

*,
::before,
::after {
    box-sizing: inherit;
}



.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}

.content-hero h1 {
    margin: 0px 0px 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
}

.content-hero h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
}

.content-hero p {
    margin: 20px 0px 0px;
    max-width: 540px;
}

.content-hero .email-link {
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

p>a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
}

.content-about {
    max-width: 900px;
}


@media (max-width: 768px) {
  section {
    padding: 80px 0px;
  }
}
.numbered-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,var(--fz-heading));
    white-space: nowrap;
}

.content-about ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
}

.content-about-pic {
    position: relative;
    max-width: 300px;
}

.content-about-pic .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
}
.iTdkQf .wrapper .img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
}
img, svg, .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
}
.gatsby-image-wrapper-constrained {
    display: inline-block;
}

.gatsby-image-wrapper {
    position: relative;
    overflow: hidden;
}


</style>
