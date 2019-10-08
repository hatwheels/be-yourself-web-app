<template>
  <v-app>
    <StickyHeader/>
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
</style>
