<template>
  <div class="home">
    <HomeCarousel/>
    <h4>You are at the last place you wanted to be: the doctor's office. You have not been feeling so great for the past few days and want to get a check-up. The front desk calls you in and the doctor asks a million questions that seem to come out of nowhere and are a little bit uncomfortable. The doctor takes out this weird device and looks into your ear, and then says you need to get blood work to check the levels of something you’ve never heard of. You walk out confused, not knowing what happened during the visit. Sound familiar?</h4>
    <h4>WhyDoctorsAsk is here to help explain why doctors ask the questions, do the exams, and order the tests that they do. We believe that the simplest way for all of us to be healthy and to receive the best healthcare is through open and honest conversations between doctors and their patients. We want to help everyone understand why doctors do the things they do by explaining the interview, the physical exam, common lab tests, common imaging tools, common vaccines, and common words used in medicine. We will also talk about questions to ask your doctor and common recommendations doctors make.</h4>
    <GoogleMap />
  </div>
</template>

<script>
import HomeCarousel from "../components/Carousel.vue";
import GoogleMap from "../components/GoogleMap.vue";
export default {
  name: "Home",
  components: {
    HomeCarousel,
    GoogleMap
  }
};
</script>

<style scoped>
h4 {
  padding: 2rem 5rem;
}
</style>