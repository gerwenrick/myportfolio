<template>
  <div>
    <div id="header">
      <div class="header-block">
        <div class="header-block-content">
          <p>Portfolio</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate odit debitis reprehenderit molestiae hic ratione, harum blanditiis porro minus illo pariatur commodi? Illo, harum architecto! Mollitia, blanditiis! Quod ad non aut. Omnis, explicabo. Maiores asperiores dignissimos et, qui, nisi cum vel laborum quis, eaque consequatur quibusdam quos nihil molestiae? Perferendis!</p>
      </div>
      <b-container id="portfolio-container">
        <b-row align-v="center" class="mb-2">
          <!-- <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @input="paginate(currentPage)"
          ></b-pagination>-->
          <b-navbar-nav>
            <b-nav-form @submit.prevent="search">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchText"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-row>
        <b-row>
          <!-- <portfolio-card
            class="portfolio-card"
            v-for="portfolioItem in displayPortfolioItems"
            :key="portfolioItem.id"
            :name="portfolioItem.name"
            :link="portfolioItem.name"
            :id="portfolioItem.id"
          ></portfolio-card>-->

          <div
            v-for="portfolioItem in portfolioItems"
            :key="portfolioItem.id"
            class="portfolio-card"
          >
            <router-link
              :to="{name: 'portfoliodetail', params: {id: portfolioItem.id, name: portfolioItem.name, image: portfolioItem.image, description:portfolioItem.description}}"
            >
              <div class="card-img">
                <!-- <img
                  :src="require('../assets/images/' + portfolioItem.image)"
                  :alt="portfolioItem.name"
                />-->
                <!-- <div
                  :style="{ backgroundImage: `url(${require(`@/assets/images/${portfolioItemImage}`)})` }"
                >></div>-->
                <!-- <img
                  src="https://images.unsplash.com/photo-1587836382353-27c939f3ff44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                  alt="portfolioItemName"
                />-->
              </div>
              <div class="card-title">
                <h2>{{portfolioItem.name}}</h2>
                <p>{{portfolioItem.image}}</p>
              </div>
            </router-link>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// import PortfolioCard from "@/components/PortfolioCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "portfolio",
  async mounted() {
    this.fetchData();
  },
  data() {
    return {
      currentPage: 1,
      searchText: ""
    };
  },
  components: {
    // "portfolio-card": PortfolioCard
  },
  computed: {
    ...mapGetters(["portfolioItems", "displayPortfolioItems", "rows"])
  },
  methods: {
    search() {
      this.$store.dispatch("search", { text: this.searchText });
    },
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async fetchData() {
      await this.$store.dispatch("fetchPortfolioItems");
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  border: 1px solid darkslategray;
  margin: 1em;
  border-radius: 5px;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);

    .card-img {
      img {
        opacity: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  .card-img {
    display: block;
    height: 200px;
    width: auto;
    overflow: hidden;
    object-fit: fill;

    img {
      height: auto;
      width: 100%;
      transition: 0.1s ease-in-out;
      opacity: 0.9;
    }
  }

  .card-title {
    text-align: center;
    transition: 0s;
  }
}
.form-control {
  width: unset;
}
</style>
