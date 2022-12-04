<template>
  <header>
    <client-only placeholder="Setup the carousel...">
      <p v-if="!data.length">Data is empty</p>
      <Carousel :items="1" :nav="false" :autoplay="true">
        <div
          class="mt-10 lg:mt-16 lg:px-14 gap-10 grid lg:grid-cols-2 items-center"
          :class="{ 'animate-pulse': isLoading }"
          v-for="(item, index) in data"
          :key="item.title + index"
        >
          <!-- image -->
          <img
            class="rounded-lg w-[400px] transition-all duration-300 ease-in transform hover:-translate-y-8"
            :class="{
              'bg-slate-200 self-stretch block': isLoading,
              'shadow-lg': !isLoading,
            }"
            :src="
              !isLoading ? `https://picsum.photos/id/${index + 10}/600/600` : ''
            "
            :alt="!isLoading ? 'image' : 'loading...'"
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
    };
  },

  computed: {
    ...mapGetters({
      data: "home/getCarouselData",
      isLoading: "home/getIsLoading",
    }),
  },

  async fetch() {
    await this.$store.dispatch("home/fetchCarouselData");
  },
};
</script>
