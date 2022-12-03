<template>
  <div class="mb-10 container m-auto mt-5">
    <h2 class="text-3xl text-center font-bold mb-12">Our Teams</h2>

    <div class="grid grid-cols-3 gap-6">
      <div v-for="item in 5" :key="item">
        <img
          class="rounded-lg"
          src="https://kiriminaja.com/assets/teams/budi-satria-isman.png"
          alt="budi-satria-isman"
        />
        <h2 class="mt-3 font-bold text-lg">Budi Isman</h2>
        <p>President Commisioner</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
