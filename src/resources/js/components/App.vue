<template>
  <v-app>
    <StickyHeader :dynamicColor="isImgVisible ? 'transparent' : 'rgb(0, 0, 0, 0.3)'"/>

    <v-content class='pt-0 primary'>

      <v-img
        v-observe-visibility="{
          callback: visibilityImgChanged,
            intersection: {
              root: $refs.bar,
              threshold: 0.05,
            },
          }"
        :src='require("../../../public/images/be-yourself_02.jpg")'
      >
        <div
          class="d-flex align-center justify-space-between"
          style="height: 100%;"
        >
          <div class="pl-8 display-3 font-weight-bold text-center white--text"
            style="width: 33%"
          >
            Travel all over the world
          </div>
          <div
            class="pl-8 display-3 font-weight-bold text-center white--text"
            style="width: 33%"
          >
            Meet new people
          </div>
        </div>
      </v-img>

      <v-container fluid>

        <v-row justify="center" align="center">
          <v-col>
            <div class="display-3 font-weight-bold text-center">Be Yourself!</div>
          </v-col>
        </v-row>
        
        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <v-card>
              <v-img :src='require("../../../public/images/freedom.jpg")'></v-img>
            </v-card>
          </v-col>
          <v-col cols=4>
            <div class="display-2 font-weight-bold text-center">Your Freedom</div>
          </v-col>
        </v-row>
        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <div class="display-2 font-weight-bold text-center">Adventure</div>
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
            <div class="display-2 font-weight-bold text-center">Love &amp; Friendship</div>
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
  import VueObserveVisibility from 'vue-observe-visibility'

  export default {
    name: 'App',

    components: {
      StickyHeader,
      MyFooter,
      VueObserveVisibility,
    },

    data () {
      return {
        isImgVisible: true,
      }
    },

    methods: {
      visibilityImgChanged (isVisible, entry) {
        this.isImgVisible = isVisible
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

  .v-application .title,
  .v-application .headline,
  .v-application .display-1,
  .v-application .display-2,
  .v-application .display-3,
  .v-application .display-4 {
    font-family: 'Lato', sans-serif !important;
  }
</style>
