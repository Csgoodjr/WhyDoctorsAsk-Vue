<template>
    <div>
        <!-- Footer Nav -->
        <div class="footer-links">
            <a class="btn btn-light" to="/about">About Us</a>
            <a class="btn btn-light" to="/#">Blog</a>
            <a class="btn btn-light" to="/#">Anonymous Questions</a>
            <a class="btn btn-light" to="/#">Contact Us</a>
        </div>
        <!-- Footer Information -->
        <hr style="width: 70%;border: 1px solid #7395AE;">
        <p style="width: 70%;margin-left:15%;">If you are having a medical emergency, please call 911 immediately. The fonts and icons are property of Google, LLC.
            The content on this site is based on various medical resources and is currated by the owners. Diseases and findings
            that match them are given just as examples. There are many conditions that can have the same signs and appearances.
            If you have concerns about something specific, we recommend you ask your doctor. All rights reserved &copy;2020.</p>
        <hr style="width: 70%;border: 1px solid #7395AE;">
        <p>WhyDoctorsAsk is a division of WhyWeAsk LLC</p>
        <!-- Socail Media Icons -->
        <font-awesome-icon :icon="['fab', 'facebook']" />
        <div>
            <div style="text-align:center;padding: 40px;font-size: 75px;">
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
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer-links {
    padding: 15px;
    width: 50%;
    display: inline-flex;
    justify-content: space-evenly;   
}
.fa {
    font-size: 25px;
    text-decoration: none;
}
.fa:hover {
    text-decoration: none;
}
</style>