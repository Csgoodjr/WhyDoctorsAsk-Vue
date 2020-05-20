<template>
    <div id="fhx">
        <Breadcrumb :currentPage="pageTitle" />
        <CardArray :cards="cards" />
    </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { db } from "../main";

export default {
    name: "FHX",
    components: {
        CardArray,
        Breadcrumb
    },
    data: function() {
        return {
            cards: [],
            pageTitle: "Family Medical History"
        }
    },
    firestore: function() {
        return {
            cards: db.collection("FHX")
        }
    }
};
</script>