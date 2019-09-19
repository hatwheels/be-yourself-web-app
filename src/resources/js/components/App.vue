<template>
  <v-app>
    <StickyHeader/>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './HelloWorld';
import StickyHeader from './StickyHeader';

export default {
  name: 'App',
  components: {
    StickyHeader,
    HelloWorld,
  },
};
</script>
