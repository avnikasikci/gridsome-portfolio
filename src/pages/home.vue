<template>
  <Layout>
    <label>Home Page</label>
    <main>
      <Hero />
      <About />
      <Jobs />
    </main>
  </Layout>
</template>
  

<script>
import Hero from '~/components/section/hero.vue'
import About from '~/components/section/about.vue'
import Jobs from '~/components/section/jobs.vue'
export default {
  components: {
    Hero,
    About,
    Jobs
  }
}
</script>



  