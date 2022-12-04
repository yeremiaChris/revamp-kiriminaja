<template>
  <header>
    <client-only placeholder="Setup the carousel...">
      <Carousel :items="1" :nav="false" :autoplay="true">
        <div
          class="mt-10 lg:mt-16 lg:px-14 gap-10 grid lg:grid-cols-2 items-center"
          v-for="(item, index) in data || dummData"
          :key="item.title + index"
        >
          <!-- image -->
          <img
            class="rounded-lg w-[400px] shadow-lg transition-all duration-300 ease-in transform hover:-translate-y-8"
            :src="`https://picsum.photos/id/${index + 10}/600/600`"
            :alt="item.title"
          />

          <!-- content -->
          <HomeCarouselContent :number="index" :item="item" />
        </div>
      </Carousel>
    </client-only>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      options: {
        items: 1,
      },
      dummData: [
        {
          title: "November Rain? November Yang Asli Untung Bener!",
          body: "Cuman kirim paket bisa dapetin Sepeda atau SmartTV, affah iyah? Iyah, SahabatKA! Mau kan? Nah, makanya yuk tingkatkan pengirimanmu di November ini!",
        },
        {
          title: "Ninja Xpress telah hadir di aplikasi KiriminAja.",
          body: "SahabatKA, ada yang baru nih di KiriminAja! Mulai hari ini layanan pengiriman paket Ninja Xpress hadir di aplikasi KiriminAja.",
        },
        {
          title: "Gebyar Pesta Pora KiriminAja, Kirim Dapet Cuan",
          body: "Cara cerdas KIRIM PAKET pakai KiriminAja banyak diskon dan dapatkan peluang bawa pulang hadiahnya. Yuk buruan daftar dan kirim paketmu sekarang!",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      data: "home/getCarouselData",
    }),
  },

  async fetch() {
    await this.$store.dispatch("home/fetchCarouselData");
  },
};
</script>
