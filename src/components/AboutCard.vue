<template>
    <div>
        <b-card>
            <b-card-img :src="image" :alt="name" style="min-height:12rem;"></b-card-img>
            <b-card-title style="padding-top:1rem;">{{name}}</b-card-title>
            <b-card-text>{{info}}</b-card-text>
            <b-card-text>{{quote}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "AboutCard",
    props: {
        name: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        quote: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>