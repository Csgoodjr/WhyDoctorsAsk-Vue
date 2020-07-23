<template>
    <div id="pmh">
        <Breadcrumb :currentPage="pageTitle" />
        <div class="page-header">
            <h1>Past Medical History</h1>
            <p>This is when your doctor asks about your past health history, which includes things like surgery history and any allergies you have.</p>
        </div>
        <CardArray :cards="cards" cardType="regular"/>
    </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { db } from "../main";

export default {
    name: "PMH",
    components: {
        CardArray,
        Breadcrumb
    },
    data: function() {
        return {
            cards: [],
            pageTitle: "Past Medical History"
        }
    },
    firestore: function() {
        return {
            cards: db.collection("PMH")
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