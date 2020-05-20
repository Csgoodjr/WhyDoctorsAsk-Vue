<template>
    <div id="pmh">
        <Breadcrumb :currentPage="pageTitle" />
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