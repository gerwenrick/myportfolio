<template>
  <div>
    <h3>Contact Me</h3>
    <p>Please feel free to contact me any time through the form below!</p>

    <div class="inner">
      <form action>
        <label class="form-group">
          <input type="text" class="form-control" required />
          <span>Your Name</span>
          <span class="border"></span>
        </label>
        <label class="form-group">
          <input type="text" class="form-control" required />
          <span for>Your Mail</span>
          <span class="border"></span>
        </label>
        <label class="form-group">
          <textarea name id class="form-control" required></textarea>
          <span for>Your Message</span>
          <span class="border"></span>
        </label>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactform"
};
</script>

<style lang="scss" scoped>
input,
textarea,
select,
button {
  color: #fff;
  font-size: 1rem;
}
:focus {
  outline: none;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
}
.inner {
  max-width: 750px;
  margin: 2rem auto 0;
  padding: 5rem 6rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
textarea {
  resize: auto;
}
h3 {
  text-transform: uppercase;
  font-size: 45px;
  text-align: center;
  margin-bottom: 12px;
}
p {
  text-align: center;
}
.form-group {
  position: relative;
  display: block;
  margin-bottom: 48px;
  span {
    font-size: 15px;
    position: absolute;
    top: 11px;
    transition: all 0.2s ease;
    transform-origin: 0 0;
    cursor: text;
  }
  span.border {
    height: 2px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    transform: scaleX(0);
    transition: all 0.15s ease;
    background: #fff;
  }
}
.form-control {
  border: none;
  border-bottom: 2px solid #000000;
  display: block;
  width: 100%;
  height: 43px;
  font-size: 15px;
  background: none;
  font-family: "Montserrat-SemiBold";
  &:focus,
  &:valid {
    border-bottom: 2px solid #fff;
    & + span {
      transform: translateY(-22px) scale(0.8);
      & + .border {
        transform: scaleX(1);
      }
    }
  }
}
textarea.form-control {
  padding-top: 10px;
  padding-bottom: 10px;
}
button {
  border: none;
  width: 162px;
  height: 51px;
  // border: 2px solid #fff;
  border: none;
  margin: auto;
  margin-top: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  color: inherit;
  text-transform: uppercase;
  transform: perspective(1px) translateZ(0);
  position: relative;
  transition: 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    background: #000000;
    height: 5%;
    width: 100%;
    transition: 0.2s ease-in-out;
  }
  &:hover {
    color: #ffffff;
    &:before {
      height: 100%;
    }
  }
}
@media (max-width: 1199px) {
}
@media (max-width: 991px) {
}
@media (max-width: 767px) {
  h3 {
    font-size: 38px;
  }
  p {
    font-size: 14px;
    padding: 0;
  }
  .inner {
    padding: 27px 20px 37px;
    border: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
  }
}
</style>
