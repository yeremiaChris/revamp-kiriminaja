<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />

    <!-- back ground gradient purple just for index page -->
    <div v-if="$route.path === '/'" class="background-gradient" />
  </div>
</template>
