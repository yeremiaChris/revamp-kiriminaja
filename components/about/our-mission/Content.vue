<template>
  <div class="text-lg flex flex-col gap-3">
    <p>
      <span class="text-primary">KiriminAja</span> sebuah platform yang
      memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai
      kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang
      dikembangkan oleh PT Selalu Siap Solusi.
    </p>
    <p>
      KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh
      masyarakat Indonesia yang ingin melakukan pengiriman paket.
    </p>
    <p>KiriminAja menawarkan:</p>
    <ul class="list-disc ml-10">
      <li v-for="offer in offers" :key="offer">{{ offer }}</li>
    </ul>
    <p>
      Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen
      untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan
      solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus
      berkembang.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        "Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.",
        "Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.",
        "Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.",
        "Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik. ",
      ],
    };
  },
};
</script>

<style></style>
