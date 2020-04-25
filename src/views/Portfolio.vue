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
      <b-container>
        <b-row align-v="center">
          <portfolio-card
            v-for="portfolioItem in displayPortfolioItems"
            :key="portfolioItem.id"
            :name="portfolioItem.name"
            :id="portfolioItem.id"
          ></portfolio-card>
        </b-row>
        <b-pagination
          v-model="currentPage"
          pills
          :total-rows="rows"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          @input="paginate(currentPage)"
        ></b-pagination>
      </b-container>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "portfolio",
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
    "portfolio-card": PortfolioCard
  },
  computed: {
    ...mapGetters(["portfolioItems", "displayPortfolioItems", "rows"])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async fetchData() {
      await this.$store.dispatch("fetchPortfolioItems");
    }
  }
};
</script>
