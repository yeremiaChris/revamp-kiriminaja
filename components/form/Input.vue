<template>
  <div>
    <label :for="id">
      {{ label }}
      <span v-if="isRequired" class="text-red-500">*</span>
    </label>
    <input
      :type="type"
      :name="id"
      :id="id"
      class="block focus:mt-2 w-full duration-300 focus:border outline-none focus:outline-none rounded-md border-gray-300 focus:px-3 py-2 focus:ring-0 sm:text-sm"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: () => "input-1",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "text",
    },
    label: {
      type: String,
      default: () => "label",
    },
    isRequired: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style></style>
