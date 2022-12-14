<template>

  <!-- <div class="layout">
    <header class="header">
      <Navbar :siteName="$static.metadata.siteName" />
    </header>
      <leftContent/>
      <rightContent/>
   
    <slot/>
  </div> -->

  <div id="root">
    <a class="skip-to-content" href="#content">
      Skip to Content
    </a>
    <div class="layout-content">
      <Nav />
      <Social />
      <Email />
      <div id="content">
        <!-- {children} -->
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
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/components/footer'
import Navbar from '~/components/navbar'
import Social from '~/components/social'
import Email from '~/components/mail'

import Nav from '~/components/nav'
import Head from '~/components/head'
import leftContent from '~/components/leftContent'
import rightContent from '~/components/rightContent'

import Home from '../pages/home.vue'
export default {
  components: {
    Navbar,
    Social,
    Email,
    Footer,
    Head,
    Home,
    Nav,
    leftContent,
    rightContent
  }
}
</script>
