<template>
  <v-app>
    <StickyHeader :showOverlay.sync="overlay" :dynamicColor="isImgVisible ? 'transparent' : 'rgb(0, 0, 0, 0.3)'"/>
    
    <v-content class='pt-0 primary'>

    <v-overlay
      :value="overlay"
      opacity="0.8"
      color="accent"
    >
      <v-card flat color="transparent">
        <v-btn text icon @click="overlay = false">
          <v-icon color="secondary" large>mdi-close-circle-outline</v-icon>
        </v-btn>
        <v-card-title class="secondary--text display-4 font-weight-bold">Out in April 2020!</v-card-title>
      </v-card>
    </v-overlay>

      <Introduction :isImgVisible.sync="isImgVisible"></Introduction>

      <div class="accent pt-6 pb-6">

        <v-row justify="center" align="center">
          <v-col><div class="info--text display-3 font-weight-bold text-center">Free Hospitality</div></v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col><v-sheet class="mx-auto" color="secondary" height="10" width="200"></v-sheet></v-col>
        </v-row>
        <v-row  justify="center" align="center">
          <v-col><p class="info--text headline text-center">Feel free to travel all over the world as a <strong>real guest without accomodation expenses!</strong></p></v-col>
        </v-row>

      </div>

      <v-container class="pt-12 pb-12" fluid>

        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <v-card>
              <v-img :src='require("../../../public/images/freedom.jpg")'></v-img>
            </v-card>
          </v-col>
          <v-col cols=4>
            <v-card flat color="primary">
              <v-card-title class="info--text display-2 font-weight-bold">Your Freedom</v-card-title>
              <v-card-text>
                <p class="pb-4 headline">
                  Travel around the world
                </p>
                <p class="title">
                  Choose the host with common interests and hobbies and live a new adventure.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <v-card flat color="primary">
              <v-card-title class="info--text display-2 font-weight-bold">Adventure</v-card-title>
              <v-card-text>
                <p class="pb-4 headline">
                  Make new quests
                </p>
                <p class="title">
                  Wherever you are in the world, you have the opportunity to host and meet new people with the same interests and hobbies.
                </p>
                <p class="title">
                  Hospitality is a virtue describing us humans since ancient times and we are pleased it lives on to this day.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols=4>
            <v-card>
              <v-img :src='require("../../../public/images/adventure.jpg")'></v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <v-card>
              <v-img :src='require("../../../public/images/lovers.jpg")'></v-img>
            </v-card>
          </v-col>
          <v-col cols=4>
            <v-card flat color="primary">
              <v-card-title class="info--text display-2 font-weight-bold">Love &amp; Friendship</v-card-title>
              <v-card-text>
                <p class="pb-4 headline">
                  Make new friends, flirt, meet the love of your life! 
                </p>
                <p class="title">
                  Make new friends as a host or guest. Go skiing, fishing, watch a movie or have dinner at a restaurant together.
                </p>
                <p class="title">
                  Maybe you' ve just met a new friend or even a big love from another place of the world.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

    </v-content>

    <MyFooter/>
  </v-app>
</template>

<script>
  import StickyHeader from './StickyHeader'
  import MyFooter from './MyFooter'
  import Introduction from './Introduction'

  export default {
    name: 'App',

    components: {
      StickyHeader,
      MyFooter,
      Introduction,
    },

    data () {
        return {
            isImgVisible: true,
            overlay: false,
        }
    },
  };
</script>

<style>
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  .v-application .caption,
  .v-application .subtitle-2,
  .v-application .subtitle-1,
  .v-application .title,
  .v-application .headline,
  .v-application .display-1,
  .v-application .display-2,
  .v-application .display-3,
  .v-application .display-4 {
    font-family: 'Lato', sans-serif !important;
  }
</style>
