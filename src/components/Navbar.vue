<template>
    <div>
        <b-navbar toggleable="lg" type="dark" style="background-color: #7395AE;">
            <b-navbar-brand to="">WhyDoctorsAsk
                <span>
                    <img style="width:20px;height:35px;" src="../assets/wda_icon.png" />
                </span>
            </b-navbar-brand>
            <b-navbar-toggle target="#nav-collapse"></b-navbar-toggle>
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" style="background-color: #557A95;">
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Questions Doctors Ask" right>
                        <b-dropdown-item to="/questions-doctors-ask">Questions Doctors Ask</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item to="/questions-doctors-ask/hpi">History of Present Illness</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/pmh">Past Medical History</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/fhx">Family Medical History</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/shx">Social History</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/subhx">Substance History</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/sexhx">Sexual History</b-dropdown-item>
                        <b-dropdown-item to="/questions-doctors-ask/rhx">Review of Symptoms</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item to="/">Physical Exams</b-nav-item>
                    <b-nav-item to="/">Common Labs</b-nav-item>
                    <b-nav-item to="/">Common Screening Tools</b-nav-item>
                    <b-nav-item to="/">Common Imaging Tools</b-nav-item>
                    <b-nav-item to="/">Common Vaccines</b-nav-item>
                    <b-nav-item to="/">Common Recommendation</b-nav-item>
                    <b-nav-item to="/">Questions to Ask</b-nav-item>
                    <b-nav-item to="/">Common Medical Words</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar"
};
</script>