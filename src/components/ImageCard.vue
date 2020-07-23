<template>
    <div id="info-card">
        <b-card>
            <b-card-img :src="image" :alt="title" style="height:30%;width:90%;"></b-card-img>
            <b-card-title style="padding-top:1rem;">{{title}}</b-card-title>
            <b-card-text style='width:90%;'>
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
 .card-button {
     float: bottom;
 }
 .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 }
</style>