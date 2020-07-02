<template>
  <div class="home">
    <HomeCarousel/>
    <h1>Home</h1>
  </div>
</template>

<script>
import HomeCarousel from "../components/Carousel.vue";
export default {
  name: "Home",
  components: {
    HomeCarousel
  }
};
</script>
