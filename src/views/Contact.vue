<template>
  <div>
    <div id="header">
      <div class="header-img"></div>
      <div class="header-block">
        <div class="header-block-content">
          <p>Contact</p>
        </div>
      </div>
    </div>
    <div class="content">
      <section>
        <contact-form />
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact",
  components: {
    "contact-form": ContactForm
  }
};
</script>

<style lang="scss" scoped>
</style>
