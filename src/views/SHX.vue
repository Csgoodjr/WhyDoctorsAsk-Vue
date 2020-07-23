<template>
    <div id="shx">
        <Breadcrumb :currentPage="pageTitle" />
        <div class="page-header">
            <h1>Social History</h1>
            <p>Now all of a sudden your doctor switches from asking about your family to asking about your daily life. You may be thinking, “how does this have anything to do with my health?” Your social health is very important in the differential diagnosis. The social history helps the physician take into account your environment and the things going on in your life into their differential diagnosis.</p>
        </div>
        <h1 style="text-align:left;margin-left:5rem;">General</h1>
        <CardArray :cards="mainCards" cardType="regular"/>
        <h1 style="text-align:left;margin-left:5rem;">Stress</h1>
        <CardArray :cards="stressCards" cardType="regular"/>
        <h1 style="text-align:left;margin-left:5rem;">Exercise</h1>
        <CardArray :cards="exerciseCards" cardType="regular"/>
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
            mainCards: [],
            stressCards: [],
            exerciseCards: [],
            headers: [],
            pageTitle: "Social History"
        }
    },
    firestore: function() {
        return {
            mainCards: db.collection("SHX").doc("main").collection("question"),
            stressCards: db.collection("SHX").doc("stress").collection("questions"),
            exerciseCards: db.collection("SHX").doc("exercise").collection("questions"),
            headers: db.collection("SHX")
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