<template>
  <v-app>
    <StickyHeader/>
    
    <v-img :src='require("../../../public/images/be-yourself_02.jpg")'>
    <div style="height: 100%;" class="d-flex align-center justify-space-between">
        <div style="width: 33%" class="pl-8 display-3 font-weight-bold text-center white--text">Travel all over the world</div>
        <div style="width: 33%" class="pl-8 display-3 font-weight-bold text-center white--text">Meet new people</div>
    </div>
    </v-img>

    <v-content>

      <v-container fluid>
        <div class="display-3 font-weight-bold">Be Yourself!</div>
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

    computed: {

    }
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
