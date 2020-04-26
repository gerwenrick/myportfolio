<template>
  <div>
    <div id="header">
      <div class="header-block">
        <div class="header-block-content">
          <p>I am Rick van Gerwen</p>
          <p>UX / UI Developer</p>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="testimonial">
        <h2>Testimonial</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fuga soluta vel quasi non molestias adipisci nemo nulla beatae maiores cum dicta deleniti ea nam illo maxime quibusdam, commodi repudiandae sapiente quod nostrum porro temporibus tempore! Et, iusto autem porro, hic dolor deserunt accusamus in consequatur sapiente mollitia consequuntur. Dolorem eius asperiores iusto aperiam placeat delectus nesciunt ex, ullam reiciendis, rem magnam fugit quo repudiandae veniam. Blanditiis dicta quod dolorem a ipsa dolor fugiat expedita ullam perferendis, iste enim, aliquam aspernatur tempore, rerum voluptatibus dolores quam? Numquam aliquam culpa tempora, dolor porro unde praesentium maiores repudiandae, quos repellendus commodi harum.</p>
      </div>

      <div class="portfolio">
        <h2>Portfolio</h2>
        <b-container id="portfolio-container">
          <b-row align-v="center">
            <PortfolioCard
              class="portfolio-card"
              v-for="portfolioItem in homePortfolioItems"
              :key="portfolioItem.id"
              :name="portfolioItem.name"
              :id="portfolioItem.id"
            ></PortfolioCard>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  async mounted() {
    this.fetchData();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  components: {
    PortfolioCard
  },
  computed: {
    ...mapGetters(["portfolioItems", "homePortfolioItems", "rows"])
  },
  methods: {
    // paginate(currentPage) {
    //   this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    // },
    async fetchData() {
      await this.$store.dispatch("fetchPortfolioItems");
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  max-height: 1000px;

  &::before {
    background-image: url("../assets/images/mountain-bg.png");
  }

  .header-block-content {
    padding-top: 30vh;
  }
}

.content {
  margin-top: -10rem;
}

.portfolio,
.testimonial {
  width: 100%;
}
</style>
