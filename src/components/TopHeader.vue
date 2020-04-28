<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/" id="nav-logo">
        <!-- <img src="../assets/icons/logo.svg" alt="Rick van Gerwen" id="nav-logo" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 83 52">
          <g>
            <path
              id="R"
              d="M24.4,51L7.9,27.8H7.8V51H0.5V1h16c12,0,17.4,6.4,17.4,16.6c0,9.5-7.3,14.5-14.3,14.7l14,18.6H24.4z M13.1,26.8
		c8.5,0,13.4-3.3,13.4-9.8c0-5.7-4.6-9.3-11.1-9.3H7.8v19.1H13.1z"
            />
            <path
              id="G"
              d="M53.3,32.6v-6.4h29c-0.4,16-12,24.9-24.2,24.9c-12.4,0-23-11.3-23-24.3C35.2,11,46.6,1,58.2,1c8.8,0,16.4,4.4,21,13
		h-7.8c-3.9-4.7-7.8-6.6-12.9-6.6c-8.9,0-16.6,8.9-16.6,18.4c0,10.2,7.6,18.7,16.9,18.7c7.3,0,13.1-4.2,16-12H53.3z"
            />
          </g>
        </svg>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
          <b-nav-item :to="{name: 'portfolio'}" exact>Portfolio</b-nav-item>
          <b-nav-item :to="{name: 'about'}" exact>About</b-nav-item>
          <b-nav-item :to="{name: 'contact'}" exact>Contact</b-nav-item>
          <b-nav-item :to="{name: 'test'}" exact>Test</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items  -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchText"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/custom.scss";

#nav {
  a {
    padding: 10px;
    color: $text-color;
    font-weight: 700;
    text-shadow: none;
    transition: color 0.2s;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: $text-color;
      content: "";
      opacity: 0;
      transition: opacity 0.2s, transform 0.2s;
      transform: translateY(-10px);
    }

    &::before {
      top: 0;
      transform: translateY(-10px);
    }

    &::after {
      bottom: 0;
      transform: translateY(10px);
    }

    &:hover,
    &:focus {
      color: #000000;
    }

    &:hover::before,
    &:focus::before,
    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

#nav-logo {
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  &::before,
  &::after {
    display: none;
    content: "";
    opacity: 0;
    transition: none;
  }

  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    opacity: 0;
    transform: none;
  }

  svg {
    height: 35px;
    width: auto;
  }
}
</style>
