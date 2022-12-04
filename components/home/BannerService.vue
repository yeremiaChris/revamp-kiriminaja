<template>
  <section class="mb-10 text-center dark:text-white">
    <!-- title and description -->
    <h2 class="mb-3 text-3xl font-medium">Kirim Paket Makin Singkat</h2>
    <p>Masih kurang? Yuk explore sekarang biar ngga penasaran</p>

    <!-- banner -->
    <div
      class="text-left lg:px-4 mt-14 gap-5 grid grid-cols-1 lg:grid-cols-7 items-start"
    >
      <!-- banner image -->
      <img
        class="lg:col-span-4 hover-animate"
        src="https://kiriminaja.com/assets/banner-home-2.png"
        alt="banner-home-2"
      />

      <!-- banner content -->
      <div
        class="lg:col-span-3 gap-3 flex flex-col h-full justify-between dark:text-white"
      >
        <div
          v-for="service in services"
          :key="service"
          class="border-2 rounded-lg px-4 py-3 lg:mr-10 lg:flex items-center gap-4 hover-animate"
        >
          <MiscCheckList />
          <p class="mt-3 lg:mt-0">{{ service }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        "Berbagai service expedisi sameday, kargo dan lainnya.",
        "Penjemputan paket tanpa minimal kiriman.",
        "Fitur dropoff atau cashless.",
        "Kirim paket COD dengan pencairan tercepat.",
        "Platform mudah digunakan (user friendly).",
        "Meminimalisir rasio retur.",
      ],
    };
  },
};
</script>

<style></style>
