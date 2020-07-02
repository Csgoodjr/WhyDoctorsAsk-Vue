<template>
    <div>
        <h1 class="main-header">Questions Doctors Ask</h1>
        <CardArray :cards="cards" cardType="image"/>
    </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import { db } from "../main";
export default {
    name: "QuestionsDoctorsAsk",
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
            cards: db.collection("QuestionDoctorsAsk")
        }
    }
}
</script>

<style scoped>
    .main-header {
        padding: 20px;
    }
</style>