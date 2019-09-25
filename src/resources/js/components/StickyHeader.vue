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

        <v-dialog
          v-model="signUpDialog"
          width="500"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="ms-2"
              text
              small
              color="white"
              v-on="on"
            >
              Sign Up
            </v-btn>
          </template>
          <v-card>
            <v-card-title>test</v-card-title>
            <v-card-actions><v-btn @click="signUpDialog = false">OK</v-btn></v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog
          v-model="logInDialog"
          width="500"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="ms-2"
              text
              small
              color="white"
              v-on="on"
            >
              Log In
            </v-btn>
          </template>
          <v-card>
            <v-card-title>test2</v-card-title>
            <v-card-actions><v-btn @click="logInDialog = false">OK</v-btn></v-card-actions>
          </v-card>
        </v-dialog>

      </v-app-bar>
    </v-img>
</template>

<script>
    export default {
      data () {
        return {
          signUpDialog: false,
          logInDialog: false,
        }
      },
      watch: {
        signUpDialog: function() {
          console.log('signup state: ' + this.signUpDialog)
        },
        logInDialog: function() {
          console.log('login state: ' + this.logInDialog)
        },
      }
    }
</script>

<style>

</style>