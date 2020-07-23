<template>
    <div style="text-align:center;">
        <hr style="width: 90%;border: 1px solid #7395AE;">
        <!-- Footer Nav -->
        <b-nav pill align="center">
            <b-nav-item style="width: 20rem;" class="btn btn-light" to="/about">About Us</b-nav-item>
            <b-nav-item style="width: 20rem;" class="btn btn-light" to="/#">Blog</b-nav-item>
            <b-nav-item style="width: 20rem;" class="btn btn-light" to="/#">Anonymous Questions</b-nav-item>
            <b-nav-item style="width: 20rem;" class="btn btn-light" to="/#">Contact Us</b-nav-item>
        </b-nav>
        <!-- Socail Media Icons -->
        <div class="social-links">
            <a href="https://www.facebook.com/Why-Doctors-Ask-323139661611079/">
                <span style="color:#3B5998;">
                    <i class="fab fa-facebook-square"></i>
                </span>
            </a>
            <a href="https://twitter.com/whyweaskllc?lang=en">
                <span style="color:#55ACEE;">
                    <i class="fab fa-twitter-square"></i>
                </span>
            </a>
            <a href="https://www.instagram.com/whyweaskllc/?hl=en">
                <span style="color:#125688;">
                    <i class="fab fa-instagram-square"></i>
                </span>
            </a>
            <a href="#">
                <span style="color:#BB0000;">
                    <i class="fab fa-youtube-square"></i>
                </span>
            </a>
        </div>
        <!-- Footer Information -->
        <hr style="width: 70%;border: 1px solid #7395AE;">
        <p style="width: 70%;margin-left:15%;">If you are having a medical emergency, please call 911 immediately. The fonts and icons are property of Google, LLC.
            The content on this site is based on various medical resources and is currated by the owners. Diseases and findings
            that match them are given just as examples. There are many conditions that can have the same signs and appearances.
            If you have concerns about something specific, we recommend you ask your doctor. All rights reserved &copy;2020.</p>
        <hr style="width: 70%;border: 1px solid #7395AE;">
        <p>WhyDoctorsAsk is a division of WhyWeAsk LLC</p>
        
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.social-links {
    text-align:center;
    padding: 0rem;
    font-size: 75px;
}
.social-links a {
    padding: 1rem;
}
.footer-links {
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;   
}
</style>