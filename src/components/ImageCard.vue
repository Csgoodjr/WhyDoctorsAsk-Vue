<template>
    <div id="info-card">
        <b-card class="custom-card">
            <b-card-img :src="image" :alt="title"></b-card-img>
            <b-card-title>{{title}}</b-card-title>
            <b-card-text>{{description}}</b-card-text>
            <b-button variant="outline-primary" :to="ref" class="card-button">{{title}}</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "InfoCard",
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        ref: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
 .custom-card {
    max-width: 20rem;
    min-height:25rem;
    border: 0.5px solid darkgray;
    border-radius: 20px;
    box-shadow:2px 5px 10px darkgray;
 }
 .card-button {
     width: 17rem;
 }
</style>