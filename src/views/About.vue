<template>
  <div class="about">
    <h1>This is an about page</h1>
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
