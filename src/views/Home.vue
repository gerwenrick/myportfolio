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

    <div class="testimonial">
      <h3>Testimonial</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
#header {
  height: 80vh;
  min-height: 300px;
  width: 100%;
  font-size: 3rem;

  .header-block {
    background-image: url("../assets/images/mountain-bg.png");
    background-position: center;
    background-position-y: 15%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    padding: 15rem 0;

    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.3);
    }

    .header-block-content {
      box-sizing: border-box;
      top: 0;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      p:nth-child(2) {
        font-size: 0.8em;
      }
    }
  }
}
</style>
