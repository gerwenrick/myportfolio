<template>
  <div id="app">
    <div class="page" v-if="showSpinner">
      <b-spinner class="spinner" variant="primary" type="grow" :key="primary"></b-spinner>
    </div>
    <div id="nav">
      <top-header />
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopHeader from "@/components/TopHeader.vue";

export default {
  computed: {
    ...mapGetters(["showSpinner"])
  },
  components: {
    "top-header": TopHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    margin: 0 10px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}
.spinner {
  z-index: 999;
  position: relative;
  top: calc(50% - 1rem);
  width: 2rem;
  height: 2rem;
}
</style>
