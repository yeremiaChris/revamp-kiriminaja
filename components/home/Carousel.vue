<template>
  <div>
    <client-only placeholder="Setup the carousel...">
      <Carousel :items="1" :nav="false" :autoplay="true">
        <header
          class="mt-10 md:mt-16 md:px-20 md:flex gap-10 items-center"
          v-for="item in 3"
          :key="item"
        >
          <!-- image -->
          <img
            src="https://kiriminaja.com/storage/Slider/November22/1669004316_1668074906_slider november (1).png"
            alt="image"
            width="437"
            class="rounded-lg self-stretch"
          />

          <!-- content -->
          <HomeCarouselContent />
        </header>
      </Carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        items: 1,
      },
    };
  },
};
</script>
