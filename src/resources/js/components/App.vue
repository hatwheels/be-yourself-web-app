<template>
  <v-app>
    <StickyHeader :dynamicColor="isImgVisible ? 'transparent' : 'rgb(0, 0, 0, 0.3)'"/>
    
    <v-content class='pt-0 primary'>
    
      <Introduction :isImgVisible.sync="isImgVisible"></Introduction>

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
            <v-card flat color="primary">
              <v-card-title class="display-2 font-weight-bold text-center">Your Freedom</v-card-title>
              <v-card-text>
                <p class="headline">
                  Travel around the world
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="space-around" align="center">
          <v-col cols=4>
            <v-card flat color="primary">
              <v-card-title class="display-2 font-weight-bold text-center">Adventure</v-card-title>
              <v-card-text>
                <p class="headline">
                  Make new quests
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
              <v-card-title class="display-2 font-weight-bold text-center">Love &amp; Friendship</v-card-title>
                <v-card-text>
                  <p class="headline">
                    Make new friends, meet new lovers
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
