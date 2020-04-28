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
  name: "portfolio",
  data() {
    return {
      portJson: portJson
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
