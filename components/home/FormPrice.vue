<template>
  <section
    class="mt-5 shadow border dark:border-0 dark:bg-gray-800 rounded-lg dark:text-white py-6 px-5 text-sm"
  >
    <form class="flex flex-col lg:flex-row lg:items-center gap-2 flex-wrap">
      <div
        v-for="(field, index) in fields"
        :key="field.title + index"
        class="flex-1"
        :class="{ 'lg:border-l lg:pl-5': index > 0 }"
      >
        <FormInput
          :label="field.title"
          :id="field.title + '-' + index"
          :placeholder="field.placeholder"
          :type="field.type"
        />
      </div>
      <button
        type="submit"
        class="bg-primary text-white flex items-center gap-2 lg:ml-4 lg:h-12 rounded-lg lg:rounded px-4 lg:px-2.5 py-2.5"
      >
        <img src="/icon/search.svg" class="w-7" alt="search" />
        <p class="lg:hidden">Cek Tarif</p>
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          title: "From",
          placeholder: "Kelurahan Asal",
          type: "text",
        },
        {
          title: "Destination",
          placeholder: "Kelurahan Tujuan",
          type: "text",
        },
        {
          title: "Weight (Gram)",
          placeholder: "1000",
          type: "number",
        },
      ],
    };
  },
};
</script>
