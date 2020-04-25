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
  height: 100vh;
  min-height: 300px;
  width: 100%;
  font-size: 3rem;
  position: relative;
  transform-style: inherit;
  background: 50% 50% / cover;

  &::before {
    background: 50% 0% / cover;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    background-image: url("../assets/images/mountain-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    transform-origin: center center;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
    height: 100vh;
    width: 100vw;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.6);
  }

  .header-block-content {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 20rem;
    z-index: 2;
    position: relative;

    p:nth-child(2) {
      font-size: 0.8em;
    }
  }
}

.testimonial {
  height: 1000px;
  background-color: rgba(250, 250, 250, 1);
}
</style>
