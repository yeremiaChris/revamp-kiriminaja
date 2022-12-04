<template>
  <section class="mt-12">
    <client-only placeholder="Setup the carousel...">
      <Carousel class="expedition" :responsive="responsive">
        <img
          class="hover-animate dark:grayscale dark:hover:grayscale-0 cursor-pointer"
          v-for="(item, index) in data.length ? data : dummyData"
          :key="item + index"
          :src="
            data.length
              ? item
              : `https://kiriminaja.com/assets/logistics/${item}.png`
          "
          :alt="item"
        />
      </Carousel>
    </client-only>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dummyData: [
        "jne",
        "gosend",
        "sentral",
        "idx",
        "grab_express",
        "sicepat",
        "jnt",
        "sap",
        "anteraja",
      ],
      responsive: {
        768: {
          dots: false,
          nav: false,
          autoplay: true,
          items: 6,
          loop: true,
        },
        0: {
          dots: false,
          nav: false,
          autoplay: true,
          items: 2,
          loop: true,
        },
      },
    };
  },

  async fetch() {
    await this.$store.dispatch("expedition/fetchExpeditionData");
  },

  computed: {
    ...mapGetters({
      data: "expedition/getExpeditionData",
    }),
  },
};
</script>
