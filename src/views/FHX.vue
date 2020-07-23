<template>
    <div>
        <Breadcrumb :currentPage="pageTitle" />
        <div class="page-header">
            <h1>Family History</h1>
            <p>Doesn’t it seem weird for your doctor to ask about your family when you are the one in the office? There is a really important reason why doctors ask about your family: if someone in your immediate family [parent or sibling] has diseases such as diabetes, coronary heart disease, and cancer, it can increase your risk of having these diseases. It means that you are genetically more likely to also get certain diseases as well. This can raise a doctor’s suspicion to order certain tests to determine what is causing your symptoms.</p>
        </div>
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

<style scoped>
.page-header {
    display: inline-block;
    text-align: center;
    padding: 1rem;
    min-width: 50%;
    max-width: 75%;
}
</style>