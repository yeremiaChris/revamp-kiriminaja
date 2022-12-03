<template>
  <header>
    <client-only placeholder="Setup the carousel...">
      <Carousel :items="1" :nav="false" :autoplay="true">
        <div
          class="mt-10 lg:mt-16 lg:px-14 gap-10 grid lg:grid-cols-2 items-center"
          v-for="(item, index) in data"
          :key="item.title + index"
        >
          <!-- image -->
          <img
            class="rounded-lg w-[400px] shadow-lg"
            :src="`https://picsum.photos/id/${index + 10}/600/600`"
            alt="image"
          />
          <!-- <img
            class="rounded-lg w-[400px]"
            src="https://kiriminaja.com/storage/Slider/November22/1669004316_1668074906_slider november (1).png"
            alt="image"
          /> -->

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
