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
