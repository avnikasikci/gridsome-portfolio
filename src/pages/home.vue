<template>
  <Layout>
    <label>Home Page</label>
    <main>
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />

    </main>



  </Layout>
</template>

  

<script>
import Hero from '~/components/section/hero.vue'
import About from '~/components/section/about.vue'
import Jobs from '~/components/section/jobs.vue'
import Featured from '~/components/section/featured.vue'
import Projects from '~/components/section/projects.vue'
export default {
  components: {
    Hero,
    About,
    Jobs,
    Featured,
    Projects
  }
}
</script>


  