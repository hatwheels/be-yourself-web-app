<template>
  <v-app>
    <StickyHeader/>
  </v-app>
</template>

<script>
import StickyHeader from './StickyHeader';

export default {
  name: 'App',
  components: {
    StickyHeader,
  },
};
</script>
