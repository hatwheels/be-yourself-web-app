<template>
  <v-dialog
    v-model="state"
    width="800"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="ms-2"
        text
        small
        dark
        v-on="on"
      >
        Sign Up
      </v-btn>
    </template>
      <v-card tile>
        <v-btn text icon @click="state = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
        <form class="px-4 py-4 m-auto" lazy-validation>
            <v-text-field
                v-model="firstName"
                :error-messages="firstNameErrors"
                append-icon='mdi-account-circle'
                label="First Name"
                outlined
                required
                @input="delayTouch($v.firstName)"
                @blur="$v.firstName.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="lastName"
                :error-messages="lastNameErrors"
                append-icon='mdi-account-circle'
                label="Last Name"
                outlined
                required
                @input="delayTouch($v.lastName)"
                @blur="$v.lastName.$touch()"
            ></v-text-field>
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
            <v-text-field
                v-model="repeatPassword"
                :error-messages="repeatPasswordErrors"
                :type="show ? 'text' : 'password'"
                label="Repeat Password"
                outlined
                required
                @input="delayTouch($v.repeatPassword)"
                @blur="$v.repeatPassword.$touch()"
            ></v-text-field>

            <v-btn block x-large color="accent" @click="submit">Sign Up</v-btn>
        </form>
      </v-card>
  </v-dialog>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, sameAs, alpha, email, password } from 'vuelidate/lib/validators'

  const touchMap = new WeakMap()

  export default {
    mixins: [validationMixin],

    validations: {
      firstName: { required, alpha },
      lastName: { required, alpha },
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
      repeatPassword: { sameAsPassword: sameAs('password') },
    },

    data () {
      return {
        state: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        show: false,
      }
    },

    watch: {
      state: function() {
          console.log('signup state: ' + this.state)
      }
    },

    computed: {
      firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.alpha && errors.push('Only letters are allowed.')
        !this.$v.firstName.required && errors.push('First Name is required.')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.alpha && errors.push('Only letters are allowed.')
        !this.$v.lastName.required && errors.push('Name is required.')
        return errors
      },
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
      },
      repeatPasswordErrors () {
          const errors = []
          if (!this.$v.repeatPassword.$dirty) return errors
          !this.$v.repeatPassword.sameAsPassword && errors.push('The passwords do not match.')
          return errors
      },
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