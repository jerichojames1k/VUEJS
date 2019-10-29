<template>
  <div>
    <b-navbar  toggleable="lg" type="dark" variant="light"  id="Header">
     <b-col md="5">
            <b-card-img :src="require('assets/header.png')" class="rounded-0" id="userIcon"></b-card-img>
          </b-col>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto"  v-show="$route.name==='register' || $route.name==='login' || $route.path === '/'">
          <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="redirect('/register')"  id="register">Register</b-button>&nbsp&nbsp&nbsp
          <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="redirect('/login')" id="login">Login</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/colors.scss";
#userIcon {
  width:12%;
  height:auto;
}
#Header{
  background-color:white;
}
#title {
  color: $warning !important;
}
#login{
  background:#BB6BD9;
}
#register{
  background:#BB6BD9;
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
	width:30%; 
	height: auto;
}
</style>