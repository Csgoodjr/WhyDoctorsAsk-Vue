<template>
    <b-card img-src="" img-alt="image" class="custom-card">
        <b-card-title>{{question}}</b-card-title>
        <b-card-text>{{answer}}</b-card-text>
    </b-card>
</template>

<script>
export default {
    name: "InfoCard",
    props: {
        answer: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
 .custom-card {
    border: 0.5px solid darkgray;
    border-radius: 20px;
    box-shadow:2px 5px 10px darkgray;
 }
</style>