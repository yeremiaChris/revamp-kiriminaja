<template>
  <nav
    class="sticky top-0 z-50 duration-300"
    :class="{ 'shadow-lg bg-white dark:bg-[#121212]': isScroll }"
  >
    <div class="container m-auto box-between py-5">
      <!-- logo -->
      <NuxtLink to="/">
        <img
          src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
          alt="logo"
          width="145"
        />
      </NuxtLink>

      <!-- menu -->
      <ul class="hidden lg:flex items-center gap-9 font-medium dark:text-white">
        <!-- menus -->
        <li v-for="item in menus" :key="item.title" class="hover:opacity-70">
          <NuxtLink :to="item.path">
            {{ item.title }}
          </NuxtLink>
        </li>

        <!-- line vertical -->
        <li>
          <div class="w-[2px] bg-black h-7" />
        </li>

        <li>
          <!-- toggle mode  -->
          <MiscModeButton />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,

      menus: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
      ],
    };
  },

  mounted() {
    // handle onscroll
    window.onscroll = (e) => {
      if (window.scrollY > 0) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    };
  },
};
</script>

<style scoped>
ul li .nuxt-link-active {
  /* @apply shadow-2xl shadow-primary-opacity border-b-2; */
}
</style>
