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

      <button @click="showHumburgerMenu">
        <img class="lg:hidden w-10" src="/icon/humburger.svg" alt="humburger" />
      </button>
    </div>

    <!-- navbar on mobile -->
    <ul
      class="absolute bg-gray-100 left-8 right-8 rounded-lg transition-all duration-300 ease-in-out"
      :class="{ 'opacity-100': isHumburgerMenu, 'opacity-0': !isHumburgerMenu }"
    >
      <li v-for="(item, index) in menus" :key="item.title">
        <NuxtLink
          :to="item.path"
          class="hover:bg-gray-200 px-5 py-3 border inline-block w-full"
          :class="{
            'rounded-t': index === 0,
          }"
        >
          {{ item.title }}
        </NuxtLink>
      </li>

      <li class="px-5 py-3 border rounded-b hover:bg-gray-200">
        <!-- toggle mode  -->
        <MiscModeButton />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHumburgerMenu: false,
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

  methods: {
    showHumburgerMenu() {
      this.isHumburgerMenu = !this.isHumburgerMenu;
    },
  },
};
</script>

<style scoped>
ul li .nuxt-link-active {
  /* @apply shadow-2xl shadow-primary-opacity border-b-2; */
}
</style>
