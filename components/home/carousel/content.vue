<template>
  <div
    class="flex flex-col gap-3 lg:items-start dark:text-white text-justify lg:text-left"
  >
    <span
      class="px-3 py-2 text-secondary rounded-full bg-secondary-opacity dark:border self-start"
      >#{{ number + 1 }} Info</span
    >
    <h2 class="text-[2.55rem] font-bold">
      {{ item.title.slice(0, 40) || "-" }}
    </h2>
    <p class="text-xl">
      {{ item.body || "-" }}
    </p>
    <ul class="grid gap-4 font-medium">
      <li v-for="item in 3" :key="item" class="flex items-center gap-2">
        <MiscCheckList />
        Tanpa Biaya Pendaftaran
      </li>
    </ul>
    <button
      class="bg-primary rounded-full mt-6 lg:mt-0 px-8 text-lg py-3 text-white font-medium"
    >
      Selengkapnya
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
