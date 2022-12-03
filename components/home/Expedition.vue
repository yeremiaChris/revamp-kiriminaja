<template>
  <div class="mt-12">
    <client-only placeholder="Setup the carousel...">
      <Carousel class="expedition" :responsive="responsive">
        <img
          v-for="item in list"
          :key="item"
          :src="`https://kiriminaja.com/assets/logistics/${item}.png`"
          :alt="item"
        />
      </Carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
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
};
</script>

<style></style>
