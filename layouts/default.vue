<template>
  <div>
    <Navbar />
    <Nuxt class="container m-auto" />
    <Footer />

    <!-- back ground gradient purple just for index page -->
    <div v-if="$route.path === '/'" class="background-gradient" />
  </div>
</template>
