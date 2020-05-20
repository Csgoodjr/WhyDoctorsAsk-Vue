<template>
    <div id="breadcrumb">
        <b-breadcrumb>
            <b-breadcrumb-item to="/questions-doctors-ask">Questions Doctors Ask</b-breadcrumb-item>
            <b-breadcrumb-item active>{{currentPage}}</b-breadcrumb-item>
        </b-breadcrumb>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    #breadcrumb {
        padding: 1rem 2rem;
    }
</style>