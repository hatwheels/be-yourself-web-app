<template>
    <v-card >
    <v-img
      :src='require("../../../public/images/be-yourself.jpg")'
    >
      <v-app-bar
        app
        color='rgb(0, 0, 0, 0)'
        flat
        hide-on-scroll
      >

        <v-toolbar-title><strong class="white--text text--lighten-1">Be Yourself!</strong></v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-btn class="ms-2" rounded color="green" dark>Get hosted</v-btn>

        <v-btn class="ms-2" text small color="white">Sign Up</v-btn>

        <v-btn class="ms-2" text small color="white">Log In</v-btn>

      </v-app-bar>
      <v-card-title class="align-center justify-center fill-height white--text">I'm a title</v-card-title>
    </v-img>
    </v-card>
</template>

<script>
    export default {
    }
</script>

<style>

</style>