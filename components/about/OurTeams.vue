<template>
  <div class="mb-10 container m-auto mt-5">
    <h2 class="text-3xl text-center font-bold mb-12">Our Teams</h2>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in teamsData.length ? teamsData : 5"
        :key="index + 'teams-data'"
      >
        <img
          class="rounded-lg"
          :src="
            teamsData.length
              ? item.url
              : 'https://kiriminaja.com/assets/teams/budi-satria-isman.png'
          "
          :alt="teamsData.length ? item.title : index"
        />
        <h2 class="mt-3 font-bold text-lg">
          {{ item.title || "Budi Satria Isman" }}
        </h2>
        <p>President Commisioner</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    await this.$store.dispatch("about/fetchTeamsData");
  },

  computed: {
    ...mapGetters({
      teamsData: "about/getTeamsData",
    }),
  },
};
</script>

<style></style>
