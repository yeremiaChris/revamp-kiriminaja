<template>
  <section class="relative my-20">
    <!-- bg blur -->
    <div class="image-section z-10 hidden md:block" />

    <!-- content -->
    <div
      class="text-white bg-primary rounded-lg md:grid grid-cols-2 items-center md:px-16"
    >
      <!-- image -->
      <img
        class="z-40 md:h-[470px]"
        src="https://kiriminaja.com/assets/home-2/call-to-action.png"
        alt="call-to-action"
      />

      <!-- content -->
      <div class="p-8 md:p-10 z-40 grid gap-4">
        <h2 class="text-4xl font-bold">Gratis daftar dalam hitungan detik</h2>
        <p class="text-gray-300">
          Semua bisa mulai kirim paket tanpa ribet. Jadikan pengalaman
          pengiriman paket lebih mudah dengan KiriminAja.
        </p>
        <div class="flex gap-2">
          <a
            v-for="(item, index) in links"
            :key="item.icon + index"
            :href="item.link"
            target="_blank"
          >
            <img
              class="h-[40px]"
              :src="`https://kiriminaja.com/assets/service/v2/${item.icon}.png`"
              :alt="item.icon"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: "appstore-compressed",
          link: "https://apps.apple.com/us/app/kiriminaja/id1544207424",
        },
        {
          icon: "googleplay-compressed",
          link: "https://play.google.com/store/apps/details?id=id.tries.kiriminaja&hl=in",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-section {
  filter: blur(3px);
  background-image: url("https://kiriminaja.com/assets/home-2/banner-without-text.png");
  background-size: auto 100%;
  background-position-x: -5rem;
  background-repeat: no-repeat;
  @apply opacity-50 absolute left-0 top-0 w-full h-full;
}
</style>
