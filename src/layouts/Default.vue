<template>
  <div class="layout">
    <header class="header">
      <Navbar :siteName="$static.metadata.siteName"/>
    </header>
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
export default {
  components:{
    Navbar
  }
}
</script>
