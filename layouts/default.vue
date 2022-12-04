<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />

    <!-- back ground gradient purple just for index page -->
    <div v-if="$route.path === '/'" class="background-gradient dark:hidden" />
  </div>
</template>

<script>
export default {
  mounted() {
    const html = document.documentElement;
    const theme = localStorage.theme;
    this.$store.dispatch("setTheme", theme || "Light");
    if (theme === "Dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  },
};
</script>
