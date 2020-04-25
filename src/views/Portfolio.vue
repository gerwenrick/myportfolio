<template>
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
