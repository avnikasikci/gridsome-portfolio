<template>
    <section id="section-about" class="section-about">
        <h2 class="numbered-heading">About Me</h2>
        <div class="inner">
            <div class="inner-section-about-text">
                <div>
                    <p>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My
                        interest in web development started back in 2012 when I decided to try editing custom
                        Tumblr themes — turns out hacking together a custom reblog button taught me a lot
                        about HTML &amp; CSS!
                    </p>

                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at
                        <a href="https://us.mullenlowe.com/">an advertising agency</a>,
                        <a href="https://starry.com/">a start-up</a>,
                        <a href="https://www.apple.com/">a huge corporation</a>, and
                        <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
                        main focus these days is building accessible, inclusive products and digital
                        experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
                        clients.
                    </p>

                    <p>
                        I also recently
                        <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                            launched a course
                        </a>
                        that covers everything you need to build a web app with the Spotify API using Node
                        &amp; React.
                    </p>

                    <p>Here are a few technologies I’ve been working with recently:</p>
                </div>
                <ul class="skills-list">
                    <li v-for="(value, key, i) in personSkills">
                        {{ value }}
                    </li>

                </ul>

            </div>
            <div class="inner-section-about-picture">

                <div class="wrapper">
                    <g-image class="img" src="~/assets/images/me.jpg" width="500" alt="Headshot" quality="95" />
                </div>


            </div>



        </div>


    </section>
</template>
<script>
export default {
    data: function () {
        return {

            personSkills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress']
        }
    },
    components: {

    },
    created() {

    }
}
</script>

<style>
.inner-section-about-picture {   
    position: relative;
    max-width: 300px;
}
.inner-section-about-picture .wrapper {
    /* ${({ theme }) => theme.mixins.boxShadow}; */
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

}

.inner-section-about-picture .wrapper::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
}

.inner-section-about-picture .wrapper::before, .inner-section-about-picture .wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
}
.inner-section-about-picture .wrapper::after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
}
.inner-section-about-picture .wrapper::before, .inner-section-about-picture .wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.inner-section-about-picture .wrapper .img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
}

.inner-section-about-picture {
    position: relative;
    max-width: 300px;
    /* @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  } */
}

.inner-section-about-text ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
}

.inner-section-about-text ul.skills-list li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
}

.inner-section-about-text ul.skills-list li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
}

.numbered-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
}

/* //.bNXWUU */
.section-about {
    max-width: 900px;
}

.section-about .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    /* @media (max-width: 768px) {
        display: block;
    } */
}
</style>