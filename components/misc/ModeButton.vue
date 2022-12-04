<template>
  <div class="flex">
    <span
      v-for="(item, index) in theme"
      :key="item"
      class="px-8 py-px rounded-full inline-block cursor-pointer"
      :class="{
        '-ml-4': index > 0,
        'bg-primary  relative text-white': item === mode,
        'text-black bg-gray-200': item !== mode,
      }"
      @click="toggleTheme(item)"
      >{{ item }}</span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      theme: ["Light", "Dark"],
    };
  },

  computed: {
    ...mapGetters({
      mode: "getTheme",
    }),
  },

  methods: {
    toggleTheme(mode) {
      const html = document.documentElement;
      localStorage.theme = mode;
      if (mode === "Dark") {
        html.classList.add(mode.toLowerCase());
      } else {
        html.classList.remove("dark");
      }
      this.$store.dispatch("setTheme", mode);
    },
  },
};
</script>
