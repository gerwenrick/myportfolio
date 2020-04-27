<template>
  <div>
    <div id="header">
      <div class="header-block">
        <div class="header-block-content">
          <p>{{portfolioItemName}}</p>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="row">
        <router-link :to="{name: 'portfolio'}" style="font-size:3em;">Terug</router-link>
      </div>
      <div class="row">
        <ul>
          <li>{{portfolioItemId}}</li>
          <li>{{portfolioItemName}}</li>
          <li>{{portfolioItemDescription}}</li>
          <li>
            <!-- <img :src="portfolioItemImage" :alt="portfolioItemName" /> -->
            <img :src="require(`@/assets/images/${portfolioItemImage}`)" alt="portfolioItemName" />
          </li>
        </ul>
      </div>

      <div class="row"></div>
    </div>
  </div>
</template>

<script>
// import store from "../store";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      portfolioItemId: this.$route.params.id,
      portfolioItemName: this.$route.params.name,
      portfolioItemImage: this.$route.params.image,
      portfolioItemDescription: this.$route.params.description
    };
  },
  computed: {
    ...mapGetters(["portfolioItems", "displayPortfolioItems", "rows"])
    // portfolioitem() {
    //   return store.portfolioItems.find(
    //     portfolioitem => portfolioitem.id === this.portfolioItemId
    //   );
    // }
  }
};
</script>

<style lang="scss" scoped>
#header {
  max-height: 500px;

  &::before {
    // background-image: url("../assets/images/mountain-bg.png");
  }
}

.row img {
  max-width: 350px;
}

.bgimage {
  height: 50vh;
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
    background-size: cover;
    background-repeat: no-repeat;
    transform-origin: center center;
  }
}
</style>
