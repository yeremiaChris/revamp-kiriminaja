<template>
  <footer class="container m-auto mb-20 dark:text-white">
    <!-- top -->
    <div class="grid lg:grid-cols-2">
      <!-- right -->
      <div>
        <!-- logo start -->
        <img
          src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
          alt="logo"
          width="145px"
        />
        <h2
          class="font-bold text-sm mt-3 dark:text-primary opacity-50 dark:opacity-100"
        >
          PT. Selalu Siap Solusi
        </h2>
        <!-- logo end -->

        <!-- company profile -->
        <div class="mt-5 grid gap-3 opacity-50">
          <div v-for="item in profiles" :key="item.name">
            <div class="flex items-start gap-3">
              <img
                class="dark:grayscale"
                :src="`/icon/${item.name}.svg`"
                :alt="item.name"
              />
              <p v-if="item.name === 'address'" v-html="item.value" />
              <a v-else :href="item.link">
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>

        <p class="mt-5 mb-2 opacity-50 font-medium">Terdaftar di</p>
        <img
          class="h-[30px] dark:grayscale"
          src="https://kiriminaja.com/assets/home-2/logo-kominfo.svg"
          alt="kominfo"
        />
      </div>

      <!-- left -->
      <div class="mt-3 lg:mt-12">
        <div
          class="grid grid-cols-2 mb-6 font-medium opacity-70 dark:opacity-100 dark:text-primary"
        >
          <span>Tautan Cepat</span>
          <span>KiriminAja</span>
        </div>
        <ul class="grid grid-cols-2">
          <li v-for="item in links" :key="item.title" class="mb-4">
            <a :href="`https://kiriminaja.com` + item.link">
              {{ item.title }}
            </a>
            <span
              v-if="item.title === 'Karir'"
              class="rounded-full px-3 py-1 text-xs bg-primary-opacity text-primary dark:border"
              >We're Hiring</span
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- copy right and social media -->
    <div class="mt-14 grid gap-3 lg:flex justify-between dark:text-white">
      <p class="text-gray-500 hidden lg:block">
        Copyright ?? 2022
        <span class="font-medium text-gray-700">KiriminAja.com</span> . All
        rights reserved.
      </p>

      <!-- social media icon  -->
      <div class="flex flex-wrap gap-4">
        <img
          class="opacity-50 dark:grayscale"
          v-for="item in socialMedia"
          :key="item"
          :src="`/icon/social/${item}.svg`"
          :alt="item"
        />
        <MiscModeButton />
      </div>

      <!-- copy right text on mobile -->
      <p class="text-gray-500 lg:hidden">
        Copyright ?? 2022
        <span class="font-medium text-gray-700">KiriminAja.com</span> . All
        rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: ["tiktok", "facebook", "instagram", "linkedin", "youtube"],
      profiles: [
        {
          name: "address",
          value:
            "Jl. Palagan Tentara Pelajar No. 30 KM 08, <br/> Mudal, Kelurahan Sariharjo, Kecamatan <br/> Ngaglik, Kabupaten Sleman, Provinsi Daerah <br/> Istimewa Yogyakarta",
        },
        {
          name: "email",
          value: "support@kiriminaja.com",
          link: "mailto:support@kiriminaja.com",
        },
        {
          name: "phone",
          value: "0274 8000 123",
          link: "tel:02748000123",
        },
      ],

      links: [
        {
          title: "Cek Tarif Aja",
          link: "/cekaja",
        },
        {
          title: "Tentang Kami",
          link: "/about",
        },
        {
          title: "Kabar Buatmu",
          link: "/about",
        },
        {
          title: "Syarat Ketentuan",
          link: "/syarat-ketentuan",
        },
        {
          title: "Manajemen Order",
          link: "/praktisin",
        },
        {
          title: "Kebijakan Privasi",
          link: "/privacy-policy",
        },
        {
          title: "Integrasi API",
          link: "/api-integration",
        },
        {
          title: "Fakta & Pertanyaan",
          link: "/faq",
        },
        {
          title: "Karir",
          link: "/careers",
        },
      ],
    };
  },
};
</script>

<style></style>
