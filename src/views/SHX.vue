<template>
    <div id="shx">
        <Breadcrumb :currentPage="pageTitle" />
        <CardArray :cards="cards" />
    </div>
</template>

<script>
import CardArray from "@/components/CardArray.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { db } from "../main";

export default {
    name: "SHX",
    components: {
        CardArray,
        Breadcrumb
    },
    data: function() {
        return {
            cards: [],
            pageTitle: "Social History"
        }
    },
    firestore: function() {
        return {
            cards: db.collection("SHX").doc(0)
        }
    }
};
</script>