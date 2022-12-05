<template>
  <nav
    v-click-outside="close"
    class="sticky top-0 z-50 duration-300"
    :class="{ 'shadow-lg bg-white dark:bg-[#121212]': isScroll }"
  >
    <div class="container m-auto box-between py-5 relative">
      <!-- logo -->
      <NuxtLink to="/" class="z-20 inline-block">
        <img
          src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
          alt="logo"
          width="145"
        />
      </NuxtLink>

      <!-- menu -->
      <ul
        class="hidden lg:flex items-center gap-9 font-medium dark:text-white z-20"
      >
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

      <button
        v-click-outside="close"
        @click="showHumburgerMenu"
        class="lg:absolute lg:hidden z-20"
      >
        <img
          class="w-10"
          :src="`/icon/${
            mode === 'Light' ? 'humburger' : 'humburger-white'
          }.svg`"
          alt="humburger"
        />
      </button>

      <!-- navbar on mobile -->
      <ul
        class="absolute top-20 left-0 right-0 z-10 bg-gray-300 dark:bg-gray-500 md:hidden dark:text-white rounded-lg transition-all duration-300 ease-in-out"
        :class="{
          'opacity-100': isHumburgerMenu,
          'opacity-0': !isHumburgerMenu,
        }"
      >
        <li v-for="(item, index) in menus" :key="item.title + index">
          <NuxtLink
            :to="item.path"
            class="hover:bg-gray-200 px-10 py-4 border inline-block w-full hover:text-gray-800"
          >
            {{ item.title }}
          </NuxtLink>
        </li>

        <li class="px-10 py-4 border hover:bg-gray-200 hover:text-gray-800">
          <!-- toggle mode  -->
          <MiscModeButton />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

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

  computed: {
    ...mapGetters({
      mode: "getTheme",
    }),
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
    close() {
      this.isHumburgerMenu = false;
    },
  },
};
</script>
