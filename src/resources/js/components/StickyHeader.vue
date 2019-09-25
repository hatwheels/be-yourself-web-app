<template>
    <v-img
      :src='require("../../../public/images/be-yourself_02.jpg")'
    >
      <v-app-bar
        app
        color='rgb(0, 0, 0, 0)'
        flat
      >

        <!-- <v-toolbar-title><strong class="white--text text--lighten-1">Be Yourself!</strong></v-toolbar-title> -->
        <v-img :src='require("../../../public/images/be-yourself_inverted-transparent-logo.png")'
          max-height="40px"
          max-width="180px"
          contain
        />

        <div class="flex-grow-1"></div>

        <v-btn class="ms-2" rounded color="green" dark>Get hosted</v-btn>

        <v-btn class="ms-2" text small color="white">Sign Up</v-btn>

        <v-btn class="ms-2" text small color="white">Log In</v-btn>

      </v-app-bar>
    </v-img>
</template>

<script>
    export default {
    }
</script>

<style>

</style>