<template>
  <div id="app">
    <!-- <div class="page" v-if="showSpinner">
      <b-spinner class="spinner" variant="primary" type="grow" :key="primary"></b-spinner>
    </div>-->
    <div id="nav">
      <top-header />
    </div>
    <router-view />
    <bottom-footer />
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "top-header": TopHeader,
    "bottom-footer": Footer
  }
};
</script>

<style lang="scss">
@import "assets/custom.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

html {
  overflow: hidden;
  color: #000000;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
  perspective: 1px;
  transform-style: preserve-3d;
  overflow-y: scroll;
  overflow-x: hidden;
}

#nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active {
  border: none;
}

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
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

#header {
  height: 100vh;
  min-height: 300px;
  width: 100%;
  max-height: 500px;
  font-size: 3rem;
  position: relative;
  transform-style: inherit;
  background: 50% 50% / cover;
  overflow: hidden;

  &::before {
    background: 50% 0% / cover;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    background-image: url("https://images.unsplash.com/photo-1578491133524-f33d9c7a7484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1323&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    transform-origin: center center;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1000%;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.6);
  }

  .header-block-content {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 25vh;
    z-index: 2;
    position: relative;

    p:nth-child(2) {
      font-size: 0.8em;
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: calc(100% - 4vw);
  margin: 0 2vw;
  padding: 2rem 1rem 3rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  background-color: #fefefe;

  & > div {
    margin: auto;
    max-width: 1200px;
  }
}

#portfolio-container {
  width: 100%;

  // .row {
  //   width: 100%;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  // }

  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .portfolio-card {
    max-width: 350px;
    min-width: 250px;
    width: 33%;
    flex: 1 1 auto;
  }
}
</style>
