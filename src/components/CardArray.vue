<template>
    <div id="card-container">
        <b-card-group columns v-if="cardType=='regular'">
            <InfoCard 
            v-for="card in cards" 
            v-bind:key="card.id"
            :answer="card.answer"
            :question="card.question"/>
        </b-card-group>
        <b-card-group columns v-if="cardType=='image'">
            <ImageCard
            v-for="card in cards" 
            v-bind:key="card.id"
            :title="card.title" 
            :reference="card.ref" 
            :image="card.image" 
            :description="card.description"/>
        </b-card-group>
        <b-card-group columns v-if="cardType=='about'">
            <AboutCard 
            v-for="card in cards" 
            v-bind:key="card.id"
            :name="card.name" 
            :info="card.info" 
            :quote="card.quote" 
            :image="card.image"/>
        </b-card-group>
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
</style>