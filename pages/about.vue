<template>
  <div class="dark:text-white">
    <!-- banner that contain title, desc and our teams image -->
    <AboutBanner />

    <!-- our mission -->
    <AboutOurMission />

    <!-- our teams -->
    <AboutOurTeams />

    <!-- link to career -->
    <AboutCareer />

    <!-- download section-->
    <div class="container m-auto">
      <MiscDownload />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
