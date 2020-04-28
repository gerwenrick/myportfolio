<template>
  <div>
    <div id="header">
      <div class="header-img"></div>
      <div class="header-block">
        <div class="header-block-content">
          <p>Portfolio</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <h1>This is a portfolio page</h1>
      </div>
      <div class="card-row">
        <div v-for="data in portJson" :key="data.id">
          <router-link
            :to="{name: 'portfoliodetail' , params: {id: data.id, name: data.name, image: data.image, description:data.description, score: data.score}}"
            exact
          >
            <b-card tag="div" class="mb-2">
              <b-card-img :src="require(`@/assets/images/${data.image}`)" :alt="data.name"></b-card-img>
              <b-card-body>
                <b-card-title>
                  <h2>{{data.name}}</h2>
                </b-card-title>
                <b-card-text>{{data.description}}</b-card-text>
              </b-card-body>
            </b-card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portJson from "@/assets/data/portfolio.json";

export default {
  name: "about",
  data() {
    return {
      portJson: portJson
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/custom.scss";

$transition: 0.1s ease-in-out;

.card-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  a {
    color: inherit;

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
