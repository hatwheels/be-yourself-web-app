<template>
  <v-img
    :src='require("../../../public/images/be-yourself_02.jpg")'
  >
    <v-app-bar
      app
      color='transparent'
      flat
    >
      <v-img :src='require("../../../public/images/be-yourself_inverted-transparent-logo.png")'
        max-height="40px"
        max-width="180px"
        contain
      />

      <div class="flex-grow-1"></div>

      <v-btn class="ms-2" rounded color='accent' dark>Get hosted</v-btn>

      <SignUpForm/>

      <LogInForm/>

    </v-app-bar>
  </v-img>
</template>

<script>
  import LogInForm from './LogInForm';
  import SignUpForm from './SignUpForm';

  export default {
    components: {
      SignUpForm,
      LogInForm,
    },

    data () {
      return {
      }
    }
  }
</script>

<style>

</style>