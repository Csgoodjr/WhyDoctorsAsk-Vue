<template>
    <div id="hpi">
        <Breadcrumb :currentPage="pageTitle"/>
        <CardArray :cards="cards" cardType="regular"/>
    </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { db } from "../main";

export default {
    name: "HPI",
    components: {
        CardArray,
        Breadcrumb
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