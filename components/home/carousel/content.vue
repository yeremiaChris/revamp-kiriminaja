<template>
  <div
    class="mt-5 flex flex-col gap-3 md:items-start text-justify md:text-left"
  >
    <span
      class="px-3 py-2 text-secondary rounded-full bg-secondary-opacity self-start"
      >#1 Info</span
    >
    <h2 class="text-[2.55rem] font-bold">November Untung Bener</h2>
    <p class="text-xl">
      Cara cerdas KIRIM PAKET pakai KiriminAja banyak diskon dan dapatkan
      peluang bawa pulang hadiahnya. Yuk buruan daftar dan kirim paketmu
      sekarang!
    </p>
    <ul class="grid gap-4 font-medium">
      <li v-for="item in 3" :key="item" class="flex items-center gap-2">
        <MiscCheckList />
        Tanpa Biaya Pendaftaran
      </li>
    </ul>
    <button
      class="bg-primary rounded-full mt-6 md:mt-0 px-8 text-lg py-3 text-white font-medium"
    >
      Selengkapnya
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
