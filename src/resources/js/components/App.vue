<template>
  <v-app>
    <StickyHeader/>

    <v-content class='pt-0 primary'>

      <v-img :src='require("../../../public/images/be-yourself_02.jpg")'>
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
        <v-row>
          <v-col>
            <div class="display-3 font-weight-bold text-center">Be Yourself!</div>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col>
            <v-avatar size=400>
              <v-img :src='require("../../../public/images/freedom.jpg")'></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-avatar size=400>
              <v-img :src='require("../../../public/images/adventure.jpg")'></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-avatar size=400>
              <v-img :src='require("../../../public/images/lovers.jpg")'></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>

    </v-content>

    <MyFooter/>
  </v-app>
</template>

<script>
  import StickyHeader from './StickyHeader';
  import MyFooter from './MyFooter';

  export default {
    name: 'App',

    components: {
      StickyHeader,
      MyFooter,
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
