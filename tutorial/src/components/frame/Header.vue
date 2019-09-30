<template>
  <div id="Header">
    <b-navbar  toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" id="title">            <b-card-img :src="require('assets/home.png')" class="rounded-0" id="header"></b-card-img></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-on:click="redirect('/register')">Register</b-nav-item>
          <b-nav-item v-on:click="redirect('/login')">Login</b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/colors.scss";
#title {
  color: $warning !important;
}
</style>

<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>

<style scoped>
#home{
	width:5%; 
	height: auto;
}
#header{
  width:30%;
  height:auto;
}
</style>