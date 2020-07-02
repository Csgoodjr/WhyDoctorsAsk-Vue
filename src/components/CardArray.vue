<template>
    <div id="card-container">
        <div class="card-array" v-if="cardType=='regular'">
            <div v-for="card in cards" v-bind:key="card.id">
                <InfoCard :answer="card.answer" :image="card.image" :question="card.question"/>
            </div>
        </div>
        <div class="card-array" v-if="cardType=='image'">
            <div v-for="card in cards" v-bind:key="card.id">
                <ImageCard :title="card.title" :reference="card.ref" :image="card.image" :description="card.description"/>
            </div>
        </div>
        <div class="card-array" v-if="cardType=='about'">
            <div v-for="card in cards" v-bind:key="card.id">
                <AboutCard :name="card.name" :info="card.info" :quote="card.quote" :image="card.image" />
            </div>
        </div>
    </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import ImageCard from "@/components/ImageCard.vue";
import AboutCard from "@/components/AboutCard.vue";
export default {
    name: "CardArray",
    props: {
        cards: {
            type: Array,
            required: true
        },
        cardType: {
            type: String,
            required: true
        }
    },
    components: {
        InfoCard,
        ImageCard,
        AboutCard
    }
};
</script>

<style scoped>
    #card-container {
        padding: 0rem 2rem;
    }
    .card-array {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));
        grid-auto-rows: auto;
        grid-gap: 1rem;
        padding: 10px 10px 50px 10px;
    }
</style>