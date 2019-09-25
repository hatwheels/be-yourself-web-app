<template>
    <v-dialog
        v-model="state"
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
        <v-card-actions><v-btn @click="state = false">OK</v-btn></v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      state: false
    }
  },
  watch: {
    state: function() {
        console.log('signup state: ' + this.state)
    }
  }
}
</script>