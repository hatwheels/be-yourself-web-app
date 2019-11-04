<template>
  <v-app-bar
    app
    id="bar"
    ref="bar"
    :color="this.dynamicColor"
    flat
  >
    <v-img :src='require("../../../public/images/be-yourself_inverted-transparent-logo.png")'
      max-height="40px"
      max-width="180px"
      contain
    />

    <div class="flex-grow-1"></div>

    <v-btn
      class="ms-2 caption font-weight-bold"
      rounded color='green'
      dark
      @click="updateOverlay()"
    >
      Be a Guest
    </v-btn>

    <SignUpForm/>

    <LogInForm/>
  </v-app-bar>
</template>

<script>
  import LogInForm from './LogInForm'
  import SignUpForm from './SignUpForm'

  export default {
    components: {
      SignUpForm,
      LogInForm,
    },

    props: {
      dynamicColor: String,
      showOverlay: Boolean,
    },

    methods: {
      updateOverlay () {
        this.$emit('update:showOverlay', !this.showOverlay);
        console.log(!this.showOverlay)
      }
    },
  }
</script>

<style>

</style>