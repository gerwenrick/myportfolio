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
@import "@/assets/custom.scss";

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
  background-color: #efefef;
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

#header {
  height: 100vh;
  min-height: 300px;
  width: 100%;
  max-height: 750px;
  font-size: 3rem;
  position: relative;
  transform-style: inherit;
  background: 50% 50% / cover;
  overflow: hidden;

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

  .header-img {
    background: 50% 0% / cover;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    background-image: url("./assets/images/mountain-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    transform-origin: center center;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
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
  margin-top: -10rem;

  & > div {
    width: 100%;
    margin: auto;
    max-width: 1200px;
  }
}

section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 5rem;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
}

a {
  position: relative;
  text-decoration: none !important;
  color: inherit;
  transition: 0.1s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 1;

  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 105%;
    height: 10%;
    bottom: 0%;
    left: -2.5%;
    transform: translate(50% 50%);
    background-color: black;
    transition: $transition;
    z-index: 0;
  }

  &:hover {
    color: #ffffff;
    z-index: 1;

    &::after {
      height: 100%;
      z-index: -1;
    }
  }

  &.back-btn {
    display: inline-flex;
    align-self: center;

    &:hover {
      svg {
        fill: white;
      }
    }

    svg {
      height: 1em;
      width: 1em;
      top: 0.125em;
      position: relative;
      margin-right: 5px;
    }
  }
}

#portfolio-container {
  width: 100%;

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
.card-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  a {
    color: inherit !important;

    &:hover {
      text-decoration: none;
    }
  }

  .card {
    flex: 0 1 23%;
    max-width: 18rem;
    transition: $transition;

    &:hover {
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2),
        0 3px 12px 0 rgba(0, 0, 0, 0.15);
      transform: translateY(-0.2rem);
    }

    &:active {
      transform: translateY(0rem);
    }

    .card-body {
      img {
        object-fit: fill;
        width: 100%;
        height: 100%;
      }

      &:nth-child(1) {
        padding: 0;
      }
      &:nth-child(2) {
        position: relative;
        padding: 0 1.25rem 1.25rem 1.25rem;
        margin-top: -2.1rem;
        height: auto;
        width: 100%;

        h2 {
          text-shadow: 0 1px #000000;
          color: white;
        }
      }
    }
  }
}
</style>
