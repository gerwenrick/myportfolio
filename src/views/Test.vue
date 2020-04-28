<template>
  <div>
    <div id="header">
      <div class="header-img"></div>
      <div class="header-block">
        <div class="header-block-content">
          <p>Testpage</p>
        </div>
      </div>
    </div>

    <div class="content">
      <section>
        <div class="row">
          <router-link :to="{name: 'home'}" class="back-btn">
            <svg viewBox="0 0 492 492">
              <path
                d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
              />
            </svg>
            Back to overview
          </router-link>
        </div>
        <h2>Testing</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fuga soluta vel quasi non molestias adipisci nemo nulla beatae maiores cum dicta deleniti ea nam illo maxime quibusdam, commodi repudiandae sapiente quod nostrum porro temporibus tempore! Et, iusto autem porro, hic dolor deserunt accusamus in consequatur sapiente mollitia consequuntur. Dolorem eius asperiores iusto aperiam placeat delectus nesciunt ex, ullam reiciendis, rem magnam fugit quo repudiandae veniam. Blanditiis dicta quod dolorem a ipsa dolor fugiat expedita ullam perferendis, iste enim, aliquam aspernatur tempore, rerum voluptatibus dolores quam? Numquam aliquam culpa tempora, dolor porro unde praesentium maiores repudiandae, quos repellendus commodi harum.</p>
        <a href>Lorem, ipsum.</a>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tenetur corporis amet repellendus, alias similique dolorem perferendis distinctio debitis possimus?</p>

        <a href>Lorem, ipsum.</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "test"
};
</script>

<style lang="scss">
@import "@/assets/custom.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

html {
  overflow: hidden;
  color: #000000;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
  perspective: 1px;
  transform-style: preserve-3d;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #efefef;
}

#nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active {
  border: none;
}

#header {
  height: 100vh;
  min-height: 300px;
  width: 100%;
  max-height: 750px;
  font-size: 3rem;
  position: relative;
  transform-style: inherit;
  background: 50% 50% / cover;
  overflow: hidden;

  // &::before {
  //   background: 50% 0% / cover;
  //   content: "";
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   display: block;
  //   background-image: url("https://images.unsplash.com/photo-1578491133524-f33d9c7a7484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1323&q=80");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   transform-origin: center center;
  //   transform: translateZ(-1px) scale(2);
  //   z-index: -1;
  //   height: 100vh;
  //   width: 100vw;
  //   overflow: hidden;
  // }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1000%;
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
    padding-top: 25vh;
    z-index: 2;
    position: relative;

    p:nth-child(2) {
      font-size: 0.8em;
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: calc(100% - 4vw);
  margin: 0 2vw;
  padding: 2rem 1rem 3rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  background-color: #fefefe;
  margin-top: -10rem;

  & > div {
    margin: auto;
    max-width: 1200px;
  }
}

a.back-btn {
  display: inline-flex;
  align-self: center;
  position: relative;

  &:hover {
    svg {
      fill: white;
    }
  }

  svg {
    height: 1em;
    width: 1em;
    top: 0.125em;
    position: relative;
    margin-right: 5px;
    transition: 0.1s ease-in-out;
  }
}
</style>
