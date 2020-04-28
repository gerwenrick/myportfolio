<template>
  <div>
    <form id="signup-form" @submit.prevent="processForm">
      <!-- name -->
      <div class="field">
        <label class="label">Name</label>
        <input type="text" class="input" name="name" v-model="name" />
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <input type="email" class="input" name="email" v-model="email" @blur="validateEmail" />

        <!-- <p class="help is-danger" v-if="errors.email">Please enter a valid email.</p> -->
      </div>

      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contactform"
};

const signupForm = document.getElementById("signup-form");
const nameInput = signupForm.querySelector("input[name=name]");
const emailInput = signupForm.querySelector("input[email=email]");

signupForm.addEventlistener("submit", processSignupForm);
function processSignupForm(e) {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  console.log({ name, email });

  alert("Processing");
}
</script>

<style lang="scss" scoped>
</style>
