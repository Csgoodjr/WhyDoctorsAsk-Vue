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
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;height: 14rem;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
            style="height:14rem;"
            img-width="1024"
            img-height="480"
            caption="Welcome to WhyDoctorsAsk!"
            img-src="https://firebasestorage.googleapis.com/v0/b/whydoctorsask-f0681.appspot.com/o/american-application.png?alt=media&token=d7acabbe-0870-4ecd-8ac5-9c1e634280e3"
            ></b-carousel-slide>

            <b-carousel-slide 
            style="height:14rem;"
            img-width="1024"
            img-height="480"
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