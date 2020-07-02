<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="280"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                caption="Welcome to WhyDoctorsAsk!"
                img-src="https://firebasestorage.googleapis.com/v0/b/whydoctorsask-f0681.appspot.com/o/hospital-room.png?alt=media&token=f2b83535-79e0-4382-a9be-197180e03f8e"
            ></b-carousel-slide>

            <b-carousel-slide 
                caption="Check out our newly designed Questions Doctors Ask Page!"
                img-src="https://firebasestorage.googleapis.com/v0/b/whydoctorsask-f0681.appspot.com/o/hospital-illness.png?alt=media&token=925ada44-5688-413b-98c3-674cf9c56d80"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        windowSize: {
            type: String,
            required: false
        }
    }
}
</script>