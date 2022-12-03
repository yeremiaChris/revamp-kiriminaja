<template>
  <section class="mt-5 shadow py-6 px-5 text-sm">
    <form class="flex flex-col md:flex-row md:items-center gap-2 flex-wrap">
      <div
        v-for="(field, index) in fields"
        :key="field.tilte + index"
        class="flex-1"
        :class="{ 'md:border-l md:pl-5': index > 0 }"
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
        class="bg-primary text-white flex items-center gap-2 md:ml-4 md:h-12 rounded-lg md:rounded px-4 md:px-2.5 py-2.5"
      >
        <img src="/icon/search.svg" class="w-7" alt="search" />
        <p class="md:hidden">Cek Tarif</p>
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
