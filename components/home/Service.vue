<template>
  <section class="my-20 dark:text-white">
    <!-- title -->
    <h2 class="text-center mb-14 text-3xl font-medium">
      Untuk Semua Kebutuhan Pengiriman Paketmu
    </h2>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- card -->
      <HomeServiceCard v-for="item in 3" :key="item" />
    </div>
  </section>
</template>
