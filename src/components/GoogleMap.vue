<template>
    <div>
        <gmap-map :center="center" zoom="12" style="width:100%;height400px;"></gmap-map>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            center: {lat:45.508,lng:-73.587}
        }
    },
    mounted() {
        this.geolocate();
    },
    methods: {
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coord.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    }
}
</script>