<template>
    <div id="hpi">
        <Breadcrumb :currentPage="pageTitle"/>
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