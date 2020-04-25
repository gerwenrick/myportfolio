<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        img-alt="Portfolio-info"
        img-top
        class="mb-2"
      >
        <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, error.</b-card-text>
        <b-button
          v-b-modal="modalId"
          variant="primary"
          v-b-tooltip.hover
          title="Look into it!"
        >Details</b-button>
        <b-modal :id="modalId" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "id"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
#portfolio-container {
  .portfolio-card {
    max-width: 350px;
    min-width: 250px;
    width: 33%;
    flex: 1 1 auto;
  }
}
</style>
