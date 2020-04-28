<template>
  <div>
    <div id="header">
      <div class="header-img"></div>
      <div class="header-block">
        <div class="header-block-content">
          <p>I am Rick van Gerwen</p>
          <p>UX / UI Developer</p>
        </div>
      </div>
    </div>

    <div class="content">
      <section>
        <div class="testimonial">
          <h2>Welkom</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fuga soluta vel quasi non molestias adipisci nemo nulla beatae maiores cum dicta deleniti ea nam illo maxime quibusdam, commodi repudiandae sapiente quod nostrum porro temporibus tempore! Et, iusto autem porro, hic dolor deserunt accusamus in consequatur sapiente mollitia consequuntur. Dolorem eius asperiores iusto aperiam placeat delectus nesciunt ex, ullam reiciendis, rem magnam fugit quo repudiandae veniam. Blanditiis dicta quod dolorem a ipsa dolor fugiat expedita ullam perferendis, iste enim, aliquam aspernatur tempore, rerum voluptatibus dolores quam? Numquam aliquam culpa tempora, dolor porro unde praesentium maiores repudiandae, quos repellendus commodi harum.</p>
        </div>
      </section>

      <section>
        <div class="portfolio">
          <h2>Portfolio</h2>

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
      </section>

      <section>
        <div class="contactform">
          <contact-form />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import { mapGetters } from "vuex";
import portJson from "@/assets/data/portfolio.json";

export default {
  name: "home",
  async mounted() {
    this.fetchData();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      portJson: portJson.slice(0, 3)
    };
  },
  components: {
    "contact-form": ContactForm
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

  .header-img {
    background-image: url("../assets/images/mountain-bg.png");
  }

  .header-block-content {
    padding-top: 30vh;
  }
}

.portfolio,
.testimonial {
  width: 100%;
}
</style>
