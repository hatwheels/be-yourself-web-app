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
        dark
        v-on="on"
      >
        Log In
      </v-btn>
    </template>
    <v-card tile>
      <v-btn text icon @click="state = false">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
      <form class="px-4 py-4 m-auto" lazy-validation>
          <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              append-icon='mdi-email'
              label="E-mail"
              outlined
              required
              @input="delayTouch($v.email)"
              @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              label="Password"
              outlined
              required
              @input="delayTouch($v.password)"
              @blur="$v.password.$touch()"
              @click:append="show = !show"
          ></v-text-field>
          <v-btn block x-large color="accent" @click="submit">Log In</v-btn>
      </form>
    </v-card>
    <!-- <v-card>
      <v-card-title>test2</v-card-title>
      <v-card-actions><v-btn @click="state = false">OK</v-btn></v-card-actions>
    </v-card> -->
  </v-dialog>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email, password } from 'vuelidate/lib/validators'

  const touchMap = new WeakMap()

  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[A-Z]/.test(password) && // checks for A-Z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 8
          );
        }
      },
    },

    data () {
      return {
        state: false,
        email: '',
        password: '',
        show: false,
      }
    },

    watch: {
      state: function() {
        console.log('signup state: ' + this.state)
      }
    },

    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail.')
        !this.$v.email.required && errors.push('E-mail is required.')
        return errors
      },
      passwordErrors () {
          const errors = []
          if (!this.$v.password.$dirty) return errors
          !this.$v.password.strongPassword && errors.push('Password must contain at least one small letter, one capital letter, one special character and be at least 16 characters long.')
          !this.$v.password.required && errors.push('Password is required.')
          return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.state = false
        }
      },
      delayTouch ($v) {
        $v.$reset()
        if (touchMap.has($v)) {
          clearTimeout(touchMap.get($v))
        }
        touchMap.set($v, setTimeout($v.$touch, 1000))
      }
    }
  }
</script>