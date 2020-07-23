<template>
    <div id="hpi">
        <Breadcrumb :currentPage="pageTitle"/>
        <div class="page-header">
            <h1>History of Present Illness</h1>
            <p>This is what doctors call what you are coming to see them for today.</p>
        </div>
        <CardGallery :cards="cards" cardType="regular"/>
        <CardArray :cards="cards" cardType="regular"/>
    </div>
</template>

<script>
import CardGallery from "@/components/CardGallery.vue";
import CardArray from "@/components/CardArray.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { db } from "../main";

export default {
    name: "HPI",
    components: {
        CardArray,
        Breadcrumb,
        CardGallery
    },
    data: function() {
        return {
            cards: [],
            pageTitle: "History of Present Illness"
        }
    },
    firestore: function() {
        return {
            cards: db.collection("HPI")
        }
    }
};
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