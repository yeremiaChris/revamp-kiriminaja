<template>
  <div class="mt-16 px-20 flex gap-10 items-center">
    <!-- image -->
    <img
      src="https://kiriminaja.com/storage/Slider/November22/1669004316_1668074906_slider november (1).png"
      alt="image"
      width="437"
    />

    <!-- content -->
    <div class="flex flex-col gap-3 items-start">
      <span class="px-3 py-2 text-secondary rounded-full bg-secondary-opacity"
        >#1 Info</span
      >
      <h2 class="text-5xl font-bold">November Untung Bener</h2>
      <p class="text-xl">
        Cara cerdas KIRIM PAKET pakai KiriminAja banyak diskon dan dapatkan
        peluang bawa pulang hadiahnya. Yuk buruan daftar dan kirim paketmu
        sekarang!
      </p>
      <ul class="grid gap-4 font-medium">
        <li v-for="item in 3" :key="item" class="flex items-center gap-2">
          <div class="bg-secondary rounded-full p-[3px]">
            <img class="w-4" src="/icon/check.svg" alt="check" />
          </div>
          Tanpa Biaya Pendaftaran
        </li>
      </ul>
      <button
        class="bg-primary rounded-full px-8 text-lg py-3 text-white font-medium"
      >
        Selengkapnya
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
