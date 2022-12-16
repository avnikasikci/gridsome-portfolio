<template>
  <div id="root">
    <a class="skip-to-content" href="#content">
      Skip to Content
    </a>
    <div class="layout-content">
      <Nav />
      <Social />
      <Email />
      <div id="content">
        <slot />
        <Footer />
      </div>

    </div>
  </div>
</template>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
<script>
import Nav from '~/components/nav'
import Social from '~/components/social'
import Email from '~/components/mail'
import Footer from '~/components/footer'

export default {
  components: {
    Nav,
    Social,
    Email,
    Footer    
  }
}
</script>
