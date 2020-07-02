<template>
    <div>
        <b-carousel
            v-if="cardType=='regular'"
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators 
            background="#000000"
            img-width="1024"
            img-height="288"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <div v-for="card in cards" v-bind:key="card.id">
                <InfoCard :answer="card.answer" :image="card.image" :question="card.question"/>
            </div>
        </b-carousel>
    </div>
</template>

<script>
//import InfoCard from "@/components/InfoCard.vue";
//import ImageCard from "@/components/ImageCard.vue";
//import AboutCard from "@/components/AboutCard.vue";
export default {
    name: "CardGallery",
    props: {
        cards: {
            type: Array,
            required: true
        },
        cardType: {
            type: String,
            required: true
        }
    }
}
</script>