<template>
  <nav>
    <div class="container m-auto box-between py-5">
      <!-- logo -->
      <img
        src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
        alt="logo"
        width="145"
      />

      <!-- menu -->
      <ul class="hidden md:flex items-center gap-9 font-medium">
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

        <!-- action -->
        <li>
          <NuxtLink to="#">Daftar</NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#"
            class="py-3 px-5 bg-primary rounded-full hover:bg-[#5E2891] text-white"
            >Masuk</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Beranda",
          path: "#",
        },
        {
          title: "Blog",
          path: "#",
        },
        {
          title: "Kabar",
          path: "#",
        },
        {
          title: "Layanan",
          path: "#",
        },
        {
          title: "Cek Ongkir",
          path: "#",
        },
        {
          title: "Lacak",
          path: "#",
        },
      ],
    };
  },
};
</script>
