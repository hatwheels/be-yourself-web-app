<template>
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
            <div class="pl-8 display-3 font-weight-bold text-center primary--text"
                style="width: 33%"
            >
                Travel all over the world
            </div>
            <div
                class="pb-12 align-self-end display-3 font-weight-bold text-center primary--text"
            >
                Be Yourself <br> Get ready to go!
            </div>
            <div
                class="pl-8 display-3 font-weight-bold text-center primary--text"
                style="width: 33%"
            >
                Meet new people
            </div>
        </div>
    </v-img>
</template>

<script>
  import VueObserveVisibility from 'vue-observe-visibility'

    export default {
        components: {
            VueObserveVisibility,
        },

        props: {
            isImgVisible: Boolean,
        },

        methods: {
            visibilityImgChanged (isVisible, entry) {
                this.$emit('update:isImgVisible', isVisible);
            }
        },
    }
</script>