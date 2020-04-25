<template>
  <div>
    <footer>
      <div class="row">
        <a href="https://www.linkedin.com/in/rick-van-gerwen/" target="_blank">
          <img class="footer-icon" src="../assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <div class="row">
        <p>© 2020 Copyright - Rick van Gerwen</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  margin: 5rem 0 2rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  .row {
    margin: 0.3rem;
    font-size: 0.9rem;

    .footer-icon {
      height: 100px;
      width: auto;
    }
  }
}
</style>
