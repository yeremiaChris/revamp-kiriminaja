<template>
  <div>
    <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
    <ul class="font-medium grid gap-3">
      <li
        v-for="mission in missions"
        :key="mission"
        class="flex items-center gap-3 border-2 border-primary bg-primary-opacity rounded-lg py-4 pl-4 pr-10"
      >
        <MiscCheckList />
        <span>
          {{ mission }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      missions: [
        "Meningkatkan penjualan produk UMKM secara online.",
        "Memberikan inovasi-inovasi terbaru dan terbaik.",
        "Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.",
        "Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia.",
      ],
    };
  },
};
</script>
