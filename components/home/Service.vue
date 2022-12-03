<template>
  <div class="my-20">
    <h2 class="text-center mb-14 text-3xl font-medium">
      Untuk Semua Kebutuhan Pengiriman Paketmu
    </h2>
    <div class="grid md:grid-cols-3 gap-6">
      <HomeServiceCard v-for="item in 3" :key="item" />
    </div>
  </div>
</template>
