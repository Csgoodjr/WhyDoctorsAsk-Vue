<template>
    <div id="info-card">
        <b-card>
            <b-card-img :src="image" :alt="title" style="min-height:12rem;"></b-card-img>
            <b-card-title style="padding-top:1rem;">{{title}}</b-card-title>
            <b-card-text style='height: 10rem;'>
                <TextTruncate>{{description}}</TextTruncate>
            </b-card-text>
            <b-button variant="outline-primary" :to="reference" class="card-button">{{title}}</b-button>
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
        reference: {
            type: String,
            required: true,
            default: "/coming-soon"
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
 .custom-card {
    max-width: 20rem;
    min-height: 35rem;
    border: 0.5px solid darkgray;
    border-radius: 20px;
    box-shadow:2px 5px 10px darkgray;
 }
 .card-button {
     width: 17rem;
     float: bottom;
 }
 .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 }
</style>