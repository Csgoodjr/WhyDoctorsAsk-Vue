<template>
  <div class="about">
    <div class="page-header">
      <h1>About our team!</h1>
    </div>
    <CardArray :cards="cards" cardType="about"/>
  </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import { db } from "../main";
export default {
  name: "About",
  components: {
    CardArray
  },
  data: function() {
      return {
          cards: []
      }
  },
  firestore: function() {
      return {
          cards: db.collection("About")
      }
  }
}
</script>

<style scoped>
.page-header {
    display: inline-block;
    text-align: center;
    padding: 1rem;
    min-width: 50%;
    max-width: 75%;
}
</style>
