<template>
  <div class="layout">
    <header class="header">
      <Navbar :siteName="$static.metadata.siteName" />
    </header>
      <leftContent/>
      <rightContent/>
   
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/navbar'
import leftContent from '~/components/leftContent'
import rightContent from '~/components/rightContent'

import Home from '../pages/home.vue'
export default {
  components: {
    Navbar,
    Home,
    leftContent,
    rightContent
  }
}
</script>
